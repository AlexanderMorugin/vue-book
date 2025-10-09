<template>
  <section class="bookEditBlock">
    <BookEditRatingCard :currentBook="currentBook" :bookId="bookId" />
    <BookEditCommentCard :bookId="bookId" />
    <BookEditProgressCard :bookId="bookId" />
  </section>
</template>

<script setup>
import BookEditCommentCard from './BookEditCommentCard.vue'
import BookEditProgressCard from './BookEditProgressCard.vue'
import BookEditRatingCard from './BookEditRatingCard.vue'

const { currentBook, bookId } = defineProps(['currentBook', 'bookId'])
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
