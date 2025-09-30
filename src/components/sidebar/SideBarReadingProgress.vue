<template>
  <SideBarContainer padding="slim">
    <ProgressReadingBlock :readingBook="readingBook" :place="place" :title="title" />
  </SideBarContainer>
</template>

<script setup>
import ProgressReadingBlock from '../progress/ProgressReadingBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { readingBook, place, title } = defineProps(['readingBook', 'place', 'title'])
</script>
