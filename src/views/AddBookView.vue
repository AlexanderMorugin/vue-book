<template>
  <PageContainer width="narrow">
    <BookAddingBlock />

    <div class="line" />

    <BookEditProgressYearBlock />
  </PageContainer>
</template>

<script setup>
import { onMounted } from 'vue'
import BookAddingBlock from '@/components/book/BookAddingBlock.vue'
import BookEditProgressYearBlock from '@/components/book/BookEditProgressYearBlock.vue'
import PageContainer from '@/components/page/PageContainer.vue'
import { useHeaderStore } from '@/stores/header-store'

const headerStore = useHeaderStore()

onMounted(() => {
  headerStore.setHeaderTitle('Добавить книгу')
})
</script>

<style scoped>
.line {
  width: 100%;
  height: 1px;
  background: var(--black-primary);
}
</style>
