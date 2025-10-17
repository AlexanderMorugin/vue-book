<template>
  <div class="modalOverlay">
    <slot />
  </div>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue'

const { isModalOpen } = defineProps(['isModalOpen'])

function lockScroll() {
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.body.style.overflow = 'auto'
}

watch(() => isModalOpen, lockScroll())

onBeforeUnmount(() => unlockScroll())
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--black-secondary);
  padding: 20px;
  z-index: 20;
}
</style>
