<!--
 * @Author: 陈宇环
 * @Date: 2022-05-12 14:25:59
 * @LastEditTime: 2023-06-05 16:14:17
 * @LastEditors: 陈宇环
 * @Description: 布局组件-上下布局-上部内容撑开下部flex1自适应（页面form组件table组件布局）
-->
<template>
  <div class="FullPageLayout">
    <!-- 内容撑开 -->
    <div
      class="auto-strut"
    >
      <slot name="autoStrut" />
    </div>
    <!-- 高度flex1撑满 -->
    <div
      class="flex1"
    >
      <slot name="flex1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.FullPageLayout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .flex1 {
    flex: 1;
    overflow: hidden;
  }
}
</style>