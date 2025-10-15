<template>
  <router-link :to="`/books/${book.id}`" class="bookCard">
    <BookEmptyImage v-if="!book.image" title="Книга без обложки" />
    <img v-else :src="book.image" :alt="book.title" class="bookCard__image" />
    <span class="bookCard__title">{{ book.name }}</span>
    <span class="bookCard__author">{{ book.author }}</span>
    <span class="bookCard__genre">{{ book.genre }}</span>
    <BookStatus :progress="book.progress" />
    <BookRating v-if="book.rating" :rating="book.rating" />
    <ProgressBarDetails
      v-if="book.progress && book.progress < 100"
      :progress="book.progress"
      class="bookCard__progress"
    />
  </router-link>
</template>

<script setup>
import ProgressBarDetails from '../progress/ProgressBarDetails.vue'
import BookEmptyImage from './BookEmptyImage.vue'
import BookRating from './BookRating.vue'
import BookStatus from './BookStatus.vue'

const { book } = defineProps(['book'])
</script>

<style scoped>
.bookCard {
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
.bookCard:hover {
  box-shadow: var(--shadow-primary);
}
.bookCard__image {
  width: 100%;
  height: 224px;
  object-fit: cover;
  border-radius: var(--border-radius-m);
  box-shadow: var(--shadow-thirdly);
}
.bookCard__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-primary);
  text-align: left;
  padding-top: 16px;
}
.bookCard__author {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-secondary);
  text-align: left;
}
.bookCard__genre {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-sixthly);
  text-align: left;
  padding-top: 4px;
}
.bookCard__progress {
  padding-top: 12px;
}

@media (max-width: 767px) {
  .bookCard {
    padding: 16px 10px;
  }
}

@media (max-width: 379px) {
  .bookCard__image {
    height: 160px;
  }
}
</style>
