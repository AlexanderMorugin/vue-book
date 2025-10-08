import { ref } from 'vue'
import { defineStore } from 'pinia'

import { supabase } from '../config/supabase'

export const useCommentStore = defineStore('commentStore', () => {
  /* state */

  const comments = ref([])
  const isLoading = ref(false)

  /* actions */

  const loadComments = async () => {
    let { data: localUser } = await supabase.auth.getSession()

    console.log(localUser.session.user.id)

    // isLoading.value = false
    // let { data, error } = await supabase
    //   .from('comments')
    //   .select()
    //   .eq('user_id', localUser.session.user.id)
    // if (error) console.log(error.message)
    // if (data) {
    //   console.log(data)
    //   comments.value = data
    //   isLoading.value = true
    //   subscribeEntries()
    // }
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

  const addComment = async (bookId, comment) => {
    let { data: localUser } = await supabase.auth.getSession()

    console.log(localUser.session.user.id)
    const { data, error } = await supabase
      .from('comments')
      .insert([{ user_id: localUser.session.user.id, book_id: bookId, text: comment }])
      .select()
    if (error) console.log(error.message)
    else {
      console.log(data)
      subscribeEntries()
    }
  }

  /* helpers */

  const getCommentIndexById = (entryId) => {
    return comments.value.findIndex((entry) => entry.id === entryId)
  }

  return {
    comments,
    isLoading,
    loadComments,
    addComment,
    subscribeEntries,
    getCommentIndexById,
  }
})
