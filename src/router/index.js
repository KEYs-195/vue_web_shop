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
    component: () => import('@/components/HomeComp'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('@/components/WelcomeComp')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转来
  // next 是一个函数 表示放行
  // next() 放行   next('/login') 强制跳转

  if (to.path === '/login') return next()
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
