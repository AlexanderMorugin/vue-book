<template>
  <AuthContainer>
    <LoginPromo place="login" />
    <AuthFormContainer
      place="login"
      title="Добро пожаловать!"
      subtitle="Войдите в свой аккаунт, чтобы продолжить чтение"
    />
  </AuthContainer>
</template>

<script setup>
import { onMounted } from 'vue'
import AuthContainer from '@/components/auth/AuthContainer.vue'
import AuthFormContainer from '@/components/auth/AuthFormContainer.vue'
import LoginPromo from '@/components/auth/LoginPromo.vue'
import { useUserStore } from '@/stores/user-store'

const userStore = useUserStore()

onMounted(() => userStore.clearExistUserErrorMessage())
</script>
