<template>
  <SideBarContainer padding="slim">
    <ul class="sideBarMenu">
      <li v-for="button in menuButtons" :key="button.id">
        <SideBarMenuButton
          :name="button.name"
          :title="button.title"
          :number="button.number"
          :isActive="button.status"
          @click="setActive(button.id)"
        />
      </li>
    </ul>
  </SideBarContainer>
</template>

<script setup>
import { ref } from 'vue'
import SideBarContainer from './SideBarContainer.vue'
import SideBarMenuButton from './SideBarMenuButton.vue'

const menuButtons = ref([
  {
    id: 1,
    name: 'home',
    title: 'Главная',
    number: null,
    status: false,
  },
  {
    id: 2,
    name: 'library',
    title: 'Моя библиотека',
    number: 4,
    status: false,
  },
  {
    id: 3,
    name: 'addBook',
    title: 'Добавить книгу',
    number: null,
    status: false,
  },
])

const setActive = (id) => {
  const currentButton = menuButtons.value.find((item) => item.id === id)
  const activeButton = menuButtons.value.find((item) => item.status === true)

  if (!activeButton) {
    currentButton.status = true
  } else if (currentButton.status === true) {
    return
  } else {
    currentButton.status = true
    activeButton.status = false
  }
}
</script>

<style scoped>
.sideBarMenu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>
