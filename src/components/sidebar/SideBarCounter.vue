<template>
  <SideBarContainer :padding="padding" :line="line" :place="place">
    <ul class="sideBarCounter">
      <li v-for="item in counter" :key="item.text">
        <SideBarCounterBadge
          :number="item.number"
          :text="item.text"
          :status="item.status"
          :place="place"
        />
      </li>
    </ul>
  </SideBarContainer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import SideBarContainer from './SideBarContainer.vue'
import SideBarCounterBadge from './SideBarCounterBadge.vue'
import { useBookStore } from '@/stores/book-store'

const bookStore = useBookStore()

const { padding, line, place } = defineProps(['padding', 'line', 'place'])

const counter = ref([
  {
    number: computed(() => bookStore.doneBooks.length),
    text: 'Прочитано',
    status: 'done',
  },
  {
    number: computed(() => bookStore.readingBooks.length),
    text: 'Читаю',
    status: 'reading',
  },
  {
    number: computed(() => bookStore.plannedBooks.length),
    text: 'К чтению',
    status: 'mustDo',
  },
])

onMounted(() => {
  bookStore.loadPlanedBooks()
  bookStore.loadReadingBooks()
  bookStore.loadDoneBooks()
})
</script>

<style scoped>
.sideBarCounter {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  column-gap: 12px;
  width: 100%;
}
</style>
