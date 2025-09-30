<template>
  <div
    :class="[
      'progressBar',
      { progressBar_green: color === 'green' },
      { progressBar_blue: color === 'blue' },
    ]"
  >
    <span
      :class="[
        'progressBar__indicator',
        { progressBar__indicator_green: color === 'green' },
        { progressBar__indicator_blue: color === 'blue' },
      ]"
      :style="{ width: `${progress}%` }"
    ></span>
  </div>
</template>

<script setup>
const { progress, color } = defineProps(['progress', 'color'])
</script>

<style scoped>
.progressBar {
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: var(--border-radius-s);
}
.progressBar_green {
  background: var(--green-primary);
}
.progressBar_blue {
  background: var(--border-color-primary);
}
.progressBar__indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-radius: var(--border-radius-s);
  transition: all 0.3s;
}
.progressBar__indicator_green {
  background: var(--gradient-progress-green);
}
.progressBar__indicator_blue {
  background: var(--gradient-progress-blue);
}
</style>
