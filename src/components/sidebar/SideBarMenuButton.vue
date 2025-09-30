<template>
  <button :class="['sideBarMenuButton', { sideBarMenuButton_active: isActive }]">
    <div class="sideBarMenuButton__iconBox">
      <component
        :is="name === 'home' ? HomeIcon : name === 'library' ? LibraryIcon : PlusIcon"
        :class="['menuIcon', { menuIcon_active: isActive }]"
      />
      <span :class="['sideBarMenuButton__title', { sideBarMenuButton__title_active: isActive }]">{{
        title
      }}</span>
    </div>

    <div
      v-if="number"
      :class="['sideBarMenuButton__number', { sideBarMenuButton__number_active: isActive }]"
    >
      {{ number }}
    </div>
  </button>
</template>

<script setup>
import HomeIcon from '../icon/HomeIcon.vue'
import LibraryIcon from '../icon/LibraryIcon.vue'
import PlusIcon from '../icon/PlusIcon.vue'

const { name, title, number, isActive } = defineProps(['name', 'title', 'number', 'isActive'])
</script>

<style scoped>
.sideBarMenuButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 14px;
  padding: 14px 16px;
}
.sideBarMenuButton_active {
  background: var(--gray-thirdly);
  box-shadow: var(--shadow-thirdly);
  cursor: auto;
}
.sideBarMenuButton__iconBox {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sideBarMenuButton__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: var(--text-color-secondary);
  transition: 0.25s all;
}
.sideBarMenuButton__title_active {
  color: var(--green-secondary);
}
.sideBarMenuButton__number {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--gray-fourthly);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-seventhly);
  padding: 3px 9px;
}
.sideBarMenuButton__number_active {
  background: var(--green-primary);
  color: var(--green-fourthly);
}
.menuIcon {
  color: var(--text-color-secondary);
  transition: 0.25s all;
}
.menuIcon_active {
  color: var(--green-secondary);
}
.sideBarMenuButton:hover {
  background: var(--gray-primary);
}
.sideBarMenuButton:hover .sideBarMenuButton__title {
  color: var(--violet-secondary);
}
.sideBarMenuButton:hover .menuIcon {
  color: var(--violet-secondary);
  animation: scale 0.3s ease-in-out;
}
.sideBarMenuButton_active:hover {
  background: var(--gray-thirdly);
}
.sideBarMenuButton_active:hover .menuIcon_active {
  color: var(--green-secondary);
  animation: none;
}
.sideBarMenuButton_active:hover .sideBarMenuButton__title_active {
  color: var(--green-secondary);
}
</style>
