<template>
  <SideBarContainer padding="slim">
    <ProgressYearBlock :place="place" :title="title" />
  </SideBarContainer>
</template>

<script setup>
import ProgressYearBlock from '../progress/ProgressYearBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { place, title } = defineProps(['place', 'title'])
</script>
