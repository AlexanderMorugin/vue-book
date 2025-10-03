<template>
  <aside class="sideBar">
    <div>
      <SideBarLogo />
      <SideBarAuth />
      <SideBarMenu @closeMobileSideBar="emit('closeMobileSideBar')" />
      <SideBarYearProgress
        :progress="yearProgress"
        place="sidebar"
        title="Цель 2024"
        :progressBookData="progressBookData"
      />
      <SideBarReadingProgress place="sidebar" title="Сейчас читаю" :readingBook="readingBook" />
    </div>

    <SideBarCounter padding="slim" line="top" />
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import SideBarAuth from './SideBarAuth.vue'
import SideBarLogo from './SideBarLogo.vue'
import SideBarMenu from './SideBarMenu.vue'
import SideBarYearProgress from './SideBarYearProgress.vue'
import SideBarReadingProgress from './SideBarReadingProgress.vue'
import SideBarCounter from './SideBarCounter.vue'
import BookMidnightLibraryImage from '/images/img-midnight-library.webp'

const emit = defineEmits(['closeMobileSideBar'])

const yearProgress = ref(10)
const progressBookData = ref({
  all: 20,
  done: 2,
  mustDo: 18,
})

const readingBook = ref({
  title: 'Полуночная библиотека',
  author: 'Мэтт Хейг',
  image: BookMidnightLibraryImage,
  readingProgress: 65,
})
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
