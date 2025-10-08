<template>
  <PageContainer width="normal">
    <BookTitleBlock
      :currentBook="bookStore.currentBook"
      :isLoading="bookStore.isCurrentBookLoading"
    />
    <BookEditBlock />
    <!-- <h1>Book #{{ currentId }}</h1> -->
    <!-- <h1>{{ bookStore.currentBook }}</h1> -->
  </PageContainer>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageContainer from '@/components/page/PageContainer.vue'
import BookTitleBlock from '@/components/book/BookTitleBlock.vue'
import BookEditBlock from '@/components/book/BookEditBlock.vue'
import { useHeaderStore } from '@/stores/header-store'
import { useBookStore } from '@/stores/book-store'

const headerStore = useHeaderStore()
const bookStore = useBookStore()
const route = useRoute()

// const currentId = route.params.id

onMounted(() => {
  headerStore.setHeaderTitle('Детали книги')
  bookStore.loadCurrentBook(route.params.id)
})
</script>
