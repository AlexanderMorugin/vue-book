<template>
  <header class="header">
    <div class="header__titleBox">
      <ButtonIconNavigate
        v-if="isScreenLarge"
        name="menu"
        @handleClick="emit('openMobileSideBar')"
      />
      <span class="header__title">Главная</span>
    </div>

    <ButtonIconNavigate name="back" />
  </header>
</template>

<script setup>
import ButtonIconNavigate from './page/ButtonIconNavigate.vue'
import { useResizeLarge } from '@/composables/useResizeLarge'

const { isScreenLarge } = useResizeLarge()

const emit = defineEmits(['openMobileSideBar'])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: var(--white-secondary);
  border-bottom: 1px solid var(--border-color-primary);
  backdrop-filter: blur(8px);
  padding-left: 24px;
  padding-right: 24px;
}
.header__titleBox {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 22px;
  line-height: 28px;
  color: var(--text-color-primary);
}

@media (max-width: 1023px) {
  .header__title {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (max-width: 767px) {
  .header {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
