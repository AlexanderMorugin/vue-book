<script setup lang="ts">
import { LOGIN_PATH } from '@/mock/routes'
</script>

<template>
  <div class="block">
    Register Form
    <router-link :to="LOGIN_PATH">LOGIN_PATH</router-link>

    <router-link to="/">MAIN PAGE</router-link>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  height: 500px;
  border: 1px solid red;
}
</style>
