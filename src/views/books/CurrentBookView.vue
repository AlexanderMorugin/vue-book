<template>
  <PageContainer width="normal">
    <BookTitleBlock
      :currentBook="bookStore.currentBook"
      :isLoading="bookStore.isCurrentBookLoading"
    />
    <BookEditBlock :currentBook="bookStore.currentBook" :bookId="route.params.id" />
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

onMounted(() => {
  headerStore.setHeaderTitle('Детали книги')
  bookStore.loadCurrentBook(route.params.id)
})
</script>
