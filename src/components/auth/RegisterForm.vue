<template>
  <form class="form-auth" @submit.prevent="submitRegisterForm">
    <FormInput
      label="Имя"
      type="text"
      name="name"
      placeholder="Ваше имя"
      v-model:value="v$.nameField.$model"
      :error="v$.nameField.$errors"
      @clearInput="nameField = null"
    />
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
      label="Пароль"
      type="password"
      name="password"
      placeholder="Минимум 6 символов"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
    />
    <FormInput
      lastInput="true"
      label="Подтвердите пароль"
      type="password"
      name="confirmPassword"
      placeholder="Повторите пароль"
      v-model:value="v$.confirmPasswordField.$model"
      :error="v$.confirmPasswordField.$errors"
      @clearInput="confirmPasswordField = null"
    />

    <FormSubmitButton :place="place" :isFromEmpty="isFromEmpty" :isValid="isValid.length" />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, email, sameAs } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'

const { place } = defineProps(['place'])

const isLoading = ref(false)
const nameField = ref(null)
const emailField = ref(null)
const passwordField = ref(null)
const confirmPasswordField = ref(null)

// Валидация
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Не менее 2 символов', minLength(2)),
  },
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Не менее 6 символов', minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage('', required),
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value)),
  },
}))

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
  passwordField,
  confirmPasswordField,
})

const isFromEmpty = computed(
  () =>
    !nameField.value || !emailField.value || !passwordField.value || !confirmPasswordField.value,
)

const isValid = computed(() => v$.value.$errors)

const submitRegisterForm = async () => {
  const data = {
    email: emailField.value,
    name: nameField.value,
    password: passwordField.value,
    confirmPassword: confirmPasswordField.value,
  }

  isLoading.value = true

  console.log(data)
}
</script>
