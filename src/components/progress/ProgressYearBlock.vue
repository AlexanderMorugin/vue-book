<template>
  <div
    :class="[
      'progressYearBlock',
      {
        progressYearBlock_wide: place === 'home',
      },
    ]"
  >
    <div class="progressYearBlock__titleBox">
      <div class="progressYearBlock__titleIcon">
        <ProgressIcon v-if="place === 'sidebar'" class="progressIcon" />
        <h2 class="progressYearBlock__title">{{ title }}</h2>
      </div>

      <div v-if="place === 'home'" class="progressYearBlock__starBox">
        <StarIcon class="starIcon" />
        <span
          v-if="bookStore.doneBooks.length && userStore.user.length"
          class="progressYearBlock__quantity progressYearBlock__quantity_accent"
          >{{ bookStore.doneBooks.length }}/{{ userStore.user[0]?.books_for_year }}</span
        >
      </div>
    </div>

    <div class="progressYearBlock__details">
      <div v-if="place === 'sidebar'" class="progressYearBlock__detailsTop">
        <span class="progressYearBlock__detailsTopTitle">Прогресс</span>
        <span
          v-if="bookStore.doneBooks.length && userStore.user.length"
          class="progressYearBlock__quantity"
          >{{ bookStore.doneBooks.length }}/{{ userStore.user[0]?.books_for_year }}</span
        >
      </div>

      <div class="progressYearBlock__detailsMain">
        <ProgressBar
          v-if="bookStore.doneBooks.length && userStore.user.length"
          :progress="isYearProgress"
          color="green"
        />
        <div
          :class="[
            'progressYearBlock__detailsTextBox',
            { progressYearBlock__detailsTextBox_big: place === 'home' },
          ]"
        >
          <p v-if="place === 'home' && bookStore.doneBooks.length && userStore.user.length">
            {{ bookStore.doneBooks.length }} книги прочитаны
          </p>
          <p>{{ isYearProgress }}% выполнено</p>
        </div>
      </div>

      <p
        v-if="place === 'home' && bookStore.doneBooks.length && userStore.user.length"
        class="progressYearBlock__detailsBottom"
      >
        Для достижения цели еще
        {{ userStore.user[0]?.books_for_year - bookStore.doneBooks.length }} книг!
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import ProgressIcon from '../icon/ProgressIcon.vue'
import StarIcon from '../icon/StarIcon.vue'
import ProgressBar from './ProgressBar.vue'
import { useUserStore } from '@/stores/user-store'
import { useBookStore } from '@/stores/book-store'

const userStore = useUserStore()
const bookStore = useBookStore()

const isYearProgress = computed(() =>
  Math.round((bookStore.doneBooks.length / userStore.user[0]?.books_for_year) * 100),
)

const { place, title } = defineProps(['place', 'title'])
</script>

<style scoped>
.progressYearBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: var(--border-radius-l);
  background: var(--gray-thirdly);
  width: 100%;
  padding: 16px;
}
.progressYearBlock_wide {
  gap: 16px;
  padding: 32px;
  box-shadow: var(--shadow-secondary);
}
.progressYearBlock__titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progressYearBlock__titleIcon {
  display: flex;
  align-items: center;
  gap: 8px;
}
.progressYearBlock__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.progressYearBlock__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.progressYearBlock__detailsTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.progressYearBlock__detailsTopTitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
.progressYearBlock__quantity {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-primary);
}
.progressYearBlock__quantity_accent {
  color: var(--yellow-primary);
}
.progressYearBlock__detailsMain {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progressYearBlock__detailsTextBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-secondary);
}
.progressYearBlock__detailsTextBox_big {
  font-size: 14px;
  line-height: 20px;
}
.progressYearBlock__detailsBottom {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}

.progressYearBlock__starBox {
  display: flex;
  align-items: center;
  gap: 4px;
}
.progressIcon {
  color: var(--green-secondary);
}
.starIcon {
  width: 16px;
  height: 16px;
  fill: var(--yellow-primary);
  color: var(--yellow-primary);
}

@media (max-width: 767px) {
  .progressYearBlock_wide {
    padding: 20px 10px;
  }
}
</style>
