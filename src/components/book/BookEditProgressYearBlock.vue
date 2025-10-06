<template>
  <section class="bookEditProgressYearBlock">
    <AppLogoBlock place="progressYear" />

    <div class="bookEditProgressYearBlock__inputBox">
      <span class="bookEditProgressYearBlock__inputBoxTitle">Книг к прочтению в 2024 году</span>
      <div class="bookEditProgressYearBlock__inputContainer">
        <input
          type="number"
          v-model="quantityBooksField"
          class="bookEditProgressYearBlock__input"
        />
        <button class="bookEditProgressYearBlock__submitButton" @click="setBooksQuantity">
          Обновить
        </button>
      </div>
    </div>

    <BookEditProgressYearDisplayBlock />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import BookEditProgressYearDisplayBlock from './BookEditProgressYearDisplayBlock.vue'

const quantityBooksField = ref(20)

const setBooksQuantity = () => console.log(quantityBooksField.value)
</script>

<style scoped>
.bookEditProgressYearBlock {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--gradient-progress-gray);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-secondary);
  padding: 24px 32px 32px 32px;
}
.bookEditProgressYearBlock__inputBox {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bookEditProgressYearBlock__inputBoxTitle {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--text-color-eighthly);
}
.bookEditProgressYearBlock__inputContainer {
  display: flex;
  align-items: center;
  gap: 16px;
}
.bookEditProgressYearBlock__input {
  width: 100%;
  height: 36px;
  border-radius: var(--border-radius-s);
  background: var(--white-primary);
  padding: 9px 13px;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-eighthly);
  border: 1px solid transparent;
  transition: 0.25s;
}
.bookEditProgressYearBlock__input:focus {
  outline: 0;
  border: 1px solid var(--violet-thirdly);
}
.bookEditProgressYearBlock__submitButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  border-radius: var(--border-radius-s);
  border: 1px solid var(--black-primary);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-eighthly);
  padding: 8px 17px;
  opacity: 0.5;
  transition: 0.25s ease;
}
.bookEditProgressYearBlock__submitButton:hover {
  opacity: 1;
  box-shadow: var(--shadow-secondary);
}

@media (max-width: 1023px) {
  .bookEditProgressYearBlock {
    gap: 32px;
  }
}
</style>
