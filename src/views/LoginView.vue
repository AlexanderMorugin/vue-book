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

<style scoped>
.title {
  font-size: 62px;
  font-weight: 600;
  color: var(--text-color-primary);
  border: 1px solid red;
}
.subtitle {
  font-size: 32px;

  color: var(--text-color-secondary);
}
</style>
