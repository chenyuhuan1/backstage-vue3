import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/index.css'
// import { HelloWorld } from 'lib'
// console.log('HelloWorld', HelloWorld)
createApp(App).use(ElementPlus, {
  locale: zhCn,
}).mount('#app')
