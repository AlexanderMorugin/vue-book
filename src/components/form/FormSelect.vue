<template>
  <div class="dropdown-wrapper" ref="dropDown">
    <div class="dropdown-selected-option" @click="isDropDownVisible = true">
      {{ mappedSelectedOption }}
    </div>
    <!-- <transition name="slide-fade"> -->
    <div v-if="isDropDownVisible" class="options-wrapper">
      <div
        v-for="option in options"
        :key="option.id"
        class="option"
        @click="toggleOptionSelect(option)"
      >
        {{ option.name || option }}
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const { options } = defineProps(['options'])
const emit = defineEmits(['update:value'])

const dropDown = ref(null)
const selectedOption = ref(null)
const isDropDownVisible = ref(false)

const mappedSelectedOption = computed(() => {
  return selectedOption.value?.name || selectedOption.value?.value || 'Please select something'
})

const toggleOptionSelect = (option) => {
  selectedOption.value = option
  emit('update:value', option)
  // setTimeout(() => {
  isDropDownVisible.value = false
  // }, 300)
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
.dropdown-wrapper {
  padding: 16px;
  cursor: pointer;
  max-width: 200px;
  margin: 0 auto;
}
.dropdown-selected-option {
  padding: 16px;
  border: 1px solid #313131;
  border-radius: 8px;
  margin-bottom: 4px;
}
.options-wrapper {
}
.option {
  padding: 16px;
  border: 1px solid #313131;
}
.option:hover {
  background: #c5c5c5;
}
.option:last-of-type {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
