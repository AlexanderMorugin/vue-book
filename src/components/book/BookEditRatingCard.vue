<template>
  <BookEditContainer>
    <BookEditTitle title="Рейтинг" />
    <BookStarRating v-model:value="userRating" :max-stars="5" @ratingData="updateRating" />
    <p class="ratingText">Вы оценили книгу на {{ userRating }} из 5</p>
  </BookEditContainer>
</template>

<script setup>
import { ref } from 'vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookStarRating from './BookStarRating.vue'

const userRating = ref(0)

const updateRating = (newRating) => {
  userRating.value = newRating
  console.log(userRating.value)
}
</script>

<style scoped>
.ratingText {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
</style>
