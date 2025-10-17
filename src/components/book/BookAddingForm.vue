<template>
  <div>
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

      <FormSelect
        v-if="genreStore.genres.length"
        label="Жанр"
        :options="genreStore.genres"
        v-model:value="v$.parrentSelectedOption.$model"
      />

      <FormInput
        v-if="!images.length"
        lastInput="true"
        label="Обложка книги"
        type="text"
        name="imageUrl"
        placeholder="Вставьте ссылку на изображение"
        v-model:value="v$.imageUrlField.$model"
        :error="v$.imageUrlField.$errors"
        @clearInput="imageUrlField = null"
      />

      <!-- Поле с ручной загрузкой картинки -->
      <div v-if="!imageUrlField" class="bookUploadImageBlock">
        <div
          :class="[
            'bookUploadImageBlock__background',
            { bookUploadImageBlock__background_isDragging: isDragging },
          ]"
        >
          <div
            v-if="!images.length"
            class="bookUploadImageBlock__container"
            @dragover.prevent="onDragover"
            @dragleave.prevent="onDragleave"
            @drop.prevent="onDrop"
          >
            <BookUploadImageButton @click="selectFiles" />

            <span class="bookUploadImageBlock__title">Загрузить обложку книги</span>
            <span class="bookUploadImageBlock__subtitle"
              >Перетащите файл или нажмите для выбора • Макс. 5МБ</span
            >

            <input
              name="file"
              type="file"
              ref="fileInput"
              @change="onFileSelect"
              class="bookUploadImageBlock__input"
            />
          </div>

          <div v-if="images.length" class="bookUploadImageBlock__imageContainer">
            <div
              class="bookUploadImageBlock__imageBox"
              v-for="(image, index) in images"
              :key="index"
            >
              <div
                role="button"
                class="bookUploadImageBlock__imageDelete"
                @click="deleteImage(index)"
              >
                <ClearIcon />
              </div>
              <img :src="image.url" class="bookUploadImageBlock__image" />
            </div>
          </div>
        </div>

        <span v-if="!images.length" class="bookUploadImageBlock__subtitle"
          >Загрузите файл изображения, вставьте ссылку или используйте кнопку "Найти"</span
        >
      </div>

      <!-- Кнопка Сабмит -->
      <FormSubmitButton
        :place="place"
        :isFromEmpty="isFromEmpty"
        :isValid="isValid.length"
        :isLoading="isLoading"
      />
    </form>

    <!-- Модалка предупреждения, что добавляется книга без обложки -->
    <Teleport to="body">
      <Transition name="fade">
        <BookModal
          v-if="isWarningNoImageModalOpen"
          :isModalOpen="isWarningNoImageModalOpen"
          :message="warningNoImageMessage"
          :listeners="iswarningAgreement"
          yesButtonText="Да"
          noButtonText="Нет"
          @continue="continueSubmit"
          @closeModal="closeWarningNoImageModal"
        />
      </Transition>
    </Teleport>

    <!-- Модалка успешного добавления книги в supabase -->
    <Teleport to="body">
      <Transition name="fade">
        <BookModal
          v-if="isSuccessModalOpen"
          :isModalOpen="isSuccessModalOpen"
          :message="successCreatingNewBookMessage"
          yesButtonText="В библиотеку"
          @continue="closeSuccessModal"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, url } from '@vuelidate/validators'
import FormInput from '../form/FormInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import FormSelect from '../form/FormSelect.vue'
import { useGenreStore } from '@/stores/genre-store'
import { useUserStore } from '@/stores/user-store'
import { useBookStore } from '@/stores/book-store'
import BookUploadImageButton from './BookUploadImageButton.vue'
import ClearIcon from '../icon/ClearIcon.vue'
import { BOOKS_PATH } from '@/mock/routes'
import BookModal from '../modal/BookModal.vue'

const genreStore = useGenreStore()
const userStore = useUserStore()
const bookStore = useBookStore()
const router = useRouter()

const { place } = defineProps(['place'])

const isLoading = ref(false)
const bookNameField = ref(null)
const authorField = ref(null)
const imageUrlField = ref(null)
const images = ref([])
const dropedImage = ref(null)
const fileInput = ref(null)
const isDragging = ref(false)
const isSuccessModalOpen = ref(false)
const successCreatingNewBookMessage = ref(null)
const isWarningNoImageModalOpen = ref(false)
const warningNoImageMessage = ref(null)
const iswarningAgreement = ref(false)
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

// Функции добавления картинки по кнопке
const selectFiles = () => {
  fileInput.value.click()
}

const onFileSelect = (event) => {
  const files = event.target.files

  if (files.length === 0) return

  for (let i = 0; i < files.length; i++) {
    if (files[i].type.split('/')[0] != 'image') continue
    if (!images.value.some((e) => e.name === files[i].name)) {
      images.value.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
    }
  }

  dropedImage.value = event.target.files[0]

  // Очищаем инпут ввода картинки в текстовом режиме
  imageUrlField.value = null
}

const deleteImage = (index) => {
  images.value.splice(index, 1)
}

// Drag and Drop functions
const onDragover = (event) => {
  event.preventDefault()
  isDragging.value = true
  event.dataTransfer.dropEffect = 'copy'
}

const onDragleave = (event) => {
  event.preventDefault()
  isDragging.value = false
}

const onDrop = (event) => {
  event.preventDefault()
  isDragging.value = false

  const files = event.dataTransfer.files

  dropedImage.value = event.dataTransfer.files[0]

  for (let i = 0; i < files.length; i++) {
    if (files[i].type.split('/')[0] != 'image') continue
    if (!images.value.some((e) => e.name === files[i].name)) {
      images.value.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
    }
  }

  // Очищаем инпут ввода картинки в текстовом режиме
  imageUrlField.value = null
}

// Функции модалок
const continueSubmit = () => {
  iswarningAgreement.value = true
  // console.log(iswarningAgreement.value)
  closeWarningNoImageModal()
  submitAddBook()
}

const closeWarningNoImageModal = () => {
  isWarningNoImageModalOpen.value = false
}

const closeSuccessModal = () => {
  isSuccessModalOpen.value = false
  router.push(BOOKS_PATH)
}

// Сабмит формы
const submitAddBook = async () => {
  isLoading.value = false

  try {
    isLoading.value = true

    if (!isFromEmpty.value && !isValid.value.length) {
      // собираем книгу для деплоя
      const bookData = {
        name: bookNameField.value.trim(),
        author: authorField.value.trim(),
        genre: parrentSelectedOption.value.name,
        image: imageUrlField.value,
        dropedImage: dropedImage.value,
        user_id: userStore.user[0].id,
        progress: 0,
        rating: 0,
      }

      // Появление модалки, если деплоим книгу без картинки совсем
      if (!iswarningAgreement.value && (!imageUrlField.value || !dropedImage.value)) {
        isWarningNoImageModalOpen.value = true
        warningNoImageMessage.value = 'Книга будет без обложки?'
      }

      // Подтвердили модалку и деплоим, что книга действительно будет без картинки
      if (iswarningAgreement.value && (!imageUrlField.value || !dropedImage.value)) {
        const data = await bookStore.addBook(bookData)

        if (data) {
          isSuccessModalOpen.value = true
          successCreatingNewBookMessage.value = 'Книга успешно добавлена!'
        }
      }

      // Деплоим книгу с картинкой через инпут или драг дроп
      if (!iswarningAgreement.value && (imageUrlField.value || dropedImage.value)) {
        isWarningNoImageModalOpen.value = false

        const data = await bookStore.addBook(bookData)

        if (data) {
          isSuccessModalOpen.value = true
          successCreatingNewBookMessage.value = 'Книга успешно добавлена!'
        }
      }
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  genreStore.loadGenres()
})
</script>

<style scoped>
.bookUploadImageBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
/* .bookUploadImageBlock_hide {
  opacity: 0;
  height: 0;
} */
.bookUploadImageBlock__background {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  background: var(--white-primary);
  border-radius: var(--border-radius-m);
  border: 2px dashed var(--gray-seventhly);
  min-height: 152px;
}
.bookUploadImageBlock__background_isDragging {
  background: var(--green-primary);
  border: 2px dashed var(--green-secondary);
}
.bookUploadImageBlock__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 26px;
}
.bookUploadImageBlock__title {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-thirdly);
}
.bookUploadImageBlock__subtitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-sixthly);
}
.bookUploadImageBlock__imageContainer {
  position: absolute;
  top: 20px;
  left: 20px;
}
.bookUploadImageBlock__imageBox {
  position: relative;
  width: 100px;
  height: 100px;
}
.bookUploadImageBlock__image {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-m);
  object-fit: cover;
}
.bookUploadImageBlock__imageDelete {
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: var(--border-radius-full);
  background: var(--red-primary);
  transition: 0.25s ease;
}
.bookUploadImageBlock__imageDelete:hover {
  background: var(--green-secondary);
}
.clearIcon {
  width: 18px;
  height: 18px;
  color: var(--white-primary);
}
.bookUploadImageBlock__input {
  display: none;
}
</style>
