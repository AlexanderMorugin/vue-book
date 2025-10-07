<template>
  <SideBarContainer padding="slim">
    <ProgressReadingBlock :place="place" :title="title" />
  </SideBarContainer>
</template>

<script setup>
import ProgressReadingBlock from '../progress/ProgressReadingBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { place, title } = defineProps(['place', 'title'])
</script>
