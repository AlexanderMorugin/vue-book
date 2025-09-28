<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormInput
      label="Электронная почта"
      type="email"
      name="email"
      placeholder="example@email.com"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
    />
    <FormInput
      lastInput="true"
      label="Пароль"
      type="password"
      name="password"
      placeholder="Минимум 6 символов"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
    />

    <FormSubmitButton :place="place" :isFromEmpty="isFromEmpty" :isValid="isValid.length" />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, email } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'

const { place } = defineProps(['place'])

const isLoading = ref(false)
const emailField = ref(null)
const passwordField = ref(null)

// Валидация
const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Не менее 6 символов', minLength(6)),
  },
}))

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
})

const isFromEmpty = computed(() => !emailField.value || !passwordField.value)

const isValid = computed(() => v$.value.$errors)

const submitLoginForm = async () => {
  const data = {
    email: emailField.value,
    password: passwordField.value,
  }

  isLoading.value = true

  console.log(data)
}
</script>
