<template>
  <ul class="bookStarRating">
    <li
      v-for="i in maxStars"
      :key="i"
      @click="setRating(i)"
      @mouseover="hoverRating(i)"
      @mouseleave="resetHover"
    >
      <button>
        <StarIcon
          :class="['starIcon', i <= (isHovered ? hoverValue : rating) ? 'starIconActive' : '']"
        />
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import StarIcon from '../icon/StarIcon.vue'

const { value, maxStars } = defineProps(['value', 'maxStars'])
const emit = defineEmits(['update:value'])

const rating = ref(value)
const isHovered = ref(false)
const hoverValue = ref(0)

const setRating = (newRating) => {
  rating.value = newRating
  emit('ratingData', newRating)
}

const hoverRating = (value) => {
  if (isHovered.value) {
    hoverValue.value = value
  }
}

const resetHover = () => {
  hoverValue.value = 0
}
</script>

<style scoped>
.bookStarRating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.starIcon {
  width: 24px;
  height: 24px;
  color: var(--gray-seventhly);
}
.starIconActive {
  width: 24px;
  height: 24px;
  fill: var(--yellow-primary);
  color: var(--yellow-primary);
}
</style>
