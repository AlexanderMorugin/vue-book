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
import { ref } from 'vue'
import PageContainer from '@/components/page/PageContainer.vue'
import SearchInput from '@/components/form/SearchInput.vue'
import BooksStatusBlock from '@/components/book/BooksStatusBlock.vue'
import BooksBlock from '@/components/book/BooksBlock.vue'
import SideBarCounter from '@/components/sidebar/SideBarCounter.vue'

const bookField = ref(null)
</script>
