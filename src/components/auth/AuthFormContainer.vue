<template>
  <div class="authFormContainer">
    <div class="authFormContainer__titleBox">
      <h2 class="authFormContainer__title">{{ title }}</h2>
      <p class="authFormContainer__subtitle">{{ subtitle }}</p>
    </div>

    <RegisterForm v-if="place === 'register'" :place="place" />
    <LoginForm v-if="place === 'login'" :place="place" />

    <AuthChange :place="place" />

    <AuthConditions v-if="place === 'register'" />
  </div>
</template>

<script setup>
import AuthChange from './AuthChange.vue'
import AuthConditions from './AuthConditions.vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

const { place, title, subtitle } = defineProps(['place', 'title', 'subtitle'])
</script>

<style scoped>
.authFormContainer {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 560px;
  height: fit-content;
  background: var(--white-secondary);
  box-shadow: var(--shadow-primary);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  padding: 32px;
}
.authFormContainer__titleBox {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.authFormContainer__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 22px;
  line-height: 32px;
  color: var(--text-color-primary);
}
.authFormContainer__subtitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: var(--text-color-secondary);
}
</style>
