<template>
  <div class="form-field">
    <span class="form-label">{{ label }}</span>

    <div class="form-field" ref="dropDown">
      <div class="form-input dropdown-selected-option" @click="isDropDownVisible = true">
        <span>{{ mappedSelectedOption }}</span>
        <ArrowDropIcon :class="['arrowDropIcon', { arrowDropIcon_active: isDropDownVisible }]" />
      </div>
      <transition name="slide-fade">
        <ul v-if="isDropDownVisible">
          <li
            v-for="option in options"
            :key="option.id"
            class="option"
            @click="toggleOptionSelect(option)"
          >
            {{ option.name || option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ArrowDropIcon from '../icon/ArrowDropIcon.vue'

const { label, options } = defineProps(['label', 'options'])
const emit = defineEmits(['update:value'])

const dropDown = ref(null)
const selectedOption = ref(null)
const isDropDownVisible = ref(false)

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.name || selectedOption.value?.value || 'Выберите жанр'
})

const toggleOptionSelect = (option) => {
  selectedOption.value = option
  emit('update:value', option)
  isDropDownVisible.value = false
}

const closeDropDown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropDownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
})
</script>

<style scoped>
.dropdown-selected-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color-fifthly);
  border-radius: var(--border-radius-s);
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.25s ease;
}
.arrowDropIcon {
  width: 16px;
  height: 16px;
  color: var(--text-color-fifthly);
  opacity: 0.5;
  transition: 0.5s;
}
.arrowDropIcon_active {
  transform: rotate(180deg);
}
.dropdown-selected-option:hover {
  background: var(--violet-primary);
  color: var(--text-color-secondary);
}
.dropdown-selected-option:hover .arrowDropIcon {
  opacity: 1;
  color: var(--text-color-secondary);
}
.option {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: var(--text-color-primary);
  padding: 16px;
  border: 1px solid var(--border-color-primary);
  cursor: pointer;
}
.option:hover {
  background: var(--violet-primary);
}
.option:first-of-type {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
