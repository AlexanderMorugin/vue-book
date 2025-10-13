<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormInput
      label="Электронная почта"
      type="email"
      name="emailField"
      placeholder="example@email.com"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
      @click="clearErrorMessage"
    />
    <FormInput
      lastInput="true"
      label="Пароль"
      type="password"
      name="passwordField"
      placeholder="Минимум 6 символов"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
      @click="clearErrorMessage"
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
import { helpers, required, minLength, email } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import { useUserStore } from '@/stores/user-store'
import FormErrorMessage from '../form/FormErrorMessage.vue'

const { place } = defineProps(['place'])

const userStore = useUserStore()
const router = useRouter()

const isLoading = ref(false)
const emailField = ref(null)
const passwordField = ref(null)

// При клике на инпуте - очищаем в сторе реф ошибки
const clearErrorMessage = () => userStore.clearExistUserErrorMessage()

// Валидация
const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Не корректно', email),
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

// Сабмит
const submitLoginForm = async () => {
  isLoading.value = false

  try {
    isLoading.value = true

    if (!isFromEmpty.value && !isValid.value.length) {
      // собираем пользователя
      const userData = {
        email: emailField.value?.trim(),
        password: passwordField.value?.trim(),
      }

      await userStore.loginUser(userData)

      // Если приходит ошибка - очищаем поля
      if (userStore.existUserErrorMessage) {
        emailField.value = null
        passwordField.value = null
      }

      router.push('/')
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>
