<template>
  <AuthPromoContainer>
    <AppLogoBlock :place="place" v-if="!isScreenLarge" />
    <AuthPromoText :title="details.title" :text="details.text" />
    <AuthPromoImage :place="place" :image="details.image" :title="details.title" />
  </AuthPromoContainer>
</template>

<script setup>
import { ref } from 'vue'
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import AuthPromoContainer from './AuthPromoContainer.vue'
import AuthPromoImage from './AuthPromoImage.vue'
import AuthPromoText from './AuthPromoText.vue'
import { useResizeLarge } from '@/composables/useResizeLarge'

const { isScreenLarge } = useResizeLarge()

const { place } = defineProps(['place'])

const details = ref({
  title: 'Отслеживайте свои книги',
  text: 'Организуйте свою библиотеку, ставьте цели чтения и следите за прогрессом. Создайте идеальную систему для управления вашими книгами.',
  image: '/images/img-auth-promo.webp',
})
</script>
