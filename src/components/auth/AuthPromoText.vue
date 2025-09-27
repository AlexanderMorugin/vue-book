<template>
  <div class="authPromoText">
    <h2 class="authPromoText__title">{{ title }}</h2>
    <p class="authPromoText__text">{{ text }}</p>
  </div>
</template>

<script setup>
const { title, text } = defineProps(['title', 'text'])
</script>

<style scoped>
.authPromoText {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.authPromoText__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 22px;
  line-height: 32px;
  vertical-align: middle;
  color: var(--text-color-primary);
}
.authPromoText__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 17px;
  line-height: 29px;
  vertical-align: middle;
  color: var(--text-color-secondary);
}
</style>
