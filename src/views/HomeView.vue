<template>
  <PageContainer width="home">
    <section class="home__titleBlock">
      <h1 class="home__title">Привет! 📚</h1>
      <p class="home__subtitle">Сохрани свои любимые книги</p>
    </section>

    <section class="home__content">
      <div class="home__contentBlock">
        <ProgressYearBlock
          :progress="yearProgress"
          place="home"
          title="Цель на 2024 год"
          :progressBookData="progressBookData"
        />
        <ProgressReadingBlock
          place="home"
          title="Текущие книги"
          :progress="readingProgress"
          :readingBook="readingBook"
        />
      </div>
      <div class="home__contentBlock">
        <div class="home__contentItems">
          <ButtonWithIcon name="addBook" text="Добавить книгу" :route="ADD_BOOK_PATH" />
          <ButtonWithIcon name="library" text="Библиотека" number="4" :route="BOOKS_PATH" />
        </div>

        <div class="home__contentItems">
          <h2 class="home__contentTitle">Последние активности</h2>
          <div class="home__contentSubItems">
            <LastRatingPlate
              bookName='Закончена "Гордость и предубеждение"'
              author="Джейн Остин"
              rating="5"
            />
            <LastRatingPlate
              bookName='Закончена "Великий Гэтсби"'
              author="Ф. Скотт Фицджеральд"
              rating="4"
            />
          </div>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<script setup>
import { ref } from 'vue'
import ProgressYearBlock from '@/components/progress/ProgressYearBlock.vue'
import ProgressReadingBlock from '@/components/progress/ProgressReadingBlock.vue'
import BookMidnightLibraryImage from '/images/img-midnight-library.webp'
import ButtonWithIcon from '@/components/page/ButtonWithIcon.vue'
import LastRatingPlate from '@/components/page/LastRatingPlate.vue'
import PageContainer from '@/components/page/PageContainer.vue'
import { ADD_BOOK_PATH, BOOKS_PATH } from '@/mock/routes'

const yearProgress = ref(10)
const progressBookData = ref({
  all: 20,
  done: 2,
  mustDo: 18,
})

const readingBook = ref({
  id: 1,
  title: 'Полуночная библиотека',
  author: 'Мэтт Хейг',
  image: BookMidnightLibraryImage,
  readingProgress: 65,
})
</script>

<style scoped>
/* .home {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1216px;
} */
.home__titleBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
}
.home__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 34px;
  line-height: 40px;
  color: var(--text-color-primary);
}
.home__subtitle {
  font-family: 'Inter_Regular', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-secondary);
}
.home__content {
  display: grid;
  grid-template-columns: 1fr 384px;
  gap: 32px;
}
.home__contentBlock {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.home__contentItems {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.home__contentTitle {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 19px;
  line-height: 28px;
  color: var(--text-color-primary);
}
.home__contentSubItems {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 1279px) {
  .home__content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  /* .home {
    gap: 0;
  } */
  .home__content {
    gap: 64px;
  }
  .home__contentBlock {
    gap: 64px;
  }
}
</style>
