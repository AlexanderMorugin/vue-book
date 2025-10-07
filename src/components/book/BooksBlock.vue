<template>
  <section>
    <ul class="booksBlock">
      <li v-for="book in bookStore.books" :key="book.id">
        <BookButtonCard :book="book" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import BookButtonCard from './BookButtonCard.vue'
import { useBookStore } from '@/stores/book-store'

const bookStore = useBookStore()

onMounted(async () => {
  bookStore.loadBooks()
})
</script>

<style scoped>
.booksBlock {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1399px) {
  .booksBlock {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1279px) {
  .booksBlock {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .booksBlock {
    column-gap: 10px;
    row-gap: 20px;
  }
}
</style>
