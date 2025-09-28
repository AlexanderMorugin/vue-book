<template>
  <button
    :class="[
      'authAccountButton',
      { authAccountButton_register: place === 'register' },
      { authAccountButton_login: place === 'login' },
    ]"
  >
    <ArrowIcon v-if="place === 'register'" class="arrowIcon" />
    <span class="authAccountButton__text">
      {{ place === 'register' ? 'Войти в аккаунт' : 'Создать аккаунт' }}
    </span>
    <ArrowIcon v-if="place === 'login'" class="arrowIcon arrowIcon_reverse" />
  </button>
</template>

<script setup>
import ArrowIcon from '../icon/ArrowIcon.vue'

const { place } = defineProps(['place'])
</script>

<style scoped>
.authAccountButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.25s ease;
}
.authAccountButton_register {
  border: 1px solid var(--border-color-primary);
  transition: 0.25s ease;
}
.authAccountButton_register:hover {
  border: 1px solid var(--violet-thirdly);
}
.authAccountButton_login {
  border: 1px solid var(--border-color-primary);
  transition: 0.25s ease;
}
.authAccountButton_login:hover {
  border: 1px solid var(--green-secondary);
}
.arrowIcon {
  width: 17px;
  height: 17px;
  color: var(--text-color-thirdly);
  stroke-width: 1.5;
  transition: 0.25s ease;
}
.arrowIcon_reverse {
  transform: rotate(180deg);
}
.authAccountButton__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: var(--text-color-thirdly);
  transition: 0.25s ease;
}
.authAccountButton_register:hover .arrowIcon {
  color: var(--violet-secondary);
}
.authAccountButton_register:hover .authAccountButton__text {
  color: var(--violet-secondary);
}
.authAccountButton_login:hover .arrowIcon {
  color: var(--green-secondary);
}
.authAccountButton_login:hover .authAccountButton__text {
  color: var(--green-secondary);
}
</style>
