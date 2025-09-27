<template>
  <div class="authFormContainer">
    <slot />
  </div>
</template>

<style scoped>
.authFormContainer {
  width: 100%;
  max-width: 560px;
  background: var(--white-secondary);
  box-shadow: var(--shadow-primary);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  padding: 32px;
}
</style>
