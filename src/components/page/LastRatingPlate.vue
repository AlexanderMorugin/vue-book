<template>
  <div class="lastRatingPlate">
    <div class="lastRatingPlate__nameBlock">
      <div class="lastRatingPlate__circle" />
      <div>
        <div class="lastRatingPlate__name">{{ bookName }}</div>
        <div class="lastRatingPlate__text">{{ author }}</div>
      </div>
    </div>

    <div class="lastRatingPlate__ratingBlock">
      <StarIcon class="starIcon" />
      <span class="lastRatingPlate__text">{{ rating }}</span>
    </div>
  </div>
</template>

<script setup>
import StarIcon from '../icon/StarIcon.vue'

const { bookName, author, rating } = defineProps(['bookName', 'author', 'rating'])
</script>

<style scoped>
.lastRatingPlate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-l);
  background: var(--gray-fifthly);
  box-shadow: var(--shadow-thirdly);
  backdrop-filter: blur(8px);
  padding: 16px;
}
.lastRatingPlate__nameBlock {
  display: flex;
  align-items: center;
  gap: 12px;
}
.lastRatingPlate__circle {
  min-width: 8px;
  height: 8px;
  border-radius: var(--border-radius-full);
  background: var(--green-sixthly);
}
.lastRatingPlate__name {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.lastRatingPlate__text {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
.lastRatingPlate__ratingBlock {
  display: flex;
  align-items: center;
  gap: 4px;
}
.starIcon {
  width: 12px;
  height: 12px;
  fill: var(--yellow-primary);
  color: var(--yellow-primary);
}

@media (max-width: 767px) {
  .lastRatingPlate {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
