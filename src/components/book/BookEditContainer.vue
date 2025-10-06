<template>
  <div class="bookEditContainer">
    <slot />
  </div>
</template>

<style scoped>
.bookEditContainer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--white-thirdly);
  border-radius: var(--border-radius-l);
  box-shadow: var(--shadow-fourthly);
  backdrop-filter: blur(8px);
  padding: 24px;
}

@media (max-width: 767px) {
  .bookEditContainer {
    padding: 20px 10px;
  }
}
</style>
