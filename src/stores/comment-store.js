import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../config/supabase'

export const useCommentStore = defineStore('commentStore', () => {
  /* state */

  const comments = ref([])

  /* actions */

  const loadComments = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    console.log(localUser.session.user.id)

    let { data, error } = await supabase
      .from('comments')
      .select()
      .eq('user_id', localUser.session.user.id)
      .order('created_at', { ascending: false })
    // .limit(2)
    if (error) console.log(error.message)
    if (data) {
      // comments.value = data

      subscribeEntries()

      return { data }
    }
  }

  const loadCurrentBookComment = async (bookId) => {
    let { data, error } = await supabase.from('comments').select().eq('book_id', bookId)
    if (error) console.log(error.message)
    if (data) {
      subscribeEntries()
      return { data }
    }
  }

  const addComment = async (bookId, comment) => {
    let { data: localUser } = await supabase.auth.getSession()

    // console.log(localUser.session.user.id)
    const { error } = await supabase
      .from('comments')
      .insert([{ user_id: localUser.session.user.id, book_id: bookId, text: comment }])
      .select()
    if (error) console.log(error.message)
    else {
      // console.log(data)
      subscribeEntries()
    }
  }

  const subscribeEntries = async () => {
    supabase
      .channel('comments-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'comments' }, (payload) => {
        console.log('Change received!', payload)

        if (payload.eventType === 'INSERT') comments.value.push(payload.new)

        if (payload.eventType === 'DELETE') {
          const index = getCommentIndexById(payload.old.id)

          comments.value.splice(index, 1)
        }

        if (payload.eventType === 'UPDATE') {
          const index = getCommentIndexById(payload.new.id)

          Object.assign(comments.value[index], payload.new)
        }
      })
      .subscribe()
  }

  /* helpers */

  const getCommentIndexById = (entryId) => {
    return comments.value.findIndex((entry) => entry.id === entryId)
  }

  return {
    comments,
    loadComments,
    loadCurrentBookComment,
    addComment,
  }
})
