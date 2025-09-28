<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      class="form-input"
    />
    <span class="form-input-error">form-input-error</span>
    <FormClearButton />
  </div>
</template>

<script setup>
import FormClearButton from './FormClearButton.vue'

const { label, type, name, placeholder, value } = defineProps([
  'label',
  'type',
  'name',
  'placeholder',
  'value',
])
</script>
