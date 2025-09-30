<template>
  <div class="authFormContainer">
    <AppLogoBlock :place="place" v-if="isScreenLarge" />
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
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import AuthChange from './AuthChange.vue'
import AuthConditions from './AuthConditions.vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useResizeLarge } from '@/composables/useResizeLarge'

const { isScreenLarge } = useResizeLarge()

const { place, title, subtitle } = defineProps(['place', 'title', 'subtitle'])
</script>

<style scoped>
.authFormContainer {
  grid-area: form;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 560px;
  height: fit-content;
  background: var(--white-secondary);
  box-shadow: var(--shadow-primary);
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius-l);
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

@media (max-width: 1023px) {
  .authFormContainer {
    max-width: 100%;
  }
}

@media (max-width: 379px) {
  .authFormContainer {
    box-shadow: none;
    border-radius: 0;
    padding: 40px 10px 20px 10px;
  }
}
</style>
