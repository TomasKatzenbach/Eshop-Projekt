import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Doplnky from '../views/Doplnky.vue'
import Sipky from '../views/Sipky.vue'
import Terce from '../views/Terce.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/doplnky',
    name: 'doplnky',
    component: Doplnky,
  },
  {
    path: '/sipky',
    name: 'sipky',
    component: Sipky,
  },
  {
    path: '/terce',
    name: 'terce',
    component: Terce,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router