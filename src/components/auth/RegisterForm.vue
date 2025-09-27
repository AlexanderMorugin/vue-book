<template>
  <AuthFormContainer>
    Register Form
    <router-link :to="LOGIN_PATH">LOGIN_PATH</router-link>

    <router-link to="/">MAIN PAGE</router-link>
  </AuthFormContainer>
</template>

<script setup>
import { LOGIN_PATH } from '@/mock/routes'
import AuthFormContainer from './AuthFormContainer.vue'
</script>
