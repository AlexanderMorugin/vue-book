<template>
  <PageContainer width="normal">
    <BookTitleBlock :currentBook="bookStore.currentBook" :isLoading="isLoading" />
    <BookEditBlock :currentBook="bookStore.currentBook" :bookId="route.params.id" />
  </PageContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageContainer from '@/components/page/PageContainer.vue'
import BookTitleBlock from '@/components/book/BookTitleBlock.vue'
import BookEditBlock from '@/components/book/BookEditBlock.vue'
import { useHeaderStore } from '@/stores/header-store'
import { useBookStore } from '@/stores/book-store'

const headerStore = useHeaderStore()
const bookStore = useBookStore()
const route = useRoute()

const isLoading = ref(false)

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadCurrentBook(route.params.id)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  headerStore.setHeaderTitle('Детали книги')
  getStoreData()
})
</script>
