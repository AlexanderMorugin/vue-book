<template>
  <div class="progressBar">
    <span class="progressBar__indicator" :style="{ width: `${progress}%` }"></span>
  </div>
</template>

<script setup>
const { progress } = defineProps(['progress'])
</script>

<style scoped>
.progressBar {
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background: var(--green-primary);
}
.progressBar__indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-radius: 8px;
  background: var(--gradient-progress-primary);
  transition: all 0.3s;
}
</style>
