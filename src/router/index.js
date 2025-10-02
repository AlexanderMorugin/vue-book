import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/config/supabase'
import {
  ADD_BOOK_PATH,
  BOOKS_PATH,
  CURRENT_BOOK_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from '@/mock/routes'
import { useUserStore } from '@/stores/user-store'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'main', requiresAuth: true },
  },
  {
    path: REGISTER_PATH,
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue'),
    meta: { layout: 'auth', requiresAuth: false },
  },
  {
    path: LOGIN_PATH,
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: { layout: 'auth', requiresAuth: false },
  },
  {
    path: BOOKS_PATH,
    name: 'BooksView',
    component: () => import('../views/books/BooksView.vue'),
    meta: { layout: 'main', requiresAuth: true },
  },
  {
    path: CURRENT_BOOK_PATH,
    name: 'CurrentBookView',
    component: () => import('../views/books/CurrentBookView.vue'),
    meta: { layout: 'main', requiresAuth: true },
  },
  {
    path: ADD_BOOK_PATH,
    name: 'AddBookView',
    component: () => import('../views/AddBookView.vue'),
    meta: { layout: 'main', requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

const getLocalUser = async (next) => {
  // во всем фронтенде делаем пользователя доступным по его сессии аутентификации
  const localUser = await supabase.auth.getSession()

  const userStore = useUserStore()

  // console.log('Router - getLocalUser: ', localUser.data.session.user)

  if (localUser.data.session == null) {
    next(LOGIN_PATH)
  } else {
    // на основании ID аутентифицированного пользователя, находим его уже в Database
    // и создаем его в сторе для дальнейшей работы
    await userStore.searchUserInDatabaseById(localUser)

    // console.log('databaseUser - ', databaseUser[0])
    // // создаем в сторе пользователя при перезагрузке страницы
    // userStore.setUserInStore(localUser)
    next()
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getLocalUser(next)
  } else next()
})

export default router
