<template>
  <aside class="sideBar">
    <div>
      <SideBarLogo place="sidebar" />
      <SideBarAuth />
      <SideBarMenu @closeMobileSideBar="emit('closeMobileSideBar')" />
      <SideBarYearProgress
        v-if="userStore.user.length && isYearProgress"
        place="sidebar"
        title="Цель 2024"
      />
      <SideBarReadingProgress
        v-if="bookStore.books.length && isReadingBooks"
        place="sidebar"
        title="Сейчас читаю"
      />
    </div>

    <SideBarCounter padding="slim" line="top" />
  </aside>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import SideBarAuth from './SideBarAuth.vue'
import SideBarLogo from './SideBarLogo.vue'
import SideBarMenu from './SideBarMenu.vue'
import SideBarYearProgress from './SideBarYearProgress.vue'
import SideBarReadingProgress from './SideBarReadingProgress.vue'
import SideBarCounter from './SideBarCounter.vue'
import { useBookStore } from '@/stores/book-store'
import { useUserStore } from '@/stores/user-store'

const bookStore = useBookStore()
const userStore = useUserStore()

const emit = defineEmits(['closeMobileSideBar'])

const isLoading = ref(false)

const isReadingBooks = computed(() =>
  bookStore.books.find((item) => item.progress > 0 && item.progress < 100),
)

const isYearProgress = computed(() => userStore.user[0]?.books_for_year > 0)

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadBooks()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getStoreData()
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
