<template>
  <div class="dialog">
    <el-alert
      title=""
      type="success"
      style="margin-bottom: 15px;"
    >
      示例代码地址:<a href="https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/dialog/index.vue">https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/dialog/index.vue</a>
    </el-alert>
    <el-card
      shadow="always"
      style="margin-top: 15px;"
      :body-style="{ padding: '15px' }"
    >
      <template #header>
        <span>基础弹窗</span>
        <a
          style="margin-left: 50px;"
          href="javascript:"
          @click="goApi('/static/apiDocs2/modules/BsDialog.html')"
        >API地址</a>
      </template>
      <BsDialog ref="BsDialogDom" />
      <el-button
        type="primary"
        @click="showDialog"
      >
        基础弹窗
      </el-button>
    </el-card>
    <el-card
      shadow="always"
      style="margin-top: 15px;"
      :body-style="{ padding: '15px' }"
    >
      <template #header>
        <span>表单弹窗</span>
        <a
          style="margin-left: 50px;"
          href="javascript:"
          @click="goApi('/static/apiDocs2/modules/BsDialog_BsFormDialog.html')"
        >API地址</a>
      </template>
      <BsFormDialog ref="BsFormDialogDom" />
      <el-button
        type="primary"
        @click="showFormDialog"
      >
        表单弹窗
      </el-button>
    </el-card>
    <el-card
      shadow="always"
      style="margin-top: 15px;"
      :body-style="{ padding: '15px' }"
    >
      <template #header>
        <span>列表弹窗</span>
        <a
          style="margin-left: 50px;"
          href="javascript:"
          @click="goApi('/static/apiDocs2/modules/BsDialog_BsListDialog.html')"
        >API地址</a>
      </template>
      <BsListDialog ref="BsListDialogDom" />
      <el-button
        type="primary"
        @click="showListDialog"
      >
        列表弹窗
      </el-button>
    </el-card>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { BsDialog, BsFormDialog, BsListDialog, dialogFace, dialogListFace, dialogFormFace } from 'backstage-vue3'
// import BsDialog, { dialogFace } from '@/components/BsDialog'
// import BsFormDialog, { dialogFormFace } from '@/components/BsDialog/BsFormDialog'
// import BsListDialog, { dialogListFace } from '@/components/BsDialog/BsListDialog'
import { goApi } from '@/local/utils/index'

// 基础弹窗 - start
const BsDialogDom = ref()
const showDialog = () => {
  const config: dialogFace = {
    title: '基础弹窗',  // dialog标题
    width: '500px',  // dialog宽度
    confirmText: '提交', // 确认按钮文案
    cancelText: '关闭', // 取消按钮文案
    render: () => {
      return 'render内容'
    },
    confirm: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)  // reject 或则 返回false 不会关闭弹窗
        }, 1000)
      })
    },
    cancel: () => {
      console.log('cancel')
    },
  }
  BsDialogDom.value?.show(config)
}
// 基础弹窗 - end

// 表单弹窗 - start
const BsFormDialogDom = ref()
const showFormDialog = () => {
  const config: dialogFormFace = {
    title: '表单标题',  // dialog标题
    width: '500px',  // dialog宽度
    confirmText: '提交', // 确认按钮文案
    cancelText: '关闭', // 取消按钮文案
    formConfig: {
      columns: [
        { prop: 'name', label: '姓名', type: 'input', required: true },
        { prop: 'sex', label: '年龄', type: 'select', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }],  required: true },
      ],  // 表单项配置
      colNum: 24,
      labelWidth: '100px',  // label宽度
    },
    confirm: (form: any) => {
      console.log('confirm', form)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)  // reject 或则 返回false 不会关闭弹窗
        }, 1000)
      })
    },
    cancel: () => {
      console.log('cancel')
    },
  }
  BsFormDialogDom.value?.show({
    config,
    formInitValue: {},
  })
}
// 表单弹窗 - end

// 列表弹窗 - start
const BsListDialogDom = ref()
const showListDialog = () => {
  const config: dialogListFace = {
    title: '标题',  // dialog标题
    width: '900px',  // dialog宽度
    // confirmText: '提交', // 确认按钮文案
    cancelText: '关闭', // 取消按钮文案
    searchConfig: {   // 搜索条件字段，不传则不展示搜索字段
      columns: [
        { prop: 'name', label: '姓名', type: 'input' },
        { prop: 'sex', label: '年龄', type: 'select', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }] },
      ],  // 表单项配置
      colNum: 8,
      labelWidth: '100px',  // label宽度
    },
    actionsRender: () => {
      return <div><el-button type="primary" size="small">新增</el-button></div>
    },
    listConfig: { // list相关配置
      columns: [
        { type: 'index', fixed: 'left' },
        { prop: 'name', label: '名称', minWidth: 120 },
        { prop: 'age', label: '性别', minWidth: 120 },
      ], // table列配置
      loadData: async({ pageIndex, pageSize, searchForm }: { pageIndex: number, pageSize: number, searchForm?: any }) => {
        console.log(pageIndex, pageSize, searchForm)
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              list: pageIndex === 1 ?
                [
                  { name: '张三', age: 1 }, { name: '李四', age: 2 }, { name: '王五', age: 3 },
                  { name: '张三', age: 1 }, { name: '李四', age: 2 }, { name: '王五', age: 3 },
                  { name: '张三', age: 1 }, { name: '李四', age: 2 }, { name: '王五', age: 3 },
                  { name: '张三', age: 1 },
                ]
                :
                [
                  { name: '张三', age: 1 }, { name: '李四', age: 2 }, { name: '王五', age: 3 },
                ],
              total: 13,
            })
          }, 1000)
        })
      }, // 加载函数配置
      pagingConfig: {
        open: true,
      },
      tableConfig: {},
    },
    // confirm: async() => {
    //   console.log('confirm', await BsListDialogDom.value.BsFormRef.validate())
    //   return await BsListDialogDom.value.BsFormRef.value.validate()
    // },
    cancel: () => {
      console.log('cancel')
    },
  }
  BsListDialogDom.value?.show({
    config,
    formInitValue: {},
  })
}
// 列表弹窗 - end

</script>

<style scoped lang="scss">

</style>
