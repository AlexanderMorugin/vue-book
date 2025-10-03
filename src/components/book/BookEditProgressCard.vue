<template>
  <BookEditContainer>
    <BookEditTitle title="Прогресс по чтению" name="edit" @handleClick="setActiveProgress" />
  </BookEditContainer>
</template>

<script setup>
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'

const setActiveProgress = () => console.log('setActiveProgress')
</script>

<style scoped></style>
