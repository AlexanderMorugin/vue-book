<template>
  <div class="bookRating">
    <StarIcon class="starIcon" />
    <span class="bookRating__text">{{ rating }}</span>
  </div>
</template>

<script setup>
import StarIcon from '../icon/StarIcon.vue'

const { rating } = defineProps(['rating'])
</script>

<style scoped>
.bookRating {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 8px;
}
.bookRating__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
.starIcon {
  width: 12px;
  height: 12px;
  fill: var(--yellow-primary);
  color: var(--yellow-primary);
}
</style>
