<template>
  <aside class="side-bar">
    <div>
      <SideBarContainer padding="wide" line="bottom">
        <AppLogoBlock place="sidebar" />
      </SideBarContainer>

      <SideBarContainer padding="slim" line="bottom">
        <div>profile</div>
      </SideBarContainer>

      <SideBarContainer padding="slim">
        <div>menu</div>
      </SideBarContainer>

      <SideBarContainer padding="slim">
        <div>target</div>
      </SideBarContainer>

      <SideBarContainer padding="slim">
        <div>now reading</div>
      </SideBarContainer>
    </div>

    <SideBarContainer padding="slim" line="top">
      <div>counter</div>
    </SideBarContainer>
  </aside>
</template>

<script setup>
import AppLogoBlock from '../logo/AppLogoBlock.vue'
import SideBarContainer from './SideBarContainer.vue'
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  min-height: 100vh;
  background: var(--bg-color-primary);
  border-right: 1px solid var(--border-color-primary);
}
</style>
