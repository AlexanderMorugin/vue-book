<template>
  <BookEditContainer>
    <BookEditTitle title="Заметки" name="edit" @handleClick="setActiveComment" />

    <LoaderForComponent v-if="isLoading" />
    <component
      v-else
      :is="isCommentActive ? BookCommentTextArea : BookComment"
      v-model:value="comment"
      :comment="comment"
    />

    <BookEditSubmitButtons
      v-if="isCommentActive"
      @submitData="submitData"
      @handleCancel="removeActiveComment"
    />
  </BookEditContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookComment from './BookComment.vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookCommentTextArea from './BookCommentTextArea.vue'
import BookEditSubmitButtons from './BookEditSubmitButtons.vue'
import { useCommentStore } from '@/stores/comment-store'
import LoaderForComponent from '../loader/LoaderForComponent.vue'

const commentStore = useCommentStore()

const { bookId } = defineProps(['bookId'])

const isLoading = ref(false)
const isCommentActive = ref(false)
const comment = ref('')

const setActiveComment = () => (isCommentActive.value = true)
const removeActiveComment = () => (isCommentActive.value = false)

const submitData = async () => {
  isLoading.value = false
  try {
    isLoading.value = true
    await commentStore.addComment(bookId, comment.value)
    removeActiveComment()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

async function getStoreData() {
  isLoading.value = false
  try {
    isLoading.value = true
    const { data } = await commentStore.loadCurrentBookComment(bookId)

    // console.log(data[0].text)
    comment.value = data[0]?.text ? data[0].text : 'Вы еще ничего не писали здесь.'
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
