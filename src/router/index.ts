import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterView from '@/views/EnterView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import NewChatView from '@/views/NewChatView.vue'
import RoomView from '@/views/RoomView.vue'
import type { RouteLocationNormalized } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/enter',
      name: 'enter',
      component: EnterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/new-chat',
      name: 'new-chat',
      component: NewChatView
    },
    {
      path: '/room/:slug',
      name: 'room',
      component: RoomView
    }
  ]
})

router.beforeEach((to: RouteLocationNormalized) => {
  if (!['/enter', '/login', '/signup'].includes(to.path) && !localStorage.token) {
    return { name: 'enter' }
  }
})

export default router
