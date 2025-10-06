<template>
  <div class="bookEditProgressYearDisplayBlock">
    <div class="bookEditProgressYearDisplayBlock__count">12 / 20</div>
    <span class="bookEditProgressYearDisplayBlock__title">Книг прочитано за год</span>
    <ProgressBar :progress="doneBooksProgress" color="red" />
    <span class="bookEditProgressYearDisplayBlock__subtitle">Осталось прочитать 8 книг!</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from '../progress/ProgressBar.vue'

const doneBooksProgress = ref(60)
</script>

<style scoped>
.bookEditProgressYearDisplayBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--white-fourthly);
  border-radius: var(--border-radius-m);
  padding: 16px;
}
.bookEditProgressYearDisplayBlock__count {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 23px;
  line-height: 32px;
  color: var(--violet-secondary);
  text-align: center;
}
.bookEditProgressYearDisplayBlock__title {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
  text-align: center;
}
.bookEditProgressYearDisplayBlock__subtitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-sixthly);
  text-align: center;
}
</style>
