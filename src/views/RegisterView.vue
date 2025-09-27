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
