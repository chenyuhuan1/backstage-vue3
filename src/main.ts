import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/css/reset.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/index.css'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '@/router'
createApp(App).use(router).use(ElementPlus, {
  locale: zhCn,
  // namespace: 'ep',
}).use(AntDesignVue).mount('#app')
