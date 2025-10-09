<template>
  <div>
    <BookEditContainer>
      <BookEditTitle title="Прогресс по чтению" name="edit" @handleClick="setActiveProgress" />

      <LoaderForComponent v-if="isLoading" />
      <component
        v-else
        :is="isProgressActive ? BookProgressInput : ProgressBarDetails"
        v-model:value="progress"
        :progress="progress"
      />

      <BookEditSubmitButtons
        v-if="isProgressActive"
        @submitData="submitData"
        @handleCancel="removeActiveProgress"
      />
    </BookEditContainer>
    <FormSubmitButton place="book" :isLoading="isLoading" @handleClick="setProgressDone" />
    <FormSubmitButton place="delete" :isLoading="isLoading" @handleClick="deleteBook" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookEditSubmitButtons from './BookEditSubmitButtons.vue'
import ProgressBarDetails from '../progress/ProgressBarDetails.vue'
import BookProgressInput from './BookProgressInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'
import LoaderForComponent from '../loader/LoaderForComponent.vue'
import { useBookStore } from '@/stores/book-store'

const bookStore = useBookStore()

const { bookId } = defineProps(['bookId'])

const isLoading = ref(false)
const isProgressActive = ref(false)
const progress = ref(0)

const setActiveProgress = () => (isProgressActive.value = true)
const removeActiveProgress = () => (isProgressActive.value = false)

const submitData = () => {
  bookStore.updateCurrentBookProgress(progress.value, bookId)
  removeActiveProgress()
}

const setProgressDone = async () => {
  progress.value = 100
  await bookStore.updateCurrentBookProgress(100, bookId)
  getStoreData()
  // progress.value = 100
}

const deleteBook = () => {}

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    await bookStore.loadCurrentBook(bookId)

    progress.value = bookStore.currentBook.progress
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getStoreData()
})
</script>
