<template>
  <OverlayModal :isSuccessModalOpen="isSuccessModalOpen">
    <div class="modalAddingBook">
      <span class="modalAddingBook_message">{{ message }}</span>
      <button class="modalAddingBook_button" @click="emit('closeModal')">В библиотеку</button>
    </div>
  </OverlayModal>
</template>

<script setup>
import OverlayModal from './OverlayModal.vue'

const { isSuccessModalOpen, message } = defineProps(['isSuccessModalOpen', 'message'])
const emit = defineEmits(['closeModal'])
</script>

<style scoped>
.modalAddingBook {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 450px;
  background: var(--white-primary);
  border-radius: var(--border-radius-l);
  padding: 32px;
  box-shadow: var(--shadow-primary);
}
.modalAddingBook_message {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-primary);
  text-align: center;
}
.modalAddingBook_button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: var(--green-fifthly);
  border-radius: var(--border-radius-m);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--white-primary);
  transition: 0.25s ease;
}
.modalAddingBook_button:hover {
  background: var(--green-fourthly);
}
</style>
