import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
Vue.use(Router)

//
export const constantRouterMap = [
  {
    path: '/login',
    name: '登陆页面',
    component: () => import('@/components/login/index'),
    hidden: true
  },
  {
    path: '/404',
    name: '404页面',
    component: () => import('@/components/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    name: '401页面',
    component: () => import('@/components/errorPage/401'),
    hidden: true
  }
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    }
  }
]
