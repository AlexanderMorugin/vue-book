<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormInput
      label="Электронная почта"
      type="email"
      name="email"
      placeholder="example@email.com"
    />
    <FormInput label="Пароль" type="password" name="password" placeholder="Минимум 6 символов" />

    <FormSubmitButton :place="place" />
  </form>
</template>

<script setup>
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'

const { place } = defineProps(['place'])

const submitLoginForm = async () => {}
</script>
