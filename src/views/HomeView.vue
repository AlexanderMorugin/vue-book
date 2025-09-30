<template>
  <div class="home">
    <section class="home__titleBlock">
      <h1 class="home__title">Привет! 📚</h1>
      <p class="home__subtitle">Сохрани свои любимые книги</p>
    </section>

    <section class="home__content">
      <ProgressYearBlock
        :progress="yearProgress"
        place="home"
        title="Цель на 2024 год"
        :progressBookData="progressBookData"
      />
    </section>

    <router-link :to="REGISTER_PATH">REGISTER PAGE</router-link>
    <router-link :to="LOGIN_PATH">LOGIN PAGE</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LOGIN_PATH, REGISTER_PATH } from '@/mock/routes'
import ProgressYearBlock from '@/components/progress/ProgressYearBlock.vue'

const yearProgress = ref(10)
const progressBookData = ref({
  all: 20,
  done: 2,
  mustDo: 18,
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1216px;
}
.home__titleBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
}
.home__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 34px;
  line-height: 40px;
  color: var(--text-color-primary);
}
.home__subtitle {
  font-family: 'Inter_Regular', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: var(--text-color-secondary);
}
.home__content {
  display: grid;
  grid-template-columns: 1fr 384px;
  gap: 32px;
}
</style>
