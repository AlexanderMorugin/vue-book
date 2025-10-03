<template>
  <div class="bookStatus">
    <component
      :is="
        status === 'Читаю'
          ? LogoIcon
          : status === 'Прочитано'
            ? DoneIcon
            : status === 'Запланировано'
              ? MustDoIcon
              : ''
      "
      :class="[
        'icon',
        { icon_reading: status === 'Читаю' },
        { icon_done: status === 'Прочитано' },
        { icon_mustDo: status === 'Запланировано' },
      ]"
    />
    <span
      :class="[
        'bookStatus__text',
        { bookStatus__text_reading: status === 'Читаю' },
        { bookStatus__text_done: status === 'Прочитано' },
        { bookStatus__text_mustDo: status === 'Запланировано' },
      ]"
      >{{ status }}</span
    >
  </div>
</template>

<script setup>
import DoneIcon from '../icon/DoneIcon.vue'
import LogoIcon from '../icon/LogoIcon.vue'
import MustDoIcon from '../icon/MustDoIcon.vue'

const { status } = defineProps(['status'])
</script>

<style scoped>
.bookStatus {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
}
.bookStatus__text {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-s);
  padding: 3px 9px;
  font-family: 'Inter-Medium', sans-serif;
  font-size: 12px;
  line-height: 16px;
}
.bookStatus__text_reading {
  background: var(--blue-thirdly);
  color: var(--blue-secondary);
}
.bookStatus__text_done {
  background: var(--blue-thirdly);
  color: var(--green-seventhly);
}
.bookStatus__text_mustDo {
  background: var(--yellow-secondary);
  color: var(--brown-secondary);
}
.icon {
  width: 16px;
  height: 16px;
}
.icon_reading {
  color: var(--blue-fourthly);
}
.icon_done {
  color: var(--green-sixthly);
}
.icon_mustDo {
  color: var(--yellow-primary);
}
</style>
