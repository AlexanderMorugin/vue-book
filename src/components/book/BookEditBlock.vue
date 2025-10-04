<template>
  <section class="bookEditBlock">
    <BookEditRatingCard />
    <BookEditCommentCard />
    <BookEditProgressCard />
  </section>
</template>

<script setup>
import BookEditCommentCard from './BookEditCommentCard.vue'
import BookEditProgressCard from './BookEditProgressCard.vue'
import BookEditRatingCard from './BookEditRatingCard.vue'
</script>

<style scoped>
.bookEditBlock {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (max-width: 767px) {
  .bookEditBlock {
    grid-template-columns: 1fr;
  }
}
</style>
