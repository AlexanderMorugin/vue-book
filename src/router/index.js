import { LOGIN_PATH, REGISTER_PATH } from '@/mock/routes'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: REGISTER_PATH,
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: LOGIN_PATH,
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: { layout: 'auth' },
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

export default router
