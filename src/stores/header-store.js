import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
  /* state */

  const headerTitle = ref(null)

  /* actions */

  const setHeaderTitle = (headerData) => {
    headerTitle.value = headerData
  }

  return {
    headerTitle,
    setHeaderTitle,
  }
})
