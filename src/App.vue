<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

export default {
  components: { MainLayout, AuthLayout },
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>

<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>
