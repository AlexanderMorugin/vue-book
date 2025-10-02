<template>
  <h1>Book #{{ currentId }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const currentId = route.params.id
</script>
