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

    <AuthAccountButton :place="place" />
  </div>
</template>

<script setup>
import AuthAccountButton from './AuthAccountButton.vue'

const { place } = defineProps(['place'])
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
