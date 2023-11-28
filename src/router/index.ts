import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from "../views/AppLogin.vue"
import AppMain from "../views/AppMain.vue"
import AppCart from "../views/AppCart.vue"
import AppCreateUser from "../views/AppCreateUser.vue"
import AppCreateJogo from "../views/AppCreateJogo.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMain
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin
  },
  {
    path: '/cart/:id',
    name: 'AddCart',
    component: AppCart
  },
  {
    path: '/cart',
    name: 'Cart',
    component: AppCart
  },
  {
    path: '/addUser',
    name: 'user',
    component: AppCreateUser
  },
  {
    path: '/addJogo',
    name: 'jogo',
    component: AppCreateJogo
  }
  
]

const base_url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base_url),
  routes
})

export default router