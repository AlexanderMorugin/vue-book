<template>
  <AuthPromoContainer>
    <AppLogoBlock :place="place" v-if="!isScreenLarge" />
    <AuthPromoText :title="details.title" :text="details.text" />
    <AuthList />
    <AuthPromoImage :place="place" :image="details.image" :title="details.title" />
  </AuthPromoContainer>
</template>

<script setup>
import { ref } from 'vue'
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import AuthPromoContainer from './AuthPromoContainer.vue'
import AuthPromoImage from './AuthPromoImage.vue'
import AuthPromoText from './AuthPromoText.vue'
import AuthList from './AuthList.vue'
import { useResizeLarge } from '@/composables/useResizeLarge'

const { isScreenLarge } = useResizeLarge()

const { place } = defineProps(['place'])

const details = ref({
  title: 'Присоединяйтесь к сообществу читателей',
  text: 'Создайте свой персональный трекер книг и начните организовывать свою библиотеку уже сегодня. Ставьте цели и достигайте их!',
  image: '/images/img-auth-promo.webp',
})
</script>
