import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/config/supabase'

export const useUserStore = defineStore('userStore', () => {
  /* state */
  // const user = ref(null)
  const user = ref({
    id: '',
    email: '',
    name: '',
  })
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
      // создаем пользователя в Database
      await addUserToDatabase(newUser)

      // собираем пользователя для логина
      const userForLogin = {
        email: userData.email,
        password: userData.password,
      }
      // делаем логин
      await loginUser(userForLogin)
    }
  }

  const addUserToDatabase = async (newUser) => {
    const { data, error } = await supabase.from('users').insert(newUser).select()
    if (error) console.log(error.message)
    else console.log(data)
  }

  const setUserInStore = (userData) => {
    // console.log(userData.data.session.user.user_metadata.first_name)
    // console.log(userData.data.session.user.id)

    user.value.id = userData.data.session.user.id
    user.value.name = userData.data.session.user.user_metadata.first_name
    user.value.email = userData.data.session.user.user_metadata.email
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
      console.log('loginUser - ', data)
    }
  }

  const getUser = async () => {
    user.value = await supabase.auth.getSession()
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) console.log(error)
    else console.log('Logout has been successfull')
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
    setUserInStore,
  }
})
