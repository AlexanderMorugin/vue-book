<template>
  <section class="bookTitleBlock">
    <img
      :src="BookMidnightLibraryImage"
      alt="Полуночная библиотека"
      class="bookTitleBlock__image"
    />
    <div class="bookTitleBlock__details">
      <h1 class="bookTitleBlock__title">Полуночная библиотека</h1>
      <span class="bookTitleBlock__author">Мэтт Хейг</span>
      <span class="bookTitleBlock__genre">Художественная литература</span>
      <BookStatus status="Читаю" />
    </div>
  </section>
</template>

<script setup>
import BookStatus from './BookStatus.vue'
import BookMidnightLibraryImage from '/images/img-midnight-library.webp'
</script>

<style scoped>
.bookTitleBlock {
  display: flex;
  gap: 32px;
  background: var(--gradient-book-title);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  padding: 32px;
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
    flex-direction: column;
    gap: 20px;
    padding: 16px 10px;
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
