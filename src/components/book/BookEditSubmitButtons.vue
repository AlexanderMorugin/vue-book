<template>
  <div class="bookEditSubmitButtons">
    <button
      class="bookEditSubmitButtons__button bookEditSubmitButtons__save"
      @click="emit('submitData')"
    >
      Сохранить
    </button>
    <button
      class="bookEditSubmitButtons__button bookEditSubmitButtons__cancel"
      @click="emit('handleCancel')"
    >
      Отмена
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits('submitData', 'handleCancel')
</script>

<style scoped>
.bookEditSubmitButtons {
  display: flex;
  align-items: center;
  gap: 8px;
}
.bookEditSubmitButtons__button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-s);
  border: 1px solid transparent;
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 12px;
  transition: 0.25s ease;
}
.bookEditSubmitButtons__button:hover {
  box-shadow: var(--shadow-secondary);
}
.bookEditSubmitButtons__save {
  background: var(--text-color-seventhly);
  color: var(--white-primary);
  transition: 0.25s ease;
}
.bookEditSubmitButtons__cancel {
  color: var(--text-color-eighthly);
  transition: 0.25s ease;
}
.bookEditSubmitButtons__save:hover {
  background: var(--blue-secondary);
}
.bookEditSubmitButtons__cancel:hover {
  border: 1px solid var(--border-color-primary);
}
</style>
