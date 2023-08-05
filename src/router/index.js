import { createRouter, createWebHistory } from 'vue-router'

import PlaceView from '../views/PlaceView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PlaceView
  },
  {
    path:'/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/signup',
    name: 'signup',
    component: SignUpView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
