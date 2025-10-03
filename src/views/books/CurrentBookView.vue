<template>
  <PageContainer width="normal">
    <h1>Book #{{ currentId }}</h1>
  </PageContainer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import PageContainer from '@/components/page/PageContainer.vue'

const route = useRoute()

const currentId = route.params.id
</script>
