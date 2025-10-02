<template>
  <div
    :class="[
      'logoBox',
      { logoBox_register: place === 'register' },
      { logoBox_login: place === 'login' },
    ]"
  >
    <LogoIcon
      :class="[
        'logoIcon',
        { logoIcon_register: place === 'register' },
        { logoIcon_login: place === 'login' },
      ]"
    />
  </div>
</template>

<script setup>
import LogoIcon from '../icon/LogoIcon.vue'

const { place } = defineProps(['place'])
</script>

<style scoped>
.logoBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-l);
  background: var(--gradient-logo-primary);
}
.logoBox_register {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-xl);
  background: var(--violet-primary);
}
.logoBox_login {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-xl);
  background: var(--green-primary);
}
.logoIcon {
  width: 24px;
  height: 24px;
  color: var(--white-primary);
}
.logoIcon_register {
  width: 32px;
  height: 32px;
  color: var(--violet-secondary);
}
.logoIcon_login {
  width: 32px;
  height: 32px;
  color: var(--green-secondary);
}
</style>
