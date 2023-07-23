import { createRouter, createWebHistory } from 'vue-router'

import PlaceView from '../views/PlaceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PlaceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
