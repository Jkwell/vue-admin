import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import elementEnLocal from 'element-ui/lib/locale/lang/en'
import elementZnLocal from 'element-ui/lib/locale/lang/zh-CN'
import enLocal from './en'
import zhLocal from './zh'

Vue.use(VueI18n)

const message = {
  en: {
    ...enLocal,
    ...elementEnLocal
  },
  zh: {
    ...zhLocal,
    ...elementZnLocal
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookie.get('language') || 'en',
  message
})

export default i18n
