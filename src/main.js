import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/theme-chalk/index.css';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App).use(ElementPlus, {
    locale: zhCn,
}).use(AntDesignVue).mount('#app');
//# sourceMappingURL=main.js.map