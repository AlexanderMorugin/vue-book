<template>
  <AuthContainer>
    <LoginPromo />
    <AuthFormContainer
      place="login"
      title="Добро пожаловать!"
      subtitle="Войдите в свой аккаунт, чтобы продолжить чтение"
    />
  </AuthContainer>
</template>

<script setup>
import AuthContainer from '@/components/auth/AuthContainer.vue'
import AuthFormContainer from '@/components/auth/AuthFormContainer.vue'
import LoginPromo from '@/components/auth/LoginPromo.vue'
</script>
