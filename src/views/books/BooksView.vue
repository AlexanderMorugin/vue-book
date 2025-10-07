<template>
  <PageContainer width="wide">
    <SearchInput
      type="text"
      name="bookField"
      placeholder="Поиск книги или автора"
      v-model:value="bookField"
      @clearInput="bookField = null"
    />
    <BooksStatusBlock />
    <BooksBlock />
    <SideBarCounter place="books" />
  </PageContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PageContainer from '@/components/page/PageContainer.vue'
import SearchInput from '@/components/form/SearchInput.vue'
import BooksStatusBlock from '@/components/book/BooksStatusBlock.vue'
import BooksBlock from '@/components/book/BooksBlock.vue'
import SideBarCounter from '@/components/sidebar/SideBarCounter.vue'
import { useHeaderStore } from '@/stores/header-store'

const headerStore = useHeaderStore()

const bookField = ref(null)

onMounted(() => {
  headerStore.setHeaderTitle('Моя библиотека')
})
</script>
