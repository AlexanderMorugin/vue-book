<template>
  <div :class="['sideBarMobile', { sideBarMobile_active: isMobileSideBarOpen }]">
    <div class="sideBarMobile__close" @click="emit('closeMobileSideBar')">
      <ButtonIconNavigate name="clear" />
    </div>
    <slot />
  </div>
</template>

<script setup>
import ButtonIconNavigate from '../page/ButtonIconNavigate.vue'

const { isMobileSideBarOpen } = defineProps(['isMobileSideBarOpen'])
const emit = defineEmits(['closeMobileSideBar'])
</script>

<style scoped>
.sideBarMobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: var(--white-primary);
  z-index: 20;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
  overflow-y: scroll;
}
.sideBarMobile_active {
  box-shadow: var(--shadow-fifthly);
  transform: translateX(0);
}
.sideBarMobile__close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
