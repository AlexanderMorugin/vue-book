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
        <span class="progressYearBlock__quantity progressYearBlock__quantity_accent"
          >{{ progressBookData.done }}/{{ progressBookData.all }}</span
        >
      </div>
    </div>

    <div class="progressYearBlock__details">
      <div v-if="place === 'sidebar'" class="progressYearBlock__detailsTop">
        <span class="progressYearBlock__detailsTopTitle">Прогресс</span>
        <span class="progressYearBlock__quantity"
          >{{ progressBookData.done }}/{{ progressBookData.all }}</span
        >
      </div>

      <div class="progressYearBlock__detailsMain">
        <ProgressBar :progress="progress" color="green" />
        <div
          :class="[
            'progressYearBlock__detailsTextBox',
            { progressYearBlock__detailsTextBox_big: place === 'home' },
          ]"
        >
          <p v-if="place === 'home'">{{ progressBookData.done }} книги прочитаны</p>
          <p>{{ progress }}% выполнено</p>
        </div>
      </div>

      <p v-if="place === 'home'" class="progressYearBlock__detailsBottom">
        Для достижения цели еще {{ progressBookData.mustDo }} книг!
      </p>
    </div>
  </div>
</template>

<script setup>
import ProgressIcon from '../icon/ProgressIcon.vue'
import StarIcon from '../icon/StarIcon.vue'
import ProgressBar from './ProgressBar.vue'

const { progress, place, title, progressBookData } = defineProps([
  'progress',
  'place',
  'title',
  'progressBookData',
])
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
