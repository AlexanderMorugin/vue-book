<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border: 2px dotted var(--white-primary);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
</style>
