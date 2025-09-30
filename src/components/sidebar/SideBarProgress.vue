<template>
  <SideBarContainer padding="slim">
    <ProgressBlock :progress="progress" />
  </SideBarContainer>
</template>

<script setup>
import ProgressBlock from '../progress/ProgressBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { progress } = defineProps(['progress'])
</script>
