<template>
  <section>
    <AppLoader v-if="isLoading" />
    <div v-else>
      <BookEmpty v-if="!bookStore.books.length" title="В вашей библиотеке книг пока нет." />
      <ul v-else class="booksBlock">
        <li v-for="book in bookStore.books" :key="book.id">
          <BookCard :book="book" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookCard from './BookCard.vue'
import { useBookStore } from '@/stores/book-store'
import BookEmpty from './BookEmpty.vue'
import AppLoader from '../loader/AppLoader.vue'

const bookStore = useBookStore()

const isLoading = ref(false)

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadBooks()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getStoreData()
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
