<template>
  <aside class="side-bar">
    <div>
      <SideBarLogo />
      <SideBarAuth />
      <SideBarMenu />
      <SideBarYearProgress
        :progress="yearProgress"
        place="sidebar"
        title="Цель 2024"
        :progressBookData="progressBookData"
      />

      <SideBarContainer padding="slim">
        <div>now reading</div>
      </SideBarContainer>
    </div>

    <SideBarContainer padding="slim" line="top">
      <div>counter</div>
    </SideBarContainer>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import SideBarAuth from './SideBarAuth.vue'
import SideBarContainer from './SideBarContainer.vue'
import SideBarLogo from './SideBarLogo.vue'
import SideBarMenu from './SideBarMenu.vue'
import SideBarYearProgress from './SideBarYearProgress.vue'

const yearProgress = ref(10)
const progressBookData = ref({
  all: 20,
  done: 2,
  mustDo: 18,
})
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  min-height: 100vh;
  background: var(--bg-color-primary);
  border-right: 1px solid var(--border-color-primary);
}
</style>
