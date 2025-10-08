import { ref } from 'vue'
import { defineStore } from 'pinia'

import { supabase } from '../config/supabase'

export const useBookStore = defineStore('bookStore', () => {
  /* state */

  const books = ref([])
  const plannedBooks = ref([])
  const readingBooks = ref([])
  const doneBooks = ref([])
  const currentBook = ref(null)
  const currentBookRating = ref(0)
  const isBookLoading = ref(false)
  const isCurrentBookLoading = ref(false)

  /* actions */

  // Получаем все книги пользователя
  const loadBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    isBookLoading.value = false
    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
    if (error) console.log(error.message)
    if (data) {
      books.value = data
      isBookLoading.value = true
      subscribeEntries()
    }
  }

  // Получаем запланированные книги пользователя
  const loadPlanedBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    isBookLoading.value = false
    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .eq('progress', 0)
    if (error) console.log(error.message)
    if (data) {
      plannedBooks.value = data
      isBookLoading.value = true
      subscribeEntries()
    }
  }

  // Получаем книги пользователя, которые читает
  const loadReadingBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    isBookLoading.value = false
    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .gt('progress', 0)
      .lt('progress', 100)
    if (error) console.log(error.message)
    if (data) {
      readingBooks.value = data
      isBookLoading.value = true
      subscribeEntries()
    }
  }

  // Получаем прочитанные книги пользователя
  const loadDoneBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    isBookLoading.value = false
    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .eq('progress', 100)
    if (error) console.log(error.message)
    if (data) {
      doneBooks.value = data
      isBookLoading.value = true
      subscribeEntries()
    }
  }

  // Получаем по ID конкретную книги пользователя
  const loadCurrentBook = async (bookId) => {
    isCurrentBookLoading.value = false

    try {
      let { data: localUser } = await supabase.auth.getSession()

      isCurrentBookLoading.value = true
      let { data, error } = await supabase
        .from('books')
        .select()
        .eq('user_id', localUser.session.user.id)
        .eq('id', bookId)
      if (error) console.log(error.message)
      if (data) {
        currentBook.value = data[0]
        subscribeEntries()
      }
    } catch (err) {
      console.log(err.message)
    } finally {
      isCurrentBookLoading.value = false
    }
  }

  // Получаем рейтинг по ID конкретной книги пользователя
  // const getCurrentBookRating = async (bookId) => {
  //   try {
  //     let { data: localUser } = await supabase.auth.getSession()

  //     isCurrentBookLoading.value = true
  //     let { data, error } = await supabase
  //       .from('books')
  //       .select()
  //       .eq('user_id', localUser.session.user.id)
  //       .eq('id', bookId)
  //     if (error) console.log(error.message)
  //     if (data) {
  //       console.log(data[0].rating)

  //       subscribeEntries()
  //     }
  //   } catch (err) {
  //     console.log(err.message)
  //   } finally {
  //     isCurrentBookLoading.value = false
  //   }
  // }

  // Обновляем рейтинг по ID конкретной книги пользователя
  const updateCurrentBookRating = async (rating, bookId) => {
    const { data, error } = await supabase
      .from('books')
      .update({ rating: rating })
      .eq('id', bookId)
      .select()

    if (error) {
      console.log(error.message)
    } else {
      console.log('data = ', data)
      // Realtime function
      subscribeEntries()
    }
  }
  // const updateCurrentBookRating = async (rating, bookId) => {
  //   const { data, error } = await supabase
  //     .from('books')
  //     .upsert({ id: `${bookId}`, rating: rating })
  //     .select()

  //   if (error) {
  //     console.log(error.message)
  //   } else {
  //     console.log('data = ', data)
  //     // Realtime function
  //     subscribeEntries()
  //   }
  // }

  const subscribeEntries = async () => {
    supabase
      .channel('books-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'books' }, (payload) => {
        console.log('Change received!', payload)

        if (payload.eventType === 'INSERT') books.value.push(payload.new)

        if (payload.eventType === 'UPDATE') {
          const index = getBookIndexById(payload.new.id)

          Object.assign(books.value[index], payload.new)
        }
      })
      .subscribe()
  }

  // const subscribeEntries = async () => {
  //   supabase
  //     .channel('books-channel')
  //     .on('postgres_changes', { event: '*', schema: 'public', table: 'books' }, (payload) => {
  //       console.log('Change received!', payload)

  //       if (payload.eventType === 'INSERT') books.value.push(payload.new)

  //       if (payload.eventType === 'DELETE') {
  //         const index = getBookIndexById(payload.old.id)

  //         books.value.splice(index, 1)
  //       }

  //       if (payload.eventType === 'UPDATE') {
  //         const index = getBookIndexById(payload.new.id)

  //         Object.assign(books.value[index], payload.new)
  //       }
  //     })
  //     .subscribe()
  // }

  const addBook = async (bookData) => {
    const { data, error } = await supabase.from('books').insert([bookData]).select()
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

  return {
    books,
    plannedBooks,
    readingBooks,
    doneBooks,
    currentBook,
    currentBookRating,
    isBookLoading,
    isCurrentBookLoading,
    loadBooks,
    loadPlanedBooks,
    loadReadingBooks,
    loadDoneBooks,
    subscribeEntries,
    addBook,
    loadCurrentBook,
    // getCurrentBookRating,
    updateCurrentBookRating,
  }
})
