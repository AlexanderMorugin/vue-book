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

  /* actions */

  // Получаем все книги пользователя
  const loadBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .order('created_at', { ascending: false })
    if (error) console.log(error.message)
    if (data) {
      books.value = data
      subscribeEntries()
    }
  }

  // Получаем запланированные книги пользователя
  const loadPlanedBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .eq('progress', 0)
    if (error) console.log(error.message)
    if (data) {
      plannedBooks.value = data
      subscribeEntries()
    }
  }

  // Получаем книги пользователя, которые читает
  const loadReadingBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .gt('progress', 0)
      .lt('progress', 100)
    if (error) console.log(error.message)
    if (data) {
      readingBooks.value = data
      subscribeEntries()
    }
  }

  // Получаем прочитанные книги пользователя
  const loadDoneBooks = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .eq('progress', 100)
    if (error) console.log(error.message)
    if (data) {
      doneBooks.value = data
      subscribeEntries()
    }
  }

  // Получаем по ID конкретную книгу пользователя
  const loadCurrentBook = async (bookId) => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .eq('id', bookId)
    if (error) console.log(error.message)
    if (data) {
      currentBook.value = data[0]
      subscribeEntries()
      return { data }
    }
  }

  // Обновляем рейтинг по ID конкретной книги пользователя
  const updateCurrentBookRating = async (rating, bookId) => {
    let { data: localUser } = await supabase.auth.getSession()

    const { data, error } = await supabase
      .from('books')
      .update({ rating: rating })
      .eq('user_id', localUser.session.user.id)
      .eq('id', bookId)
      .select()

    if (error) {
      console.log(error.message)
    } else {
      console.log('updateCurrentBookRating - ', data)
      subscribeEntries()
    }
  }

  // Обновляем прогресс по ID конкретной книги пользователя
  const updateCurrentBookProgress = async (progress, bookId) => {
    let { data: localUser } = await supabase.auth.getSession()

    const { data, error } = await supabase
      .from('books')
      .update({ progress: progress })
      .eq('user_id', localUser.session.user.id)
      .eq('id', bookId)
      .select()

    if (error) {
      console.log(error.message)
    } else {
      console.log('updateCurrentBookProgress - ', data)
      subscribeEntries()
    }
  }

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
    loadBooks,
    loadPlanedBooks,
    loadReadingBooks,
    loadDoneBooks,
    addBook,
    loadCurrentBook,
    updateCurrentBookRating,
    updateCurrentBookProgress,
  }
})
