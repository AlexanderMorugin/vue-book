<template>
  <section class="authContainer">
    <slot />
  </section>
</template>

<style scoped>
.authContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 32px;
  width: 100%;
  max-width: 1152px;
}
</style>
