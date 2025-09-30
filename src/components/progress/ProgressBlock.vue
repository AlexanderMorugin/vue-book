<template>
  <div class="progressBlock">
    <div class="progressBlock__titleBox">
      <ProgressIcon class="progressIcon" />
      <span class="progressBlock__title">Цель 2025</span>
    </div>
    <div class="progressBlock__details">
      <div class="progressBlock__detailsTop">
        <span class="progressBlock__detailsTopTitle">Прогресс</span>
        <span class="progressBlock__detailsTopQuantity">2/20</span>
      </div>
      <ProgressBar :progress="progress" />
      <p class="progressBlock__detailsText">{{ progress }}% выполнено</p>
    </div>
  </div>
</template>

<script setup>
import ProgressIcon from '../icon/ProgressIcon.vue'
import ProgressBar from './ProgressBar.vue'

const { progress } = defineProps(['progress'])
</script>

<style scoped>
.progressBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 14px;
  background: var(--gray-thirdly);
  width: 100%;
  padding: 16px;
}
.progressBlock__titleBox {
  display: flex;
  align-items: center;
  gap: 8px;
}
.progressBlock__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.progressBlock__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.progressBlock__detailsTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.progressBlock__detailsTopTitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
.progressBlock__detailsTopQuantity {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-primary);
}
.progressBlock__detailsText {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-secondary);
}
.progressIcon {
  color: var(--green-secondary);
}
</style>
