<template>
  <div class="form-field">
    <!-- Инпут для поиска книги, без валидации -->
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="form-search-input"
    />
    <FormClearButton v-if="value" place="search" @click="$emit('clearInput')" />
  </div>
</template>

<script setup>
import FormClearButton from './FormClearButton.vue'

const { type, name, placeholder, value } = defineProps(['type', 'name', 'placeholder', 'value'])

const emit = defineEmits(['update:value', 'clearInput'])

const updateValue = (e) => emit('update:value', e.target.value)
</script>
