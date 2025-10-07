<template>
  <aside class="sideBar">
    <div>
      <SideBarLogo place="sidebar" />
      <SideBarAuth />
      <SideBarMenu @closeMobileSideBar="emit('closeMobileSideBar')" />
      <SideBarYearProgress place="sidebar" title="Цель 2024" />
      <SideBarReadingProgress place="sidebar" title="Сейчас читаю" />
    </div>

    <SideBarCounter padding="slim" line="top" />
  </aside>
</template>

<script setup>
import SideBarAuth from './SideBarAuth.vue'
import SideBarLogo from './SideBarLogo.vue'
import SideBarMenu from './SideBarMenu.vue'
import SideBarYearProgress from './SideBarYearProgress.vue'
import SideBarReadingProgress from './SideBarReadingProgress.vue'
import SideBarCounter from './SideBarCounter.vue'

const emit = defineEmits(['closeMobileSideBar'])
</script>

<style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  min-height: 100vh;
  background: var(--bg-color-primary);
  border-right: 1px solid var(--border-color-primary);
}

@media (max-width: 1023px) {
  .sideBar {
    max-width: 100%;
    border-right: none;
  }
}
</style>
