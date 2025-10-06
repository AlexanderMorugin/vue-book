<template>
  <button class="bookUploadImageButton">
    <LogoutIcon class="icon" />
  </button>
</template>

<script setup>
import LogoutIcon from '../icon/LogoutIcon.vue'
</script>

<style scoped>
.bookUploadImageButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-full);
  background: var(--green-primary);
  transition: 0.25s ease;
}
.bookUploadImageButton:hover {
  background: var(--green-thirdly);
  box-shadow: var(--shadow-secondary);
}
.icon {
  width: 24px;
  height: 24px;
  color: var(--green-eighthly);
  transform: rotate(270deg);
  transition: 0.25s ease;
}
.bookUploadImageButton:hover .icon {
  color: var(--white-primary);
}
</style>
