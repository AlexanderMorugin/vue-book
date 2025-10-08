<template>
  <div class="bookStarRating">
    <div v-for="i in maxStars" :key="i" @click="setRating(i)">
      <button>
        <StarIcon :class="['starIcon', i <= rating ? 'starIconActive' : '']" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import StarIcon from '../icon/StarIcon.vue'
import { useBookStore } from '@/stores/book-store'

const bookStore = useBookStore()

const { value, maxStars, bookId } = defineProps(['value', 'maxStars', 'bookId'])
const emit = defineEmits(['update:value'])

const rating = ref(value)

const setRating = (newRating) => {
  rating.value = newRating
  emit('ratingData', newRating)
}

async function getStoreData() {
  const { data } = await bookStore.loadCurrentBook(bookId)
  rating.value = data[0].rating
}

onMounted(() => {
  getStoreData()
})
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
