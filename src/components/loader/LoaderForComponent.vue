<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.loader {
  width: 30px;
  height: 30px;
  border: 4px dotted var(--blue-primary);
  border-radius: var(--border-radius-full);
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
</style>
