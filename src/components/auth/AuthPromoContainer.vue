<template>
  <div class="authPromoContainer">
    <slot />
  </div>
</template>

<style scoped>
.authPromoContainer {
  grid-area: promo;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 560px;
}

@media (max-width: 1023px) {
  .authPromoContainer {
    max-width: 100%;
  }
}
</style>
