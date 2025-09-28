<template>
  <button class="formClearButton">
    <ClearIcon class="clearIcon" />
  </button>
</template>

<script setup>
import ClearIcon from '../icon/ClearIcon.vue'
</script>

<style scoped>
.formClearButton {
  position: absolute;
  bottom: 8px;
  right: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.clearIcon {
  width: 18px;
  height: 18px;
  color: var(--text-color-sixthly);
  transition: 0.25s ease;
}
.formClearButton:hover .clearIcon {
  color: var(--text-color-primary);
}
</style>
