import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../config/supabase'

export const useGenreStore = defineStore('genreStore', () => {
  /* state */

  const genres = ref([])
  const isGenresLoading = ref(false)

  /* actions */

  const loadGenres = async () => {
    isGenresLoading.value = false

    let { data, error } = await supabase.from('genres').select('*')

    if (error) console.log(error.message)

    if (data) {
      genres.value = data

      isGenresLoading.value = true
    }
  }

  return {
    genres,
    isGenresLoading,
    loadGenres,
  }
})
