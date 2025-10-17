<template>
  <button
    :class="['statusButton', , { statusButton_active: isActive }]"
    @click="emit('handleClick')"
  >
    <span :class="['statusButton__title', { statusButton__title_active: isActive }]">{{
      title
    }}</span>
    <span class="statusButton__number">{{ quantity }}</span>
  </button>
</template>

<script setup>
const { title, quantity, isActive } = defineProps(['title', 'quantity', 'isActive'])
const emit = defineEmits(['handleClick'])
</script>

<style scoped>
.statusButton {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 32px;
  background: var(--white-thirdly);
  border-radius: var(--border-radius-s);
  border: 1px solid var(--border-color-primary);
  padding-left: 13px;
  padding-right: 13px;
  transition: 0.25s ease;
}
.statusButton_active {
  background: var(--green-thirdly);
  border: 1px solid var(--green-thirdly);
  /* cursor: auto; */
}
.statusButton__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-eighthly);
}
.statusButton__title_active {
  color: var(--white-primary);
}
.statusButton__number {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-fourthly);
  border-radius: var(--border-radius-s);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-seventhly);
  padding: 3px 9px;
}
.statusButton:hover {
  box-shadow: var(--shadow-fourthly);
}
.statusButton_active:hover {
  box-shadow: none;
}
.statusButton:hover .statusButton__number {
  animation: scale 0.3s ease-in-out;
}
.statusButton_active:hover .statusButton__number {
  animation: none;
}
</style>
