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
      return { data }
    }
  }

  // Получаем книги по статусам
  const loadStatusBooks = async (progressGreat, progressLess) => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .gte('progress', progressGreat)
      .lte('progress', progressLess)
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

  // Получаем книги пользователя по поиску
  const loadSearchBooks = async (entry) => {
    let { data: localUser } = await supabase.auth.getSession()

    let { data, error } = await supabase
      .from('books')
      .select()
      .eq('user_id', localUser.session.user.id)
      .or(`name.ilike.%${entry}%, author.ilike.%${entry}%`)
    if (error) console.log(error.message)
    if (data) {
      books.value = data
      subscribeEntries()
      return { data }
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
      if (data) {
        loadBooks()
      }
      subscribeEntries()
      // console.log(data)
      // return { data }
    }
  }

  const uploadFile = async (file) => {
    const fileName = Date.now() + '-' + file.name

    const { data: filePath, error } = await supabase.storage.from('files').upload(fileName, file)
    const { data: fileUrl } = supabase.storage.from('files').getPublicUrl(filePath.path)
    if (error) {
      console.log(error)
      return
    } else {
      return { file_path: filePath.path, file_url: fileUrl.publicUrl }
    }
  }

  const addBook = async (bookData) => {
    const dropedImageFromStorage = ref(null)

    // Если есть дропнутая картинка, грузим ее в сторадж
    if (bookData.dropedImage) {
      const { file_url } = await uploadFile(bookData.dropedImage)
      dropedImageFromStorage.value = file_url
    }

    // Если картинку загрузили через ссылку, то создаем книгу так
    if (bookData.image) {
      const { data, error } = await supabase
        .from('books')
        .insert({
          name: bookData.name,
          author: bookData.author,
          genre: bookData.genre,
          image: bookData.image,
          user_id: bookData.user_id,
          progress: bookData.progress,
          rating: bookData.rating,
        })
        .select()

      if (error) console.log(error.message)
      else return { data }
    }

    // Если картинку загрузили через драг ен дроп, то создаем книгу так
    if (bookData.dropedImage) {
      const { data, error } = await supabase
        .from('books')
        .insert({
          name: bookData.name,
          author: bookData.author,
          genre: bookData.genre,
          image: dropedImageFromStorage.value,
          user_id: bookData.user_id,
          progress: bookData.progress,
          rating: bookData.rating,
        })
        .select()

      if (error) console.log(error.message)
      else return { data }
    }

    // Если картинку никак не загрузили, то создаем книгу так
    if (!bookData.dropedImage && !bookData.image) {
      const { data, error } = await supabase
        .from('books')
        .insert({
          name: bookData.name,
          author: bookData.author,
          genre: bookData.genre,
          image: null,
          user_id: bookData.user_id,
          progress: bookData.progress,
          rating: bookData.rating,
        })
        .select()

      if (error) console.log(error.message)
      else return { data }
    }
  }

  const deleteBook = async (bookId) => {
    const { data, error } = await supabase.from('books').delete().eq('id', bookId)

    if (error) console.log(error.message)
    else console.log(data)
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
    loadStatusBooks,
    loadPlanedBooks,
    loadReadingBooks,
    loadDoneBooks,
    loadSearchBooks,
    addBook,
    loadCurrentBook,
    updateCurrentBookRating,
    updateCurrentBookProgress,
    deleteBook,
    uploadFile,
  }
})
