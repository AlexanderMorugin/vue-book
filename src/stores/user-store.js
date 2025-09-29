import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/config/supabase'

export const useUserStore = defineStore('user', () => {
  /* state */
  const user = ref(null)
  const existUserErrorMessage = ref(null)

  /* actions */
  const registerUser = async (userData) => {
    existUserErrorMessage.value = null

    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: { first_name: userData.name },
      },
    })

    if (error) {
      console.log(error)
      existUserErrorMessage.value = 'Пользователь с такой почтой уже существует.'
    } else {
      console.log(data)
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
      console.log(data)
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
  }
})
