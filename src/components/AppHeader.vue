<template>
  <header class="header">
    <span class="header__title">Главная</span>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: var(--bg-color-secondary);
  border-bottom: 1px solid var(--border-color-primary);
  backdrop-filter: blur(8px);
  padding-left: 24px;
  padding-right: 24px;
}
.header__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 22px;
  color: var(--text-color-primary);
}
</style>
