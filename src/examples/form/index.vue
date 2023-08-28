<!--
 * @Author: 陈宇环
 * @Date: 2023-03-03 17:00:45
 * @LastEditTime: 2023-08-25 11:01:47
 * @LastEditors: 陈宇环
 * @Description: 表单
-->
<template>
  <el-card
    shadow="always"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>表单</span>
    </template>
    <BsForm
      ref="BsFormDom"
      v-model="form"
      :config="formCofing"
    />
    <el-button
      type="primary"
      @click="sub1"
    >
      提交
    </el-button>
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>搜索条件</span>
    </template>
    待完善
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>文本表单</span>
    </template>
    待完善
  </el-card>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
// import BsForm, { formConfig } from '@/components/BsForm/index'
import { BsForm, formConfig } from 'backstage-vue3'

//* * 表单-start */
const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const BsFormDom = ref()
const form = ref()
const formCofing = ref<formConfig>({
  notOpBtn: true, // 关闭搜索及重置按钮
  colNum: 8, // 一行3个
  columns: [
    { type: 'input', prop: 'name', label: '姓名', required: true },
    { type: 'number', prop: 'age', label: '年龄', rules: [{ validator: checkAge, trigger: 'change' }] },
    { type: 'select', prop: 'sex', label: '性别', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }] },
    { type: 'select', prop: 'department', label: '部门', bottomNoteRender: () => {
      return <div style={{ color: '#999', padding: '3px 0' }}>接口获取下拉菜单</div>
    }, options: {
      type: 'api',
      getData: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([{ label: '信息技术部', value: 1 }, { label: '财务部', value: 2 }])
          }, 1000)
        })
      },
    } },
  ],
})
const sub1 = async() => {
  const vali = await BsFormDom.value.validate()
  console.log(vali)
}
//* * 表单-end */

</script>
<style lang="scss" scoped></style>
