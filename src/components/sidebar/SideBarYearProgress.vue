<template>
  <SideBarContainer padding="slim">
    <ProgressYearBlock
      :progress="progress"
      :place="place"
      :title="title"
      :progressBookData="progressBookData"
    />
  </SideBarContainer>
</template>

<script setup>
import ProgressYearBlock from '../progress/ProgressYearBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { progress, place, title, progressBookData } = defineProps([
  'progress',
  'place',
  'title',
  'progressBookData',
])
</script>
