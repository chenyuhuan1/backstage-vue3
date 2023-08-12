<!--
 * @Author: 陈宇环
 * @Date: 2023-03-03 17:00:45
 * @LastEditTime: 2023-08-09 11:09:21
 * @LastEditors: chenql
 * @Description: 组件示例页面
-->
<template>
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
      :key="route.path"
    />
  </router-view>
</template>

<script lang="tsx" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style lang="scss" scoped></style>
