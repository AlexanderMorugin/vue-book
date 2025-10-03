<template>
  <BookEditContainer>
    <BookEditTitle title="Заметки" name="edit" @handleClick="setActiveComment" />
  </BookEditContainer>
</template>

<script setup>
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'

const setActiveComment = () => console.log('setActiveComment')
</script>

<style scoped></style>
