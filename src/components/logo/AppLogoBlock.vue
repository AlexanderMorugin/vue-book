<script setup>
import { onMounted, ref } from 'vue'
import AppLogo from './AppLogo.vue'

const { place } = defineProps(['place'])

const subtitle = ref('Ваш читательский журнал')

const setSubtitle = () => {
  if (place === 'sidebar') subtitle.value = 'Ваш читательский журнал'
  if (place === 'register') subtitle.value = 'Начните свой читательский путь'
  if (place === 'login') subtitle.value = 'Ваш персональный трекер чтения'
}

onMounted(() => setSubtitle())
</script>

<template>
  <div class="logoBlock">
    <AppLogo :place="place" />
    <div>
      <div
        :class="[
          'logoBlock__title',
          { logoBlock__title_login: place === 'register' || place === 'login' },
        ]"
      >
        Book Tracker
      </div>
      <div
        :class="[
          'logoBlock__subtitle',
          { logoBlock__subtitle_login: place === 'register' || place === 'login' },
        ]"
      >
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.logoBlock {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 97px;
  border-bottom: 1px solid var(--border-color-primary);
  padding-left: 24px;
  padding-right: 24px;
}
.logoBlock__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  vertical-align: middle;
}
.logoBlock__title_login {
  font-size: 28px;
  line-height: 36px;
}
.logoBlock__subtitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  color: var(--text-color-secondary);
}
.logoBlock__subtitle_login {
  font-size: 17px;
  line-height: 28px;
}
</style>
