<template>
  <div :class="['bookImage', { bookImage_home: place === 'home' }]">
    <img :src="image" :alt="title" class="bookImage__picture" />
  </div>
</template>

<script setup>
const { place, image, title } = defineProps(['place', 'image', 'title'])
</script>

<style scoped>
.bookImage {
  overflow: hidden;
}
.bookImage_home {
  width: 96px;
  height: 144px;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-thirdly);
}
.bookImage__picture {
  height: 100%;
  object-fit: cover;
}
</style>
