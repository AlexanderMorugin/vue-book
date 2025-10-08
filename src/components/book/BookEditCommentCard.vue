<template>
  <BookEditContainer>
    <BookEditTitle title="Заметки" name="edit" @handleClick="setActiveComment" />

    <component
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
import { ref } from 'vue'
import BookComment from './BookComment.vue'
import BookEditContainer from './BookEditContainer.vue'
import BookEditTitle from './BookEditTitle.vue'
import BookCommentTextArea from './BookCommentTextArea.vue'
import BookEditSubmitButtons from './BookEditSubmitButtons.vue'
import { useCommentStore } from '@/stores/comment-store'

const commentStore = useCommentStore()

const { bookId } = defineProps(['bookId'])

const isCommentActive = ref(false)
const comment = ref('Очень нравятся философские размышления о параллельных жизнях.')

const setActiveComment = () => (isCommentActive.value = true)
const removeActiveComment = () => (isCommentActive.value = false)

const submitData = async () => {
  // собираем дату для отправки
  // const commentData = {
  //   text: comment.value,
  //   book_id: bookId,
  // }
  // console.log(commentData)

  await commentStore.addComment(bookId, comment.value)
  await commentStore.loadComments()

  removeActiveComment()
}
</script>
