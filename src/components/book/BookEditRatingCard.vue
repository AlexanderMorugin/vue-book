<template>
  <BookEditContainer>
    <BookEditTitle title="Рейтинг" />
    <LoaderForComponent v-if="isLoading" />
    <BookStarRating
      v-else
      v-model:value="userRating"
      :bookId="bookId"
      :maxStars="5"
      @ratingData="updateRating"
    />

    <p class="ratingText">Вы оценили книгу на {{ userRating }} из 5</p>
  </BookEditContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookStarRating from './BookStarRating.vue'
import { useBookStore } from '@/stores/book-store'
import LoaderForComponent from '../loader/LoaderForComponent.vue'

const bookStore = useBookStore()

const { bookId } = defineProps(['bookId'])

const userRating = ref(0)
const isLoading = ref(false)

const updateRating = (newRating) => {
  userRating.value = newRating
  bookStore.updateCurrentBookRating(newRating, bookId)
}

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    const { data } = await bookStore.loadCurrentBook(bookId)

    userRating.value = data[0].rating
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
.ratingText {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
</style>
