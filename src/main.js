// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// element-ui
/* eslint-disable */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element-ui-css

import '@/sass/index.sass' // global css

import Icon from 'vue-svg-icon/Icon.vue'

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang'
import './permission' // 权限控制

Vue.component('icon', Icon)
Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
