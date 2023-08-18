import { RouteRecordRaw } from 'vue-router'
import LRLayout from '@/layout/LRLayout.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: LRLayout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/examples/home/index.vue'),
        meta: {
          moduleName: '示例页面',
          moduleIcon: 'HomeFilled',
        },
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@/examples/form/index.vue'),
        meta: {
          moduleName: '表单',
          moduleIcon: 'Postcard',
        },
      },
      {
        path: 'editTable',
        name: 'editTable',
        component: () => import('@/examples/editTable/index.vue'),
        meta: {
          moduleName: '行内编辑table',
          moduleIcon: 'List',
        },
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: () => import('@/examples/dialog/index.vue'),
        meta: {
          moduleName: '弹窗',
          moduleIcon: 'Money',
        },
      },
    ],
  },
]

export default routes