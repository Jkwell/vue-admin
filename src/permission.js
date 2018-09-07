import router from './router'
import {Message} from 'element-ui'
import store from './store'
// 加载每个页面出现顶部进度动画
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission jungle function
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') > 0) return true
  if (!permissionRoles) return true
  return roles.some((role) => permissionRoles.indexOf(role) > 0)
}

const whiteList = ['/login', '/authredirect']

router.beforeEach((to, from, next) => {
  console.log('start')
  NProgress.start() // start progress bar
  if (getToken()) {
    // 如果有token，要阻止在跳到login
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.stop()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否拉取完用户信息
        store.dispatch('GetUserInfo').then(res => { // 拉取userInfo
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', {roles}).then(() => { // 根据roles来生成路由表
            router.addRoutes(store.getters.addRoutes) // 动态添加路由表
            next({...to, replace: true}) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({path: '/'})
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方的权限判断
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({path: '/401', replace: true, query: {noGoback: true}})
        }
      }
    }
  } else {
    // has no token
    console.log(to.path)
    if (whiteList.indexOf(to.path) !== -1) { // 在白名单中直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
