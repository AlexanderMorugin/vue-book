<template>
  <SideBarContainer padding="slim">
    <div class="sideBarMenu">
      <li>
        <SideBarMenuButton name="home" title="Главная" />
      </li>
      <li>
        <SideBarMenuButton name="library" title="Моя библиотека" number="4" isActive="true" />
      </li>
      <li>
        <SideBarMenuButton name="add" title="Добавить книгу" />
      </li>
    </div>
  </SideBarContainer>
</template>

<script setup>
import SideBarContainer from './SideBarContainer.vue'
import SideBarMenuButton from './SideBarMenuButton.vue'
</script>

<style scoped>
.sideBarMenu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>
