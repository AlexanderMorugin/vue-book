<template>
  <button
    :class="[
      'formSubmitButton',
      { formSubmitButton_register: place === 'register' },
      { formSubmitButton_login: place === 'login' },
    ]"
  >
    <RegisterIcon v-if="place === 'register'" class="authIcon" />
    <LoginIcon v-if="place === 'login'" class="authIcon" />
    <span class="formSubmitButton__text">Создать аккаунт</span>
  </button>
</template>

<script setup>
import LoginIcon from '../icon/LoginIcon.vue'
import RegisterIcon from '../icon/RegisterIcon.vue'

const { place } = defineProps(['place'])
</script>

<style scoped>
.formSubmitButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  box-shadow: var(--shadow-secondary);
  cursor: pointer;
}
.formSubmitButton_register {
  background: var(--gradient-form-register);
}
.formSubmitButton_register:hover {
  animation: shine 3s ease;
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
}
.formSubmitButton_login:hover {
  animation: shine 3s ease;
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
.authIcon {
  color: var(--white-primary);
}
.formSubmitButton__text {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--white-primary);
}

@keyframes shine {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}
</style>
