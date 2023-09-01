<!--
 * @Author: 陈宇环
 * @Date: 2022-05-12 14:25:59
 * @LastEditTime: 2023-09-01 15:54:25
 * @LastEditors: 陈宇环
 * @Description: 左右布局-左侧固定右侧撑满
-->
<template>
  <div class="LRLayout">
    <!-- 左侧 -->
    <div
      class="aside"
    >
      <BaseMenu />
    </div>
    <!-- main -->
    <div
      class="main"
    >
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="route.path"
        />
      </router-view>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { useRoute } from 'vue-router'
import BaseMenu  from '@/localComponents/BaseMenu/index'
const route = useRoute()

</script>

<style lang="scss" scoped>
.LRLayout {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  .aside {
    height: 100vh;
    overflow: auto;
    position: relative;
  }
  .main {
    padding: 15px;
    box-sizing: border-box;
    flex: 1;
    overflow: auto;
    background-color: #f1f1f1;
  }
}
</style>