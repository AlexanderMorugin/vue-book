<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

export default {
  components: { MainLayout },
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
