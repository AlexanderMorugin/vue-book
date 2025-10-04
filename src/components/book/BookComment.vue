<template>
  <p class="bookComment">
    {{ comment }}
  </p>
</template>

<script setup>
const { comment } = defineProps(['comment'])
</script>

<style scoped>
.bookComment {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: var(--text-color-thirdly);
}
</style>
