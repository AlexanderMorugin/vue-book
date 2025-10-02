<template>
  <button class="buttonIconNavigate">
    <MenuIcon v-if="name === 'menu'" class="menuIcon icon" />
    <ArrowIcon v-if="name === 'back'" class="arrowIcon icon" />
  </button>
</template>

<script setup>
import ArrowIcon from '../icon/ArrowIcon.vue'
import MenuIcon from '../icon/MenuIcon.vue'

const { name } = defineProps(['name'])
</script>

<style scoped>
.buttonIconNavigate {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: var(--border-radius-s);
  transition: 0.25s ease;
}
.buttonIconNavigate:hover {
  border: 1px solid var(--border-color-primary);
}
.menuIcon {
  width: 20px;
  height: 20px;
  color: var(--text-color-primary);
}
.arrowIcon {
  color: var(--text-color-secondary);
}
.buttonIconNavigate:hover .icon {
  animation: scale 0.3s ease-in-out;
}
</style>
