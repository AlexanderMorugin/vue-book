<script setup>
import AuthContainer from '@/components/auth/AuthContainer.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import RegisterPromo from '@/components/auth/RegisterPromo.vue'
</script>

<template>
  <AuthContainer>
    <RegisterPromo />
    <RegisterForm />
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
