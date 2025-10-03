<template>
  <div class="sideBarCounterBadge">
    <span
      :class="[
        'sideBarCounterBadge__number',
        { sideBarCounterBadge__number_done: status === 'done' },
        { sideBarCounterBadge__number_reading: status === 'reading' },
        { sideBarCounterBadge__number_mustDo: status === 'mustDo' },
        { sideBarCounterBadge__number_booksDone: place === 'books' && status === 'done' },
        { sideBarCounterBadge__number_booksReading: place === 'books' && status === 'reading' },
        { sideBarCounterBadge__number_booksMustDo: place === 'books' && status === 'mustDo' },
      ]"
      >{{ number }}</span
    >
    <span class="sideBarCounterBadge__text">{{ text }}</span>
  </div>
</template>

<script setup>
const { number, text, status, place } = defineProps(['number', 'text', 'status', 'place'])
</script>

<style scoped>
.sideBarCounterBadge {
  display: flex;
  flex-direction: column;
}
.sideBarCounterBadge__number {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
}
.sideBarCounterBadge__number_done {
  color: var(--green-fifthly);
}
.sideBarCounterBadge__number_reading {
  color: var(--blue-primary);
}
.sideBarCounterBadge__number_mustDo {
  color: var(--brown-primary);
}
.sideBarCounterBadge__number_booksDone {
  font-size: 24px;
  line-height: 32px;
  color: var(--green-eighthly);
}
.sideBarCounterBadge__number_booksReading {
  font-size: 24px;
  line-height: 32px;
  color: var(--blue-primary);
}
.sideBarCounterBadge__number_booksMustDo {
  font-size: 24px;
  line-height: 32px;
  color: var(--brown-primary);
}
.sideBarCounterBadge__text {
  font-family: 'Inter_Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color-secondary);
}
</style>
