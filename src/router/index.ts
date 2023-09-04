import { createRouter, createWebHashHistory, RouterOptions, Router } from 'vue-router'
import routes from './route'

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router
