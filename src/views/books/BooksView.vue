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
    <h1>Моя библиотека</h1>
  </PageContainer>
</template>

<script setup>
import { ref } from 'vue'
import PageContainer from '@/components/page/PageContainer.vue'
import SearchInput from '@/components/form/SearchInput.vue'
import BooksStatusBlock from '@/components/status/BooksStatusBlock.vue'

const bookField = ref(null)
</script>
