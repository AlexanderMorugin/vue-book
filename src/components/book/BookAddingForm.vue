<template>
  <form class="form-auth" @submit.prevent="submitAddBook">
    <FormInput
      lastInput="true"
      label="Название книги *"
      type="text"
      name="bookName"
      placeholder="Введите название книги"
      v-model:value="v$.bookNameField.$model"
      :error="v$.bookNameField.$errors"
      @clearInput="bookNameField = null"
    />
    <FormInput
      lastInput="true"
      label="Автор *"
      type="text"
      name="author"
      placeholder="Введите имя автора"
      v-model:value="v$.authorField.$model"
      :error="v$.authorField.$errors"
      @clearInput="authorField = null"
    />

    <FormSelect label="Жанр" :options="options" v-model:value="v$.parrentSelectedOption.$model" />

    <FormInput
      lastInput="true"
      label="Обложка книги"
      type="text"
      name="imageUrl"
      placeholder="Вставьте ссылку на изображение"
      v-model:value="v$.imageUrlField.$model"
      :error="v$.imageUrlField.$errors"
      @clearInput="imageUrlField = null"
    />

    <BookUploadImageBlock />

    <!-- Кнопка Сабмит -->
    <FormSubmitButton
      :place="place"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
    />
  </form>

  <!-- parrentSelectedOption - {{ parrentSelectedOption }} -->
</template>

<script setup>
import { computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, url } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import FormSelect from '../form/FormSelect.vue'
import BookUploadImageBlock from './BookUploadImageBlock.vue'

const { place } = defineProps(['place'])

const isLoading = ref(false)
const bookNameField = ref(null)
const authorField = ref(null)
const imageUrlField = ref(null)

const options = ref([
  { id: 1, name: 'Художественная литература' },
  { id: 2, name: 'Классика' },
  { id: 3, name: 'Саморазвитие' },
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
  parrentSelectedOption: {
    required: helpers.withMessage('Выберите жанр', required),
  },
  imageUrlField: {
    url: helpers.withMessage('Вставьте ссылку', url),
  },
}))

const v$ = useVuelidate(rules, {
  bookNameField,
  authorField,
  parrentSelectedOption,
  imageUrlField,
})

const isFromEmpty = computed(
  () => !bookNameField.value || !authorField.value || !parrentSelectedOption.value,
)

const isValid = computed(() => v$.value.$errors)

const submitAddBook = () => {
  isLoading.value = false

  // собираем книгу для деплоя
  const bookData = {
    name: bookNameField.value.trim(),
    author: authorField.value.trim(),
    genre: parrentSelectedOption.value.name,
    image: imageUrlField.value,
  }

  try {
    isLoading.value = true

    if (!isFromEmpty.value && !isValid.value.length) {
      console.log(bookData)
    }

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
