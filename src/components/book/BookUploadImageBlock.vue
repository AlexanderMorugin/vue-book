<template>
  <div class="bookUploadImageBlock">
    <div class="bookUploadImageBlock__container">
      <BookUploadImageButton />
      <span class="bookUploadImageBlock__title">Загрузить обложку книги</span>
      <span class="bookUploadImageBlock__subtitle"
        >Перетащите файл или нажмите для выбора • Макс. 5МБ</span
      >
    </div>

    <span class="bookUploadImageBlock__subtitle"
      >Загрузите файл изображения, вставьте ссылку или используйте кнопку "Найти"</span
    >
  </div>
</template>

<script setup>
import BookUploadImageButton from './BookUploadImageButton.vue'
</script>

<style scoped>
.bookUploadImageBlock {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bookUploadImageBlock__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--white-primary);
  border-radius: var(--border-radius-m);
  border: 2px dashed var(--gray-seventhly);
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
</style>
