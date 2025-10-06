<template>
  <section class="bookAddingBlock">
    <AppLogoBlock place="addBook" />
    <BookAddingForm place="addBook" />
  </section>
</template>

<script setup>
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import BookAddingForm from './BookAddingForm.vue'
</script>

<style scoped>
.bookAddingBlock {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--white-thirdly);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  backdrop-filter: blur(8px);
  padding: 32px;
}

@media (max-width: 1023px) {
  .bookAddingBlock {
    gap: 32px;
  }
}

@media (max-width: 474px) {
  .bookAddingBlock {
    padding: 40px 10px 20px 10px;
  }
}
</style>
