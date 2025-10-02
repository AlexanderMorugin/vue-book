<template>
  <div class="logoMobile">
    <AppLogo />
    <span v-if="!isScreenMedium" class="logoMobile__title">Book Tracker</span>
  </div>
</template>

<script setup>
import AppLogo from './AppLogo.vue'
import { useResizeMedium } from '@/composables/useResizeMedium'

const { isScreenMedium } = useResizeMedium()
</script>

<style scoped>
.logoMobile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logoMobile__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 14px;
  line-height: 20px;
}
</style>
