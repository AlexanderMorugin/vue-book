<template>
  <div>
    <BookEditContainer>
      <BookEditTitle title="Прогресс по чтению" name="edit" @handleClick="setActiveProgress" />

      <component
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
import { ref } from 'vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookEditSubmitButtons from './BookEditSubmitButtons.vue'
import ProgressBarDetails from '../progress/ProgressBarDetails.vue'
import BookProgressInput from './BookProgressInput.vue'
import FormSubmitButton from '../form/FormSubmitButton.vue'

const isProgressActive = ref(false)
const progress = ref(65)

const setActiveProgress = () => (isProgressActive.value = true)
const removeActiveProgress = () => (isProgressActive.value = false)

const submitData = () => {
  console.log(progress.value)
  removeActiveProgress()
}

const setProgressDone = () => {
  progress.value = 100
}

const deleteBook = () => {}
</script>
