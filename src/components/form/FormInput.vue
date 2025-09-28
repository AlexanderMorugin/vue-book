<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      v-if="lastInput"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="form-input"
    />
    <input
      v-else
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @change="updateValue"
      class="form-input"
    />

    <TransitionGroup name="list" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </TransitionGroup>

    <FormClearButton v-if="value" @click="$emit('clearInput')" />
  </div>
</template>

<script setup>
import FormClearButton from './FormClearButton.vue'

const { label, type, name, placeholder, value, error, lastInput } = defineProps([
  'label',
  'type',
  'name',
  'placeholder',
  'value',
  'error',
  'lastInput',
])

const emit = defineEmits(['update:value', 'clearInput'])

const updateValue = (e) => emit('update:value', e.target.value)
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
