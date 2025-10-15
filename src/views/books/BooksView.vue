<template>
  <PageContainer width="wide">
    <SearchInput
      type="text"
      name="bookField"
      placeholder="Поиск книги или автора"
      v-model:value="bookField"
      @clearInput="clearInput"
    />

    <!-- Блок с кнопками -->
    <section class="booksStatusBlock">
      <div v-for="button in statusButtons" :key="button.id">
        <StatusButton
          :title="button.title"
          :quantity="button.quantity"
          :isActive="button.status"
          @click="setActive(button.id, button.progressGreat, button.progressLess)"
        />
      </div>
    </section>

    <BooksBlock v-if="bookStore.books.length" :books="bookStore.books" :isLoading="isLoading" />
    <SideBarCounter place="books" />
  </PageContainer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import PageContainer from '@/components/page/PageContainer.vue'
import SearchInput from '@/components/form/SearchInput.vue'
import BooksBlock from '@/components/book/BooksBlock.vue'
import SideBarCounter from '@/components/sidebar/SideBarCounter.vue'
import { useHeaderStore } from '@/stores/header-store'
import { useBookStore } from '@/stores/book-store'
import StatusButton from '@/components/book/StatusButton.vue'

const headerStore = useHeaderStore()
const bookStore = useBookStore()

const bookField = ref(null)
const isLoading = ref(false)
const booksForButtons = ref([])

const statusButtons = ref([
  {
    id: 1,
    title: 'Все',
    progressGreat: null,
    progressLess: null,
    quantity: computed(() => booksForButtons.value.length),
    status: true,
  },
  {
    id: 2,
    title: 'Читаю',
    progressGreat: 1,
    progressLess: 99,
    quantity: computed(
      () => booksForButtons.value.filter((item) => item.progress > 0 && item.progress < 100).length,
    ),
    status: false,
  },
  {
    id: 3,
    title: 'Прочитано',
    progressGreat: 100,
    progressLess: 100,
    quantity: computed(() => booksForButtons.value.filter((item) => item.progress === 100).length),
    status: false,
  },
  {
    id: 4,
    title: 'Запланировано',
    progressGreat: 0,
    progressLess: 0,
    quantity: computed(() => booksForButtons.value.filter((item) => item.progress === 0).length),
    status: false,
  },
])

const clearInput = () => {
  bookField.value = null

  getStoreData()
}

const setActive = (id, progressGreat, progressLess) => {
  const currentButton = statusButtons.value.find((item) => item.id === id)
  const activeButton = statusButtons.value.find((item) => item.status === true)

  if (currentButton.status !== true) {
    currentButton.status = true
    activeButton.status = false
  }

  if (progressGreat === null) {
    bookStore.loadBooks()
  } else {
    bookStore.loadStatusBooks(progressGreat, progressLess)
  }
}

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    const { data } = await bookStore.loadBooks()
    booksForButtons.value = data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  headerStore.setHeaderTitle('Моя библиотека')
  getStoreData()
})
</script>

<style scoped>
.booksStatusBlock {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
