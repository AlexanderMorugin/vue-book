<template>
  <router-link :to="BOOKS_PATH + `/${route}`" class="lastRatingPlate">
    <div class="lastRatingPlate__nameBlock">
      <div class="lastRatingPlate__circle" />
      <div>
        <div class="lastRatingPlate__name">{{ bookName }}</div>
        <div class="lastRatingPlate__text">{{ author }}</div>
      </div>
    </div>

    <BookRating :rating="rating" />
  </router-link>
</template>

<script setup>
import { BOOKS_PATH } from '@/mock/routes'
import BookRating from '../book/BookRating.vue'

const { bookName, author, rating, route } = defineProps(['bookName', 'author', 'rating', 'route'])
</script>

<style scoped>
.lastRatingPlate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-l);
  background: var(--gray-fifthly);
  box-shadow: var(--shadow-thirdly);
  backdrop-filter: blur(8px);
  padding: 16px;
}
.lastRatingPlate__nameBlock {
  display: flex;
  align-items: center;
  gap: 12px;
}
.lastRatingPlate__circle {
  min-width: 8px;
  height: 8px;
  border-radius: var(--border-radius-full);
  background: var(--green-sixthly);
}
.lastRatingPlate__name {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.lastRatingPlate__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color-secondary);
}

@media (max-width: 767px) {
  .lastRatingPlate {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
