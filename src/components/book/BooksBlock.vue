<template>
  <section>
    <ul class="booksBlock">
      <li v-for="book in bookArray" :key="book.id">
        <BookButtonCard :book="book" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookButtonCard from './BookButtonCard.vue'
import BookMidnightLibraryImage from '/images/img-midnight-library.webp'
import BookPridePrejudiceImage from '/images/img-pride-prejudice.webp'
import BookDigitalMinimalismImage from '/images/img-digital-minimalism.webp'
import BookGreatGatsbyImage from '/images/img-great-gatsby.webp'

const bookArray = ref([
  {
    id: 1,
    image: BookMidnightLibraryImage,
    title: 'Полуночная библиотека',
    author: 'Мэтт Хейг',
    genre: 'Художественная литература',
    status: 'Читаю',
    rating: 4,
    progress: 65,
  },
  {
    id: 2,
    image: BookPridePrejudiceImage,
    title: 'Гордость и предубеждение',
    author: 'Джейн Остин',
    genre: 'Классика',
    status: 'Прочитано',
    rating: 5,
    progress: null,
  },
  {
    id: 3,
    image: BookDigitalMinimalismImage,
    title: 'Цифровой минимализм',
    author: 'Кэл Ньюпорт',
    genre: 'Саморазвитие',
    status: 'Запланировано',
    rating: null,
    progress: null,
  },
  {
    id: 4,
    image: BookGreatGatsbyImage,
    title: 'Великий Гэтсби',
    author: 'Ф. Скотт Фицджеральд',
    genre: 'Классика',
    status: 'Прочитано',
    rating: 4,
    progress: null,
  },
])
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
    grid-template-columns: 1fr;
  }
}
</style>
