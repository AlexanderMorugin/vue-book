import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/config/supabase'
import { LOGIN_PATH, REGISTER_PATH } from '@/mock/routes'
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
  const localUser = await supabase.auth.getSession()
  const userStore = useUserStore()

  if (localUser.data.session == null) {
    next(LOGIN_PATH)
  } else {
    // создаем в сторе пользователя при перезагрузке страницы
    userStore.setUserInStore(localUser)
    next()
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getLocalUser(next)
  } else next()
})

export default router
