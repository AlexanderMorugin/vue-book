<script setup>
import SideBar from '@/components/AppSideBar.vue'
import Header from '@/components/AppHeader.vue'
</script>

<template>
  <div class="mainLayout">
    <SideBar />
    <div class="mainLayout__content">
      <Header />
      <main class="mainLayout__main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.mainLayout {
  display: flex;
  min-height: 100vh;
}
.mainLayout__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
.mainLayout__main {
  width: 100%;
  height: 100%;
  background: var(--background);
}
</style>
