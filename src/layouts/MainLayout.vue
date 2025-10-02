<template>
  <div class="mainLayout">
    <SideBar v-if="!isScreenLarge" />
    <div class="mainLayout__content">
      <Header />
      <main class="mainLayout__main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/sidebar/SideBar.vue'
import Header from '@/components/AppHeader.vue'
import { useResizeLarge } from '@/composables/useResizeLarge'

const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.mainLayout {
  display: flex;
  width: 100%;
  max-width: var(--screen-xxl);
  min-height: 100vh;
  border-left: 1px solid var(--border-color-primary);
  border-right: 1px solid var(--border-color-primary);
  margin: 0 auto;
}
.mainLayout__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
.mainLayout__main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  padding: 32px;
}

@media (max-width: 767px) {
  .mainLayout__main {
    padding: 20px 10px;
  }
}
</style>
