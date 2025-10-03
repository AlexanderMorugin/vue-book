<template>
  <section>
    <ul class="booksStatusBlock">
      <li v-for="button in statusButtons" :key="button.id">
        <StatusButton
          :title="button.title"
          :number="button.number"
          :isActive="button.status"
          @handleClick="setActive(button.id)"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import StatusButton from './StatusButton.vue'

const statusButtons = ref([
  {
    id: 1,
    title: 'Все',
    number: 4,
    status: true,
  },
  {
    id: 2,
    title: 'Читаю',
    number: 1,
    status: false,
  },
  {
    id: 3,
    title: 'Прочитано',
    number: 2,
    status: false,
  },
  {
    id: 4,
    title: 'Запланировано',
    number: 1,
    status: false,
  },
])

const setActive = (id) => {
  const currentButton = statusButtons.value.find((item) => item.id === id)
  const activeButton = statusButtons.value.find((item) => item.status === true)

  if (currentButton.status !== true) {
    currentButton.status = true
    activeButton.status = false
  }
}
</script>

<style scoped>
.booksStatusBlock {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
