<template>
  <form class="form-auth" @submit.prevent="submitRegisterForm">
    <FormInput label="Имя" type="text" name="name" placeholder="Ваше имя" />
    <FormInput
      label="Электронная почта"
      type="email"
      name="email"
      placeholder="example@email.com"
    />
    <FormInput label="Пароль" type="password" name="password" placeholder="Минимум 6 символов" />
    <FormInput
      label="Подтвердите пароль"
      type="password"
      name="confirmPassword"
      placeholder="Повторите пароль"
    />

    <FormSubmitButton :place="place" />
  </form>
</template>

<script setup>
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'

const { place } = defineProps(['place'])

const submitRegisterForm = async () => {}
</script>
