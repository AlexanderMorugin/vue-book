<template>
  <div>
    <h1 class="title">Hello World!</h1>

    <router-link :to="REGISTER_PATH">REGISTER PAGE</router-link>
    <router-link :to="LOGIN_PATH">LOGIN PAGE</router-link>
  </div>
</template>

<script setup>
import { LOGIN_PATH, REGISTER_PATH } from '@/mock/routes'

console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
</script>

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
