import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Doplnky from '../views/Doplnky.vue'
import Sipky from '../views/Sipky.vue'
import Terce from '../views/Terce.vue'
import Kosik from '../views/Kosik.vue'
import Objednavky from '../views/Objednavky.vue'
import Objednavka from '../views/Objednavka.vue'

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
  {
    path: '/kosik',
    name: 'kosik',
    component: Kosik,
  },
  {
    path: '/objednavky',
    name: 'objednavky',
    component: Objednavky,
  },
  {
    path: '/objednavka',
    name: 'objednavka',
    component: Objednavka,
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router