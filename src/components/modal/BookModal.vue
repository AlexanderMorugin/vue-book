<template>
  <OverlayModal :isModalOpen="isModalOpen">
    <div class="bookModal">
      <span class="bookModal__message">{{ message }}</span>
      <div :class="['bookModal__buttons', { bookModal__buttons_oneButton: !noButtonText }]">
        <button
          v-if="yesButtonText"
          class="bookModal__button bookModal__button_yes"
          @click="emit('continue')"
          v-on="listeners"
          v-bind="$attrs"
        >
          {{ yesButtonText }}
        </button>
        <button
          v-if="noButtonText"
          class="bookModal__button bookModal__button_no"
          @click="emit('closeModal')"
        >
          {{ noButtonText }}
        </button>
      </div>
    </div>
  </OverlayModal>
</template>

<script setup>
import OverlayModal from './OverlayModal.vue'

const { isModalOpen, message, yesButtonText, noButtonText } = defineProps([
  'isSuccessModalOpen',
  'message',
  'yesButtonText',
  'noButtonText',
])
const emit = defineEmits(['closeModal', 'continue'])
</script>

<style scoped>
.bookModal {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 450px;
  height: fit-content;
  background: var(--white-primary);
  border-radius: var(--border-radius-l);
  padding: 32px;
  box-shadow: var(--shadow-primary);
}
.bookModal__message {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-primary);
  text-align: center;
}
.bookModal__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.bookModal__buttons_oneButton {
  grid-template-columns: 1fr;
}
.bookModal__button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: var(--border-radius-m);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--white-primary);
}
.bookModal__button_yes {
  background: var(--green-fifthly);
  transition: 0.25s ease;
}
.bookModal__button_yes:hover {
  background: var(--green-fourthly);
}
.bookModal__button_no {
  background: var(--red-primary);
  transition: 0.25s ease;
}
.bookModal__button_no:hover {
  background: var(--brown-secondary);
}

@media (max-width: 767px) {
  .bookModal__buttons {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
