import './assets/main.css'
import { addCollection } from '@iconify/vue'
import lucideIcons from '@iconify-json/lucide/icons.json'
import vscodeIcons from '@iconify-json/vscode-icons/icons.json'
import { createPinia } from 'pinia'
import zhCN from './i18n/zh-CN'
import zhTW from './i18n/zh-TW'
import enUS from './i18n/en-US'
import zhHK from './i18n/zh-HK'
import koKR from './i18n/ko-KR'
import jaJP from './i18n/ja-JP'
import ruRU from './i18n/ru-RU'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  legacy: false,
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-US': enUS,
    'zh-HK': zhHK,
    'ja-JP': jaJP,
    'ko-KR': koKR,
    'ru-RU': ruRU,
    zh: zhCN,
    en: enUS
  }
})
// 添加整个图标集合到本地
addCollection(lucideIcons)
addCollection(vscodeIcons)
const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
