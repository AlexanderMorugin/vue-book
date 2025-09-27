<template>
  <div class="authPromoContainer">
    <slot />
  </div>
</template>

<style scoped>
.authPromoContainer {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 560px;

  /* border: 1px solid red; */
}
</style>
