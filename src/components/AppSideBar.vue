<script setup>
import AppLogoBlock from './logo/AppLogoBlock.vue'
</script>

<template>
  <aside class="side-bar">
    <AppLogoBlock place="sidebar" />
  </aside>
</template>

<style scoped>
.side-bar {
  width: 100%;
  max-width: 320px;
  min-height: 100vh;
  background: var(--bg-color-primary);
  border-right: 1px solid var(--border-color-primary);
}
</style>
