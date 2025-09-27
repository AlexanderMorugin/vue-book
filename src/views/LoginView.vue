<script setup>
import AuthContainer from '@/components/auth/AuthContainer.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import LoginPromo from '@/components/auth/LoginPromo.vue'
</script>

<template>
  <AuthContainer>
    <LoginPromo />
    <LoginForm />
  </AuthContainer>
</template>
