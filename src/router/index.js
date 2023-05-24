import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComp from '@/components/LoginComp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginComp
  },
  {
    path: '/home',
    component: () => import('@/components/HomeComp')
  }
]

const router = new VueRouter({
  routes
})

export default router
