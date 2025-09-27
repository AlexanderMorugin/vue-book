<template>
  <AuthFormContainer>
    Login Form

    <router-link :to="REGISTER_PATH">REGISTER_PATH</router-link>

    <router-link to="/">MAIN PAGE</router-link>
  </AuthFormContainer>
</template>

<script setup>
import { REGISTER_PATH } from '@/mock/routes'
import AuthFormContainer from './AuthFormContainer.vue'
</script>
