<script setup lang="ts">
import { REGISTER_PATH } from '@/mock/routes'
</script>

<template>
  <div class="block">
    Login Form

    <router-link :to="REGISTER_PATH">REGISTER_PATH</router-link>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  height: 500px;
  border: 1px solid red;
}
</style>
