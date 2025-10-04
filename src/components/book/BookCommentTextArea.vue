<template>
  <textarea class="bookCommentTextArea" :value="value" @input="updateValue" />
</template>

<script setup>
const { value } = defineProps(['value'])

const emit = defineEmits(['update:value'])

const updateValue = (e) => emit('update:value', e.target.value)
</script>

<style scoped>
.bookCommentTextArea {
  min-height: 100px;
  border-radius: var(--border-radius-s);
  background: var(--blue-thirdly);
  padding: 9px 13px;
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-eighthly);
  border: 1px solid transparent;
}
.bookCommentTextArea:focus {
  outline: 0;
  border: 1px solid transparent;
}
</style>
