<template>
  <button
    @click="emit('handleClick')"
    :class="[
      'formSubmitButton',
      { formSubmitButton_register: place === 'register' },
      { formSubmitButton_registerActive: place === 'register' && !isFromEmpty && !isValid },
      { formSubmitButton_login: place === 'login' },
      { formSubmitButton_loginActive: place === 'login' && !isFromEmpty && !isValid },
      { formSubmitButton_book: place === 'book' },
    ]"
  >
    <LoaderForButton v-if="isLoading" />

    <div v-else class="formSubmitButton__content">
      <RegisterIcon v-if="place === 'register'" class="authIcon" />
      <LoginIcon v-if="place === 'login'" class="authIcon" />
      <DoneIcon v-if="place === 'book'" class="doneIcon" />
      <span class="formSubmitButton__text">
        {{
          place === 'register'
            ? 'Создать аккаунт'
            : place === 'login'
              ? 'Войти'
              : place === 'book'
                ? 'Прочитано'
                : ''
        }}
      </span>
    </div>
  </button>
</template>

<script setup>
import DoneIcon from '../icon/DoneIcon.vue'
import LoginIcon from '../icon/LoginIcon.vue'
import RegisterIcon from '../icon/RegisterIcon.vue'
import LoaderForButton from '../loader/LoaderForButton.vue'

const { place, isFromEmpty, isValid, isLoading } = defineProps([
  'place',
  'isFromEmpty',
  'isValid',
  'isLoading',
])

const emit = defineEmits(['handleClick'])
</script>

<style scoped>
.formSubmitButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: var(--border-radius-s);
  box-shadow: var(--shadow-secondary);
}
.formSubmitButton_register {
  background: var(--gradient-form-register);
  opacity: 0.5;
}
.formSubmitButton_registerActive {
  cursor: pointer;
  opacity: 1;
  animation: shine 3s infinite;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from var(--violet-thirdly),
    color-stop(0.5, var(--violet-secondary)),
    to var(--violet-thirdly)
  );
  background-image: -webkit-linear-gradient(
    left,
    var(--violet-thirdly) 0%,
    var(--violet-secondary) 50%,
    var(--violet-thirdly) 100%
  );
}
.formSubmitButton_login {
  background: var(--gradient-form-login);
  opacity: 0.5;
}
.formSubmitButton_loginActive {
  cursor: pointer;
  opacity: 1;
  animation: shine 3s infinite;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from var(--green-thirdly),
    color-stop(0.5, var(--green-secondary)),
    to var(--green-thirdly)
  );
  background-image: -webkit-linear-gradient(
    left,
    var(--green-thirdly) 0%,
    var(--green-secondary) 50%,
    var(--green-thirdly) 100%
  );
}
.formSubmitButton__content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
}
.formSubmitButton__text {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--white-primary);
}
.authIcon {
  color: var(--white-primary);
}
.formSubmitButton_registerActive:hover .authIcon {
  animation: scale 0.3s ease-in-out;
}
.formSubmitButton_loginActive:hover .authIcon {
  animation: scale 0.3s ease-in-out;
}
.formSubmitButton_book {
  background: var(--gradient-progress-done-green);
  margin-top: 32px;
}
.formSubmitButton_book {
  background: var(--gradient-progress-done-green);
  margin-top: 32px;
  transition: 0.25s ease;
}
.doneIcon {
  color: var(--white-primary);
}
.formSubmitButton_book:hover {
  background: var(--gradient-progress-green);
}
.formSubmitButton_book:hover .doneIcon {
  animation: scale 0.3s ease-in-out;
}
</style>
