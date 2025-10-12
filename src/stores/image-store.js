import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../config/supabase'

export const useImageStore = defineStore('imageStore', () => {
  /* state */

  const images = ref([])

  /* actions */

  const uploadFile = async (file) => {
    console.log(file)

    const { data, error } = await supabase.storage.from('books').upload('file_path', file)

    if (error) console.log(error)
    else console.log(data)
  }

  return {
    images,
    uploadFile,
  }
})
