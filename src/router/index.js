import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tracked',
    name: 'tracked',
    component: () => import('../views/TrackedLocations.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
