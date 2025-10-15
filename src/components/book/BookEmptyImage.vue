<template>
  <div :class="['bookEmptyImage', { bookEmptyImage_home: place === 'home' }]">{{ title }}</div>
</template>

<script setup>
const { title, place } = defineProps(['title', 'place'])
</script>

<style scoped>
.bookEmptyImage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 224px;
  background: gainsboro;
  border-radius: var(--border-radius-m);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-secondary);
  text-align: center;
  box-shadow: var(--shadow-thirdly);
  padding: 20px;
}
.bookEmptyImage_home {
  height: 100%;
  font-size: 14px;
  line-height: 20px;
}

@media (max-width: 379px) {
  .bookEmptyImage {
    height: 160px;
  }
}
</style>
