/*
 * @Author: 陈宇环
 * @Date: 2023-03-03 11:34:55
 * @LastEditTime: 2023-09-01 15:59:53
 * @LastEditors: 陈宇环
 * @Description: 页面菜单组件
 */

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import styles from './style.module.scss'
import * as icons from '@element-plus/icons-vue'
import menus from '@/router/route'
export default defineComponent({
  setup() {
    const route = useRoute()

    const recursion = (menus: any[]) => {
      return menus.map((menu:any) => {
        // icon取的是pms配置菜单是的icon字段 - 对应elementplus的icon组件https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88
        const iconDom = menu?.meta?.moduleIcon && (icons as any)[menu?.meta?.moduleIcon] ? (icons as any)[menu?.meta?.moduleIcon] : icons.Failed
        return (<>
          {!menu.children && <el-menu-item index={`/${menu.path}`} class={`/${menu.path}`} v-slots={{
            title: () => {
              return <span title={menu.meta.moduleName}>{menu.meta.moduleName}</span>
            },
          }} >
            {iconDom ? <el-icon><iconDom /></el-icon> : null}
          </el-menu-item>}
          {menu.children && <el-sub-menu index={menu.name} v-slots={{
            title: () => {
              return <>
                {iconDom ? <el-icon><iconDom /></el-icon> : null}
                <span title={menu?.meta?.moduleName}>{menu?.meta?.moduleName}</span>
              </>
            },
          }}>
            {recursion(menu.children)}
          </el-sub-menu>}
        </>)
      })
    }

    return () => {
      return <div class={[styles.BaseMenu]}>
        <el-menu
          router
          default-active={route.path}
          class="el-menu-vertical"
          unique-opened={true}
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
        >
          <a href='/apiDocs2/index.html' style={{ display: 'block', textAlign: 'center', padding: '10px 0' }}>API文档地址</a>
          {
            menus && menus.length > 0 ? recursion(menus[0].children ?? []) : <span style={{ color: '#fff' }}>请检查配置菜单及菜单权限</span>
          }
        </el-menu>
      </div >
    }
  },
})