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

const isCommentActive = ref(false)
const comment = ref('Очень нравятся философские размышления о параллельных жизнях.')

const setActiveComment = () => (isCommentActive.value = true)
const removeActiveComment = () => (isCommentActive.value = false)

const submitData = () => {
  console.log(comment.value)
  removeActiveComment()
}
</script>
