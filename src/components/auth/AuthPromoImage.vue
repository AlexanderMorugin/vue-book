<template>
  <div
    :class="[
      'authPromoImage',
      { authPromoImage_register: place === 'register' },
      { authPromoImage_login: place === 'login' },
    ]"
  >
    <img
      :src="image"
      :alt="title"
      :class="[
        'authPromoImage__picture',
        { authPromoImage__picture_register: place === 'register' },
        { authPromoImage__picture_login: place === 'login' },
      ]"
    />
    <div
      :class="[
        'authPromoImage__mask',
        { authPromoImage__mask_register: place === 'register' },
        { authPromoImage__mask_login: place === 'login' },
      ]"
    />
  </div>
</template>

<script setup>
const { place, image, title } = defineProps(['place', 'image', 'title'])
</script>

<style scoped>
.authPromoImage {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
}
.authPromoImage_register {
  height: 320px;
}
.authPromoImage_login {
  height: 384px;
}
.authPromoImage__picture {
  display: block;
}
.authPromoImage__picture_register {
  width: 100%;
}
.authPromoImage__picture_login {
  height: 100%;
}
.authPromoImage__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.authPromoImage__mask_register {
  background: linear-gradient(0deg, rgba(89, 22, 139, 0.2) 0%, rgba(89, 22, 139, 0) 100%);
}
.authPromoImage__mask_login {
  background: linear-gradient(0deg, rgba(11, 79, 74, 0.2) 0%, rgba(11, 79, 74, 0) 100%);
}
</style>
