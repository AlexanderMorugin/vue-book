<template>
  <button class="formClearButton">
    <ClearIcon class="clearIcon" />
  </button>
</template>

<script setup>
import ClearIcon from '../icon/ClearIcon.vue'

// const emit = defineEmits(["clearInput"]);
</script>

<style scoped>
.formClearButton {
  position: absolute;
  bottom: 0;
  right: 4px;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.clearIcon {
  width: 18px;
  height: 18px;
  color: var(--text-color-fifthly);
  transition: 0.25s ease;
}
.formClearButton:hover .clearIcon {
  color: var(--text-color-primary);
}
</style>
