<template>
  <AuthContainer>
    <RegisterPromo place="register" />
    <AuthFormContainer
      place="register"
      title="Создать аккаунт"
      subtitle="Заполните данные для создания вашего аккаунта"
    />
  </AuthContainer>
</template>

<script setup>
import { onMounted } from 'vue'
import AuthContainer from '@/components/auth/AuthContainer.vue'
import AuthFormContainer from '@/components/auth/AuthFormContainer.vue'
import RegisterPromo from '@/components/auth/RegisterPromo.vue'
import { useUserStore } from '@/stores/user-store'

const userStore = useUserStore()

onMounted(() => userStore.clearExistUserErrorMessage())
</script>
