<template>
  <div class="bookEmpty">{{ title }}</div>
</template>

<script setup>
const { title } = defineProps(['title'])
</script>

<style scoped>
.bookEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: 'Inter-Medium', sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: var(--text-color-primary);
  padding: 64px 32px;
}
</style>
