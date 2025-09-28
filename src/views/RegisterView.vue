<template>
  <AuthContainer>
    <RegisterPromo />
    <AuthFormContainer
      place="register"
      title="Создать аккаунт"
      subtitle="Заполните данные для создания вашего аккаунта"
    />
  </AuthContainer>
</template>

<script setup>
import AuthContainer from '@/components/auth/AuthContainer.vue'
import AuthFormContainer from '@/components/auth/AuthFormContainer.vue'
import RegisterPromo from '@/components/auth/RegisterPromo.vue'
</script>
