<template>
  <SideBarContainer padding="slim" line="bottom">
    <div class="sideBarAuth">
      <div class="sideBarAuth__profile">
        <div class="sideBarAuth__userIconBox">
          <ProfileIcon class="profileIcon" />
        </div>
        <div class="sideBarAuth__userNameBox">
          <span class="sideBarAuth__name">{{ userStore.user.name }}</span>
          <span class="sideBarAuth__email">{{ userStore.user.email }}</span>
        </div>
      </div>
      <button class="sideBarAuth__logoutButton" @click="handleLogout">
        <LogoutIcon class="logoutIcon" />
      </button>
    </div>
  </SideBarContainer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import LogoutIcon from '../icon/LogoutIcon.vue'
import ProfileIcon from '../icon/ProfileIcon.vue'
import SideBarContainer from './SideBarContainer.vue'
import { useUserStore } from '@/stores/user-store'
import { LOGIN_PATH } from '@/mock/routes'

const userStore = useUserStore()
const router = useRouter()

const handleLogout = () => {
  userStore.logout()
  router.push(LOGIN_PATH)
}
</script>

<style scoped>
.sideBarAuth {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background: var(--gray-primary);
  border-radius: var(--border-radius-l);
  padding: 12px;
}
.sideBarAuth__profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sideBarAuth__userIconBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-full);
  background: var(--gradient-user-icon-box);
}
.sideBarAuth__userNameBox {
  display: flex;
  flex-direction: column;
}
.sideBarAuth__name {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-color-primary);
}
.sideBarAuth__email {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-secondary);
}
.sideBarAuth__logoutButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.profileIcon {
  color: var(--white-primary);
}
.logoutIcon {
  color: var(--gray-secondary);
  transition: 0.25s ease;
}
.sideBarAuth__logoutButton:hover .logoutIcon {
  color: var(--text-color-primary);
  animation: scale 0.3s ease-in-out;
}
</style>
