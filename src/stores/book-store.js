import { ref } from 'vue'
import { defineStore } from 'pinia'

import { supabase } from '../config/supabase'

export const useBookStore = defineStore('bookStore', () => {
  /* state */

  const books = ref([])
  const isBookLoading = ref(false)

  /* actions */

  const loadBooks = async () => {
    isBookLoading.value = false

    let { data, error } = await supabase
      .from('books') // название таблицы
      .select(
        `*, users (
        *
      )`,
      )
      .order('order', { ascending: true }) // сортировка
    // .eq('name', 'Гордость и предубеждение') // поиск

    if (error) console.log(error.message)

    if (data) {
      books.value = data

      isBookLoading.value = true

      subscribeEntries()
    }

    console.log(data)
  }

  const subscribeEntries = async () => {
    supabase
      .channel('books-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'books' }, (payload) => {
        console.log('Change received!', payload)

        if (payload.eventType === 'INSERT') books.value.push(payload.new)

        if (payload.eventType === 'DELETE') {
          const index = getBookIndexById(payload.old.id)

          books.value.splice(index, 1)
        }

        if (payload.eventType === 'UPDATE') {
          const index = getBookIndexById(payload.new.id)

          Object.assign(books.value[index], payload.new)
        }
      })
      .subscribe()
  }

  const addBook = async (formData, userId) => {
    // console.log(formData)
    const newEntry = Object.assign({}, formData, {
      user_id: userId,
      progress: null,
      comment: null,
      rating: null,
    })
    const { data, error } = await supabase.from('books').insert([newEntry]).select()
    if (error) console.log(error.message)
    else console.log(data)
  }

  // const deleteEntry = async (entryId) => {
  //   console.log(entryId);
  //   const index = getEntryIndexById(entryId);

  //   const { error } = await supabase.from("entries").delete().eq("id", entryId);

  //   if (error) console.log(error.message);
  // };

  // const updateEntry = async (entryId, updates) => {
  //   console.log(entryId);
  //   console.log(updates);

  //   const { error } = await supabase
  //     .from("entries")
  //     .update(updates)
  //     .eq("id", entryId)
  //     .select();

  //   if (error) console.log(error.message);
  // };

  /* helpers */

  const getBookIndexById = (entryId) => {
    return books.value.findIndex((entry) => entry.id === entryId)
  }

  // const generateOrderNumber = () => {
  //   const orderNumbers = books.value.map((item) => item.order)

  //   const newOrderNumber = orderNumbers.length ? Math.max(...orderNumbers) + 1 : 1

  //   return newOrderNumber
  // }

  return {
    books,
    isBookLoading,
    loadBooks,
    subscribeEntries,
    addBook,
    // deleteEntry,
    // updateEntry,
  }
})
