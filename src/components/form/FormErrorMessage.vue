<template>
  <div class="errorMessage">{{ text }}</div>
</template>

<script setup>
  const { text } = defineProps(['text'])
</script>

<style scoped lang="scss">
  .errorMessage {
    font-family: 'Inter-Regular', sans-serif;
    font-size: 16px;
    color: var(--red-primary);
    text-align: center;
  }
</style>
