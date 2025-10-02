<template>
  <button
    :class="[
      'buttonWithIcon',
      { buttonWithIcon_addBook: name === 'addBook' },
      { buttonWithIcon_library: name === 'library' },
    ]"
  >
    <PlusIcon v-if="name === 'addBook'" class="plusIcon" />
    <LibraryIcon v-if="name === 'library'" class="libraryIcon" />
    <div class="buttonWithIcon__textBlock">
      <span
        :class="[
          'buttonWithIcon__text',
          { buttonWithIcon__text_addBook: name === 'addBook' },
          { buttonWithIcon__text_library: name === 'library' },
        ]"
        >{{ text }}</span
      >
      <span v-if="number" class="buttonWithIcon__number">{{ number }}</span>
    </div>
  </button>
</template>

<script setup>
import LibraryIcon from '../icon/LibraryIcon.vue'
import PlusIcon from '../icon/PlusIcon.vue'

const { name, text, number } = defineProps(['name', 'text', 'number'])
</script>

<style scoped>
.buttonWithIcon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--border-radius-s);
  padding: 22px;
}
.buttonWithIcon_addBook {
  background: var(--gradient-progress-green);
  box-shadow: var(--shadow-secondary);
  transition: 0.25s ease;
}
.buttonWithIcon_addBook:hover {
  box-shadow: var(--shadow-primary);
}
.buttonWithIcon_library {
  background: var(--white-primary);
  border: 1px solid var(--border-color-primary);
  box-shadow: var(--shadow-fourthly);
  backdrop-filter: blur(8px);
  transition: 0.25s ease;
}
.buttonWithIcon_library:hover {
  box-shadow: var(--shadow-primary);
}
.buttonWithIcon__textBlock {
  display: flex;
  align-items: center;
  gap: 8px;
}
.buttonWithIcon__text {
  font-family: 'Inter-Medium', sans-serif;
  font-size: 17px;
  line-height: 28px;
}
.buttonWithIcon__text_addBook {
  color: var(--white-primary);
}
.buttonWithIcon__text_library {
  color: var(--text-color-secondary);
}
.buttonWithIcon__number {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-s);
  background: var(--gray-fourthly);
  font-family: 'Inter-Medium', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-color-seventhly);
  padding: 3px 9px;
}
.plusIcon {
  width: 16px;
  height: 16px;
  color: var(--white-primary);
}
.libraryIcon {
  width: 16px;
  height: 16px;
  color: var(--text-color-secondary);
}
.buttonWithIcon:hover .plusIcon {
  animation: scale-medium 0.3s ease-in-out;
}
.buttonWithIcon:hover .libraryIcon {
  animation: scale-medium 0.3s ease-in-out;
}
</style>
