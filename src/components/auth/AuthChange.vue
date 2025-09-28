<template>
  <div class="authChange">
    <div class="authChange__top">
      <div class="authChange__line" />
      <span class="authChange__textTop">или</span>
      <div class="authChange__line" />
    </div>

    <span class="authChange__textMiddle">
      {{ place === 'register' ? 'Уже есть аккаунт?' : 'Нет аккаунта?' }}
    </span>

    <AuthAccountButton :place="place" @goToAuthPage="goToAuthPage" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AuthAccountButton from './AuthAccountButton.vue'
import { LOGIN_PATH, REGISTER_PATH } from '@/mock/routes'

const router = useRouter()

const { place } = defineProps(['place'])

const goToAuthPage = () => {
  if (place === 'register') router.push(LOGIN_PATH)
  else router.push(REGISTER_PATH)
}
</script>

<style scoped>
.authChange {
  display: flex;
  flex-direction: column;
}
.authChange__top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.authChange__line {
  width: 100%;
  height: 1px;
  background: var(--border-color-primary);
}
.authChange__textTop {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-sixthly);
}
.authChange__textMiddle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
  text-align: center;
  margin-top: 16px;
}
</style>
