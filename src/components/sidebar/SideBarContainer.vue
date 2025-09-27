<template>
  <div
    :class="[
      'sideBarContainer',
      { sideBarContainer_wide: padding === 'wide' },
      { sideBarContainer_slim: padding === 'slim' },
      { sideBarContainer_top: line === 'top' },
      { sideBarContainer_bottom: line === 'bottom' },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const { padding, line } = defineProps(['padding', 'line'])
</script>

<style scoped>
.sideBarContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sideBarContainer_wide {
  padding: 24px;
}
.sideBarContainer_slim {
  padding: 24px;
}
.sideBarContainer_top {
  border-top: 1px solid var(--border-color-primary);
}
.sideBarContainer_bottom {
  border-bottom: 1px solid var(--border-color-primary);
}
</style>
