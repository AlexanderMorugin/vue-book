<template>
  <section class="bookTitleBlock">
    <AppLoader v-if="isLoading" />
    <div v-else class="bookTitleBlock__container">
      <div v-if="!currentBook?.image" class="bookTitleBlock__noImage">Книга без обложки</div>
      <img
        v-else
        :src="currentBook?.image"
        :alt="currentBook?.name"
        class="bookTitleBlock__image"
      />
      <div class="bookTitleBlock__details">
        <h1 class="bookTitleBlock__title">{{ currentBook?.name }}</h1>
        <span class="bookTitleBlock__author">{{ currentBook?.author }}</span>
        <span class="bookTitleBlock__genre">{{ currentBook?.genre }}</span>
        <BookStatus :progress="currentBook?.progress" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppLoader from '../loader/AppLoader.vue'
import BookStatus from './BookStatus.vue'

const { currentBook, isLoading } = defineProps(['currentBook', 'isLoading'])
</script>

<style scoped>
.bookTitleBlock {
  width: 100%;
  min-height: 384px;
  background: var(--gradient-book-title);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  padding: 32px;
}
.bookTitleBlock__container {
  display: flex;
  gap: 32px;
}
.bookTitleBlock__noImage {
  display: flex;
  justify-content: center;
  align-items: center;
  background: gainsboro;
  border-radius: var(--border-radius-m);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-secondary);
  text-align: center;
  width: 224px;
  height: 320px;
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  padding: 20px;
}
.bookTitleBlock__image {
  width: 224px;
  height: 320px;
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  object-fit: cover;
}
.bookTitleBlock__details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bookTitleBlock__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 34px;
  line-height: 40px;
  color: var(--text-color-primary);
}
.bookTitleBlock__author {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 19px;
  line-height: 28px;
  color: var(--text-color-secondary);
}
.bookTitleBlock__genre {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background: var(--gray-sixthly);
  border-radius: var(--border-radius-s);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-seventhly);
  padding: 3px 9px;
  margin-bottom: 12px;
}

@media (max-width: 767px) {
  .bookTitleBlock {
    padding: 16px 10px;
  }
  .bookTitleBlock__container {
    flex-direction: column;
    gap: 20px;
  }
  .bookTitleBlock__noImage {
    width: 100%;
    height: 260px;
  }
  .bookTitleBlock__image {
    width: 100%;
    height: 260px;
  }
  .bookTitleBlock__title {
    font-size: 28px;
    line-height: 36px;
  }
  .bookTitleBlock__author {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
