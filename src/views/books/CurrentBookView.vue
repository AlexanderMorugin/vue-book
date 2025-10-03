<template>
  <PageContainer width="normal">
    <BookTitleBlock />
    <BookEditBlock />
    <h1>Book #{{ currentId }}</h1>
  </PageContainer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import PageContainer from '@/components/page/PageContainer.vue'
import BookTitleBlock from '@/components/book/BookTitleBlock.vue'
import BookEditBlock from '@/components/book/BookEditBlock.vue'

const route = useRoute()

const currentId = route.params.id
</script>
