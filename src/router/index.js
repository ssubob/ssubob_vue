import { createRouter, createWebHistory } from 'vue-router'

import PlaceView from '../views/PlaceView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PlaceView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
