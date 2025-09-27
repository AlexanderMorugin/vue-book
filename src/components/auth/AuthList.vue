<template>
  <ul class="authList">
    <li v-for="(item, index) in authList" :key="index" class="authList__item">
      <div class="authList__circle" />
      <span class="authList__text">{{ item }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const authList = ref([
  'Отслеживание прогресса чтения',
  'Организация личной библиотеки',
  'Постановка и достижение целей',
])
</script>

<style scoped>
.authList {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.authList__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
}
.authList__circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--violet-thirdly);
}
.authList__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 15px;
  line-height: 24px;
  vertical-align: middle;
  color: var(--text-color-thirdly);
}
</style>
