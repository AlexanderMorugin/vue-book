<template>
  <router-link :to="`/books/${book.id}`" class="bookButtonCard">
    <img :src="book.image" :alt="book.title" class="bookButtonCard__image" />
    <span class="bookButtonCard__title">{{ book.name }}</span>
    <span class="bookButtonCard__author">{{ book.author }}</span>
    <span class="bookButtonCard__genre">{{ book.genre }}</span>
    <BookStatus :progress="book.progress" />
    <BookRating v-if="book.rating" :rating="book.rating" />
    <ProgressBarDetails
      v-if="book.progress && book.progress < 100"
      :progress="book.progress"
      class="bookButtonCard__progress"
    />
  </router-link>
</template>

<script setup>
import ProgressBarDetails from '../progress/ProgressBarDetails.vue'
import BookRating from './BookRating.vue'
import BookStatus from './BookStatus.vue'

const { book } = defineProps(['book'])
</script>

<style scoped>
.bookButtonCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--white-thirdly);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-fourthly);
  backdrop-filter: blur(8px);
  padding: 24px;
  transition: 0.25s ease;
}
.bookButtonCard:hover {
  box-shadow: var(--shadow-primary);
}
.bookButtonCard__image {
  width: 100%;
  height: 224px;
  object-fit: cover;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-thirdly);
}
.bookButtonCard__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-primary);
  text-align: left;
  padding-top: 16px;
}
.bookButtonCard__author {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-secondary);
  text-align: left;
}
.bookButtonCard__genre {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-sixthly);
  text-align: left;
  padding-top: 4px;
}
.bookButtonCard__progress {
  padding-top: 12px;
}

@media (max-width: 767px) {
  .bookButtonCard {
    padding: 16px 10px;
  }
}

@media (max-width: 379px) {
  .bookButtonCard__image {
    height: 160px;
  }
}
</style>
