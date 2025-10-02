<template>
  <button class="buttonIconNavigate" @click="emit('handleClick')">
    <MenuIcon v-if="name === 'menu'" class="icon" />
    <ArrowIcon v-if="name === 'back'" class="icon" />
    <ClearIcon v-if="name === 'clear'" class="icon" />
    <LogoutIcon v-if="name === 'logout'" class="icon" />
  </button>
</template>

<script setup>
import ArrowIcon from '../icon/ArrowIcon.vue'
import ClearIcon from '../icon/ClearIcon.vue'
import LogoutIcon from '../icon/LogoutIcon.vue'
import MenuIcon from '../icon/MenuIcon.vue'

const { name } = defineProps(['name'])

const emit = defineEmits(['handleClick'])
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
.icon {
  color: var(--text-color-primary);
}
.buttonIconNavigate:hover .icon {
  animation: scale 0.3s ease-in-out;
}
</style>
