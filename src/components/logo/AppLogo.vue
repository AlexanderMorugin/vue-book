<template>
  <div
    :class="[
      'logoBox',
      { logoBox_register: place === 'register' },
      { logoBox_login: place === 'login' },
      { logoBox_addBook: place === 'addBook' },
      { logoBox_progressYear: place === 'progressYear' },
    ]"
  >
    <ProgressYearIcon
      v-if="place === 'progressYear'"
      :class="['logoIcon', { logoIcon_progressYearIcon: place === 'progressYear' }]"
    />

    <LogoIcon
      v-else
      :class="[
        'logoIcon',
        { logoIcon_register: place === 'register' },
        { logoIcon_login: place === 'login' },
        { logoIcon_addBook: place === 'addBook' },
      ]"
    />
  </div>
</template>

<script setup>
import LogoIcon from '../icon/LogoIcon.vue'
import ProgressYearIcon from '../icon/ProgressYearIcon.vue'

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
.logoBox_addBook {
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-m);
  background: var(--green-primary);
}
.logoBox_progressYear {
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-m);
  background: var(--violet-primary);
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
.logoIcon_addBook {
  width: 20px;
  height: 20px;
  color: var(--green-secondary);
}
.logoIcon_progressYearIcon {
  width: 20px;
  height: 20px;
  color: var(--violet-secondary);
}

@media (max-width: 1023px) {
  .logoBox_addBook {
    width: 56px;
    height: 56px;
  }
  .logoBox_progressYear {
    width: 56px;
    height: 56px;
  }
  .logoIcon_addBook {
    width: 32px;
    height: 32px;
  }
  .logoIcon_progressYearIcon {
    width: 32px;
    height: 32px;
  }
}
</style>
