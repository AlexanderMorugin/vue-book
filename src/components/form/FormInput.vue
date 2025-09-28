<template>
  <div class="form-field">
    <label :for="name" class="form-label">{{ label }}</label>
    <input :type="type" :id="name" :name="name" :placeholder="placeholder" class="form-input" />
    <span class="form-input-error">form-input-error</span>
  </div>
</template>

<script setup>
const { label, type, name, placeholder } = defineProps(['label', 'type', 'name', 'placeholder'])
</script>
