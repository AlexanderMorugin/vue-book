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
      @click="clearErrorMessage"
    />
    <FormInput
      label="Электронная почта"
      type="email"
      name="email"
      placeholder="example@email.com"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
      @click="clearErrorMessage"
    />
    <FormInput
      label="Пароль"
      type="password"
      name="password"
      placeholder="Минимум 6 символов"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
      @click="clearErrorMessage"
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

    <!-- Появляющийся текст ошибки -->
    <TransitionGroup name="error" tag="ul">
      <FormErrorMessage
        v-if="userStore.existUserErrorMessage"
        :text="userStore.existUserErrorMessage"
      />
    </TransitionGroup>

    <!-- Кнопка Сабмит -->
    <FormSubmitButton
      :place="place"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, email, sameAs } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import { useUserStore } from '@/stores/user-store'
import FormErrorMessage from '../form/FormErrorMessage.vue'

const { place } = defineProps(['place'])

const userStore = useUserStore()
const router = useRouter()

const isLoading = ref(false)
const nameField = ref(null)
const emailField = ref(null)
const passwordField = ref(null)
const confirmPasswordField = ref(null)

// При клике на инпуте - очищаем в сторе реф ошибки
const clearErrorMessage = () => userStore.clearExistUserErrorMessage()

// Валидация
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Не менее 3 символов', minLength(3)),
  },
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Не корректно', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Не менее 6 символов', minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage('', required),
    sameAsPassword: helpers.withMessage('Не совпадает', sameAs(passwordField.value)),
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

// Сабмит
const submitRegisterForm = async () => {
  isLoading.value = false

  const userData = {
    email: emailField.value.trim(),
    name: nameField.value.trim(),
    password: passwordField.value.trim(),
  }

  try {
    isLoading.value = true
    await userStore.registerUser(userData)

    // Если приходит ошибка - очищаем поля
    if (userStore.existUserErrorMessage) {
      emailField.value = null
      nameField.value = null
      passwordField.value = null
      confirmPasswordField.value = null
    }

    router.push('/')
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>
