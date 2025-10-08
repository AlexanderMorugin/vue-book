<template>
  <BookEditContainer>
    <!-- {{ bookStore.currentBook }} -->
    <!-- {{ bookStore.currentBook?.rating }} -->
    {{ userRating }}
    <BookEditTitle title="Рейтинг" />
    <AppLoader v-if="bookStore.isCurrentBookLoading" />
    <BookStarRating v-else v-model:value="userRating" :max-stars="5" @ratingData="updateRating" />

    <p class="ratingText">Вы оценили книгу на {{ userRating }} из 5</p>
  </BookEditContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookStarRating from './BookStarRating.vue'
import { useBookStore } from '@/stores/book-store'
import AppLoader from '../loader/AppLoader.vue'

const bookStore = useBookStore()

const { bookId } = defineProps(['bookId'])

// const userRating = ref(bookStore.currentBook?.rating)
const userRating = ref(0)

const updateRating = async (newRating) => {
  userRating.value = newRating
  await bookStore.updateCurrentBookRating(newRating, bookId)
}
onMounted(() => {
  bookStore.loadCurrentBook(bookId)
  //  userRating.value = bookStore.currentBookRating
})
</script>

<style scoped>
.ratingText {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
</style>
