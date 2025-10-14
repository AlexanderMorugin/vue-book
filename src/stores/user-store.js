import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/config/supabase'

export const useUserStore = defineStore('userStore', () => {
  /* state */
  const user = ref([])
  const existUserErrorMessage = ref(null)

  /* actions */

  const registerUser = async (userData) => {
    existUserErrorMessage.value = null

    // создаем пользователя в Authentication
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: { first_name: userData.name },
      },
    })

    if (error) {
      console.log('useUserStore - registerUser: ', error)
      existUserErrorMessage.value = 'Пользователь с такой почтой уже существует.'
    } else {
      // собираем пользователя для Database
      const newUser = {
        id: data.user.id,
        name: data.user.user_metadata.first_name,
        email: data.user.email,
      }
      // создаем нового пользователя в Database
      await createUserInDatabase(newUser)

      // собираем пользователя для логина
      const userForLogin = {
        email: userData.email,
        password: userData.password,
      }
      // делаем логин
      await loginUser(userForLogin)

      return { data }
    }
  }

  const createUserInDatabase = async (newUser) => {
    const { data, error } = await supabase.from('users').insert(newUser).select()
    if (error) console.log(error.message)
    else console.log(data)
  }

  const searchUserInDatabaseById = async (localUser) => {
    user.value = []

    let { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', `${localUser.data.session.user.id}`) // поиск по ID

    if (error) console.log(error.message)

    if (data) {
      // записываем данные пользователя в стейт и далее с ним везде работаем
      user.value = data
      // Realtime function
      subscribeEntries()
    }
  }

  const loginUser = async (userData) => {
    existUserErrorMessage.value = null

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    })

    if (error) {
      console.log(error)
      existUserErrorMessage.value = 'Почта или пароль не верные.'
    } else {
      return { data }
    }
  }

  const getUser = async () => {
    user.value = await supabase.auth.getSession()
  }

  const loadCurrentUserFromDatabase = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase.from('users').select().eq('id', localUser.session.user.id)
    if (error) console.log(error.message)
    if (data) {
      subscribeEntries()
      return { data }
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) console.log(error)
    else user.value = []
  }

  const updateBooksForYearInDatabase = async (setBooksForYearInDatabase) => {
    const { data, error } = await supabase
      .from('users')
      .upsert({ id: `${user.value[0].id}`, books_for_year: setBooksForYearInDatabase })
      .select()

    if (error) {
      console.log(error.message)
    } else {
      console.log('data = ', data)
      // Realtime function
      subscribeEntries()
    }
  }

  const subscribeEntries = async () => {
    supabase
      .channel('users-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, (payload) => {
        console.log('Change received!', payload)

        if (payload.eventType === 'INSERT') user.value.push(payload.new)

        if (payload.eventType === 'UPDATE') {
          const index = getUserIndexById(payload.new.id)

          Object.assign(user.value[index], payload.new)
        }
      })
      .subscribe()
  }

  /* helpers */

  const getUserIndexById = (entryId) => {
    return user.value.findIndex((entry) => entry.id === entryId)
  }

  const clearExistUserErrorMessage = () => (existUserErrorMessage.value = null)

  return {
    user,
    existUserErrorMessage,
    registerUser,
    loginUser,
    getUser,
    logout,
    clearExistUserErrorMessage,
    searchUserInDatabaseById,
    updateBooksForYearInDatabase,
    loadCurrentUserFromDatabase,
  }
})
