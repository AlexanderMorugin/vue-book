<template>
  <div
    :class="[
      'pageContainer',
      { pageContainer_home: width === 'home' },
      { pageContainer_wide: width === 'wide' },
      { pageContainer_normal: width === 'normal' },
      { pageContainer_narrow: width === 'narrow' },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const { width } = defineProps(['width'])
</script>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.pageContainer_home {
  max-width: 1216px;
  gap: 32px;
}
.pageContainer_wide {
  max-width: 1216px;
  gap: 32px;
}
.pageContainer_normal {
  max-width: 832px;
  gap: 32px;
}
.pageContainer_narrow {
  max-width: 608px;
  gap: 32px;
}

@media (max-width: 767px) {
  .pageContainer_home {
    gap: 0;
  }
}
</style>
