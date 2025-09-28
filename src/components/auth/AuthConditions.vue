<template>
  <div>
    <span class="authConditionsText">Создавая аккаунт, вы соглашаетесь с нашими </span>
    <router-link to="/" class="authConditionsLink">Условиями использования</router-link>
    <span class="authConditionsText"> и </span>
    <router-link to="/" class="authConditionsLink">Политикой конфиденциальности</router-link>
  </div>
</template>

<style scoped>
.authConditionsText {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 24px;
  color: var(--text-color-sixthly);
  text-align: center;
  vertical-align: bottom;
}
.authConditionsLink {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: var(--violet-secondary);
  transition: 0.25s ease;
}
.authConditionsLink:hover {
  color: var(--violet-thirdly);
}
</style>
