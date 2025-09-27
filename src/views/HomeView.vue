<script setup>
console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
</script>

<template>
  <div>
    <h1 class="title">Hello World!</h1>
  </div>
</template>

<style scoped>
.title {
  font-size: 62px;
  font-weight: 600;
  /* color: var(--text-color-primary); */
}
.subtitle {
  font-size: 32px;

  color: var(--text-color-secondary);
}
</style>
