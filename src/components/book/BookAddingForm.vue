<template>
  <form class="form-auth" @submit.prevent="submitAddBook">
    <FormInput
      label="Название книги *"
      type="text"
      name="bookName"
      placeholder="Введите название книги"
      v-model:value="v$.bookNameField.$model"
      :error="v$.bookNameField.$errors"
      @clearInput="bookNameField = null"
    />
    <FormInput
      label="Автор *"
      type="text"
      name="author"
      placeholder="Введите имя автора"
      v-model:value="v$.authorField.$model"
      :error="v$.authorField.$errors"
      @clearInput="authorField = null"
    />

    <FormSelect :options="options" v-model:value="parrentSelectedOption" />

    <!-- Кнопка Сабмит -->
    <FormSubmitButton
      :place="place"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
    />
  </form>

  parrentSelectedOption - {{ parrentSelectedOption }}
</template>

<script setup>
import { computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import FormSelect from '../form/FormSelect.vue'

const { place } = defineProps(['place'])

const isLoading = ref(false)
const bookNameField = ref(null)
const authorField = ref(null)
// const genreSelect = ref(null)

const options = ref([
  { id: 1, name: 'One', value: 1 },
  { id: 2, name: 'Two', value: 2 },
  { id: 3, name: 'Three', value: 3 },
])

const parrentSelectedOption = ref(null)

// Валидация
const rules = computed(() => ({
  bookNameField: {
    required: helpers.withMessage('Укажите название книги', required),
    minLength: helpers.withMessage('Не менее 3 символов', minLength(3)),
  },
  authorField: {
    required: helpers.withMessage('Укажите имя автора', required),
    minLength: helpers.withMessage('Не менее 3 символов', minLength(3)),
  },
}))

const v$ = useVuelidate(rules, {
  bookNameField,
  authorField,
})

const isFromEmpty = computed(() => !bookNameField.value || !authorField.value)

const isValid = computed(() => v$.value.$errors)

const submitAddBook = () => {
  isLoading.value = false

  // собираем книгу для деплоя
  const bookData = {
    name: bookNameField.value?.trim(),
    author: authorField.value?.trim(),
  }

  console.log(bookData)
  try {
    isLoading.value = true

    //   // отправляем данные пользователя на регистрацию
    //   await userStore.registerUser(userData)

    //   // Если приходит ошибка - очищаем поля чтобы снова регистрироваться
    //   if (userStore.existUserErrorMessage) {
    //     emailField.value = null
    //     nameField.value = null
    //     passwordField.value = null
    //     confirmPasswordField.value = null
    //   }

    //   // если пользователь зарегистрирован, перенаправляем его на главную страницу
    //   router.push('/')
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped></style>
