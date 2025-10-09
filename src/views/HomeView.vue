<template>
  <PageContainer width="home">
    <section class="home__titleBlock">
      <h1 class="home__title">Привет! 📚</h1>
      <p class="home__subtitle">Сохрани свои любимые книги</p>
    </section>

    <section class="home__content">
      <AppLoader v-if="isLoading" />
      <div v-else>
        <BookEmpty v-if="!bookStore.books.length" title="Добавьте книги в свою библиотеку." />
        <div v-else class="home__contentBlock">
          <ProgressYearBlock v-if="isYearProgress" place="home" title="Цель на 2024 год" />
          <ProgressReadingBlock v-if="isReadingBooks" place="home" title="Текущие книги" />
        </div>
      </div>
      <div class="home__contentBlock">
        <div class="home__contentItems">
          <ButtonWithIcon name="addBook" text="Добавить книгу" :route="ADD_BOOK_PATH" />
          <ButtonWithIcon
            name="library"
            text="Библиотека"
            :number="bookStore.books.length"
            :route="BOOKS_PATH"
          />
        </div>

        <div class="home__contentItems">
          <h2 class="home__contentTitle">Последние активности</h2>
          <div v-if="estimateBooks.length" class="home__contentSubItems">
            <LastRatingPlate
              v-for="item in estimateBooks"
              :key="item.id"
              :bookName="`Закончена ${item.name}`"
              :author="item.name"
              :rating="item.rating"
              :route="item.id"
            />
          </div>
          <div v-else class="home__contentSubItemsText">
            Вы не оценили ни одной прочтённой книги.
          </div>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import ProgressYearBlock from '@/components/progress/ProgressYearBlock.vue'
import ProgressReadingBlock from '@/components/progress/ProgressReadingBlock.vue'
import ButtonWithIcon from '@/components/page/ButtonWithIcon.vue'
import LastRatingPlate from '@/components/page/LastRatingPlate.vue'
import PageContainer from '@/components/page/PageContainer.vue'
import { ADD_BOOK_PATH, BOOKS_PATH } from '@/mock/routes'
import { useHeaderStore } from '@/stores/header-store'
import { useBookStore } from '@/stores/book-store'
import AppLoader from '@/components/loader/AppLoader.vue'
import BookEmpty from '@/components/book/BookEmpty.vue'
import { useUserStore } from '@/stores/user-store'

const headerStore = useHeaderStore()
const bookStore = useBookStore()
const userStore = useUserStore()

const isLoading = ref(false)

const isReadingBooks = computed(() =>
  bookStore.books.find((item) => item.progress > 0 && item.progress < 100),
)

const isYearProgress = computed(() => userStore.user[0]?.books_for_year > 0)
const doneBooks = computed(() => bookStore.books.filter((item) => item.progress === 100))
const estimateBooks = computed(() => doneBooks.value.filter((item) => item.rating > 0).slice(0, 2))

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadBooks()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getStoreData()
  headerStore.setHeaderTitle('Главная')
})
</script>

<style scoped>
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

.home__contentSubItemsText {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-color-secondary);
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
