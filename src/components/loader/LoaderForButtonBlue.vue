<template>
  <div class="loader" />
</template>

<script setup>
const { theme } = defineProps('theme')

console.log(theme)
</script>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 2px dotted var(--blue-primary);
  border-radius: var(--border-radius-full);
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
</style>
