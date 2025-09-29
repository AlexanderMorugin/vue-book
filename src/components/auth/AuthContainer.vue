<template>
  <section class="authContainer">
    <slot />
  </section>
</template>

<style scoped>
.authContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'promo form';
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1152px;
}

@media (max-width: 1023px) {
  .authContainer {
    grid-template-columns: 1fr;
    grid-template-areas: 'form' 'promo';
    gap: 62px;
  }
}
</style>
