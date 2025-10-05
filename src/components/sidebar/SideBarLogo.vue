<template>
  <SideBarContainer padding="wide" line="bottom">
    <AppLogoBlock :place="place" />
  </SideBarContainer>
</template>

<script setup>
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import SideBarContainer from './SideBarContainer.vue'

const { place } = defineProps(['place'])
</script>
