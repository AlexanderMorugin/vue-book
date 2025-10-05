<template>
  <div
    :class="[
      'logoBlock',
      { logoBlock_login: place === 'register' || place === 'login' || place === 'addBook' },
    ]"
  >
    <AppLogo :place="place" />
    <div>
      <component
        :is="place === 'addBook' ? 'h1' : 'div'"
        :class="[
          'logoBlock__title',
          {
            logoBlock__title_login:
              place === 'register' ||
              place === 'login' ||
              place === 'sidebar' ||
              place === 'addBook',
          },
          { logoBlock__title_addBook: place === 'addBook' },
        ]"
      >
        {{
          place === 'register' || place === 'login' || place === 'sidebar'
            ? 'Book Tracker'
            : place === 'addBook'
              ? 'Добавить новую книгу'
              : ''
        }}
      </component>
      <div
        :class="[
          'logoBlock__subtitle',
          { logoBlock__subtitle_login: place === 'register' || place === 'login' },
          { logoBlock__subtitle_addBook: place === 'addBook' },
        ]"
      >
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AppLogo from './AppLogo.vue'

const { place } = defineProps(['place'])

const subtitle = ref('Ваш читательский журнал')

const setSubtitle = () => {
  if (place === 'sidebar') subtitle.value = 'Ваш читательский журнал'
  if (place === 'register') subtitle.value = 'Начните свой читательский путь'
  if (place === 'login') subtitle.value = 'Ваш персональный трекер чтения'
  if (place === 'addBook') subtitle.value = 'Пополните свою библиотеку'
}

onMounted(() => setSubtitle())
</script>

<style scoped>
.logoBlock {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logoBlock__title {
  font-family: 'Inter_SemiBold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color-primary);
}
.logoBlock__title_login {
  font-size: 28px;
  line-height: 36px;
}
.logoBlock__title_addBook {
  font-size: 19px;
  line-height: 28px;
}
.logoBlock__subtitle {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color-secondary);
}
.logoBlock__subtitle_login {
  font-size: 17px;
  line-height: 28px;
}
.logoBlock__subtitle_addBook {
  font-size: 16px;
  line-height: 24px;
}

@media (max-width: 1023px) {
  .logoBlock {
    flex-direction: column;
  }
  .logoBlock_login {
    border-bottom: 1px solid var(--border-color-primary);
    padding-bottom: 20px;
  }
  .logoBlock__title {
    text-align: center;
  }
  .logoBlock__title_addBook {
    font-size: 28px;
    line-height: 36px;
  }
  .logoBlock__subtitle_addBook {
    font-size: 17px;
    line-height: 28px;
    text-align: center;
  }
}

@media (max-width: 379px) {
  .logoBlock {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
