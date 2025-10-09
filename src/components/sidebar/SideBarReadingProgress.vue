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

<style scoped>
.sideBarReadingProgress {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
