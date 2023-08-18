<!--
 * @Author: 陈宇环
 * @Date: 2023-03-03 17:00:45
 * @LastEditTime: 2023-08-18 15:52:32
 * @LastEditors: 陈宇环
 * @Description: 可编辑表格
-->
<template>
  <el-alert
    title=""
    type="success"
    style="margin-bottom: 15px;"
  >
    示例代码地址:<a href="https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/editTable/index.vue">https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/editTable/index.vue</a>
  </el-alert>
  <el-card
    shadow="always"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>整表编辑</span>
    </template>
    <BsEditTable
      ref="BsEditTableDom"
      v-model="overallTableList"
      :columns="overallThead"
      :edit-table-config="overallTableConfig"
      @change="(e)=>{aachange(e)}"
    />
    <el-button
      type="primary"
      size="default"
      @click="overallVerify"
    >
      整体校验
    </el-button>
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>行编辑</span>
    </template>
    <BsEditTable
      ref="BsEditTableDom2"
      v-model="rowTableList"
      :columns="rowThead"
      :table-config="rowTableConfig"
    />
    <el-button
      type="primary"
      size="default"
      @click="rowVerify"
    >
      整体校验
    </el-button>
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>列编辑</span>
    </template>
    <BsEditTable
      ref="BsEditTableDom3"
      v-model="colTableList"
      :columns="colThead"
      :table-config="colTableConfig"
    />
    <el-button
      type="primary"
      size="default"
      @click="colVerify"
    >
      整体校验
    </el-button>
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>表单中使用</span>
    </template>
    <BsForm
      ref="BsFormDom"
      v-model="form"
      class="BsForm"
      :config="config"
    />
    <el-button
      type="primary"
      size="default"
      @click="sub"
    >
      校验&提交
    </el-button>
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>表单中使用-render方式</span>
    </template>
    <BsForm
      ref="BsFormDom2"
      v-model="form2"
      class="BsForm"
      :config="config2"
    />
    <el-button
      type="primary"
      size="default"
      @click="sub2"
    >
      校验&提交
    </el-button>
  </el-card>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { BsForm, BsEditTable, BsButtons, formConfig, editTableConfigFace, editTableColumnsConfigFace } from 'backstage-vue3'

/** 整表编辑配置 start */
const BsEditTableDom = ref()

const overallTableList = ref<any[]>([
  {
    id: 1,
    createTime: '2021-01',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 2,
    createTime: '2021-02',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 3,
    createTime: '2021-03',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'fail',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
])

const overallTableConfig = ref<editTableConfigFace>({
  editing: true, // 开启整表编辑 - 在thead中配置了formConfig的就会进入编辑状态
})

const aachange = (e:any) => {
  console.log(e, 333)
}

const overallThead = ref<editTableColumnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 150,
    widgetConfig: { type: 'month' },
  },
  {
    prop: 'loanCount',
    label: '笔数',
    width: 120,
    widgetConfig: {
      type: 'input',
      required: true,
      rules: [{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }],
    },
  },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  {
    prop: 'statusDesc',
    label: '状态',
    width: 200,
    widgetConfig: {
      type: 'select',
      required: true,
      options: [{ label: '成功', value: 'success' }, { label: '失败', value: 'fail' }],
    },
    render: (scope: any) => {
      return scope.row.statusDesc === 'success' ? '成功' : '失败'
    },
  },
  {
    prop: 'ohter',
    label: '其他',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    label: '统计',
    children: [
      {
        prop: 'amount',
        label: '数目',
      },
      {
        prop: 'category',
        label: '种类',
        render: (scope: any) => <div>{scope.row.category} render测试</div>,
      },
    ],
  },
])

const overallVerify = async() => {
  const vali = await BsEditTableDom.value.validate()
  if (vali) {
    ElMessage({ type: 'success', message: '校验成功，数据请查看控制台打印！' })
    overallTableConfig.value.editing = false
  } else {
    ElMessage({ type: 'error', message: '校验失败' })
  }
}
/** 整表编辑配置 end */

/** 行编辑配置 start */
const BsEditTableDom2 = ref()

const rowTableList = ref<any[]>([
  {
    editing: true, // 此行进入编辑状态  - 可以在rowTableConfig配置中通过rowEditingKey更换字段
    id: 1,
    createTime: '2021-01',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 2,
    createTime: '2021-02',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 3,
    createTime: '2021-03',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'fail',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
])

const rowTableConfig = ref<editTableConfigFace>({})

const rowThead = ref<editTableColumnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 150,
    widgetConfig: { type: 'month', required: true },
  },
  {
    prop: 'loanCount',
    label: '笔数',
    width: 120,
    widgetConfig: {
      type: 'input',
      required: true,
      rules: [{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }],
    },
  },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  {
    prop: 'statusDesc',
    label: '状态',
    width: 200,
    widgetConfig: {
      type: 'select',
      required: true,
      options: [{ label: '成功', value: 'success' }, { label: '失败', value: 'fail' }],
    },
    render: (scope: any) => {
      return scope.row.statusDesc === 'success' ? '成功' : '失败'
    },
  },
  {
    prop: 'ohter',
    label: '其他',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    label: '统计',
    children: [
      {
        prop: 'amount',
        label: '数目',
        width: 150,
        widgetConfig: {
          type: 'input',
          required: true,
        },
      },
      {
        prop: 'category',
        label: '种类',
        render: (scope: any) => <div>{scope.row.category} render测试</div>,
      },
    ],
  },
  {
    label: '操作',
    width: 190,
    fixed: 'right',
    render: (scope: any) => {
      return <div>
        <BsButtons
          buttons={[
            {
              text: '编辑',
              type: 'primary',
              click: () => {
                scope.row.editing = true
              },
            },
            {
              text: '校验此行并提交',
              type: 'primary',
              click: async() => {
                const vali = await BsEditTableDom2.value?.validateRow(scope.$index)
                if (vali) {
                  ElMessage({ type: 'success', message: '行校验成功，数据请查看控制台打印！' })
                  scope.row.editing = false
                } else {
                  ElMessage({ type: 'error', message: '行校验失败' })
                }
              },
            },
          ]}
        />
      </div>
    },
  },
])

const rowVerify = async() => {
  const vali = await BsEditTableDom2.value.validate()
  if (vali) {
    ElMessage({ type: 'success', message: '校验成功，数据请查看控制台打印！' })
  } else {
    ElMessage({ type: 'error', message: '校验失败' })
  }
}
/** 行编辑配置 end */


/** 列编辑配置 start */
const BsEditTableDom3 = ref()

const colTableList = ref<any[]>([
  {
    id: 1,
    createTime: '2021-01',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 2,
    createTime: '2021-02',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'success',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
  {
    id: 3,
    createTime: '2021-03',
    loanCount: 5,
    effectiveDays: 5,
    statusDesc: 'fail',
    ohter: 1,
    amount: 12,
    category: 'aaa',
  },
])

const colTableConfig = ref<editTableConfigFace>({})

const colThead = ref<editTableColumnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 150,
    editing: true,
    widgetConfig: { type: 'month' },
  },
  {
    prop: 'loanCount',
    label: '笔数',
    width: 120,
    editing: true,
    widgetConfig: {
      type: 'input',
      required: true,
      rules: [{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }],
    },
  },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  {
    prop: 'statusDesc',
    label: '状态',
    width: 200,
    widgetConfig: {
      type: 'select',
      required: true,
      options: [{ label: '成功', value: 'success' }, { label: '失败', value: 'fail' }],
    },
    render: (scope: any) => {
      return scope.row.statusDesc === 'success' ? '成功' : '失败'
    },
  },
  {
    prop: 'ohter',
    label: '其他',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    label: '统计',
    children: [
      {
        prop: 'amount',
        label: '数目',
      },
      {
        prop: 'category',
        label: '种类',
        render: (scope: any) => <div>{scope.row.category} render测试</div>,
      },
    ],
  },
])

const colVerify = async() => {
  const vali = await BsEditTableDom3.value.validate()
  if (vali) {
    ElMessage({ type: 'success', message: '校验成功，数据请查看控制台打印！' })
    colTableConfig.value.editing = false
  } else {
    ElMessage({ type: 'error', message: '校验失败' })
  }
}
/** 整表编辑配置 end */

/** 表单中使用 start */
const BsFormDom = ref()
const form = ref<any>({})
setTimeout(() => { // 模拟异步返回
  form.value.tableList = [
    {
      id: 1,
      createTime: '2021-01',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'success',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
    {
      id: 2,
      createTime: '2021-02',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'success',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
    {
      id: 3,
      createTime: '2021-03',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'fail',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
  ]
}, 1000)
const formThead = ref<editTableColumnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 150,
    widgetConfig: { type: 'month' },
  },
  {
    prop: 'loanCount',
    label: '笔数',
    width: 120,
    widgetConfig: {
      type: 'input',
      required: true,
      rules: [{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }],
    },
  },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  {
    prop: 'statusDesc',
    label: '状态',
    width: 200,
    widgetConfig: {
      type: 'select',
      required: true,
      options: [{ label: '成功', value: 'success' }, { label: '失败', value: 'fail' }],
    },
    render: (scope: any) => {
      return scope.row.statusDesc === 'success' ? '成功' : '失败'
    },
  },
  {
    prop: 'ohter',
    label: '其他',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    label: '统计',
    children: [
      {
        prop: 'amount',
        label: '数目',
      },
      {
        prop: 'category',
        label: '种类',
        render: (scope: any) => <div>{scope.row.category} render测试</div>,
      },
    ],
  },
])
const formTableConfig = ref<editTableConfigFace>({
  editing: true,
})
const config = reactive<formConfig>({
  // colNum: 6,
  labelWidth: '120px',
  disabled: false,
  loading: false,
  notOpBtn: true,
  columns: [
    {
      label: '姓名1',
      prop: 'name1',
      type: 'input',
      placeholder: '请输入姓名1',
      required: true,
    },
    {
      label: '列表',
      prop: 'tableList',
      type: 'editTable',
      colNum: 24,
      columns: formThead.value,
      editTableConfig: formTableConfig.value,
    },
  ],
})
const sub = async() => {
  const formVali = await BsFormDom.value.validate()
  // const tableVali = await BsEditTableDom4.value.validate()
  if (formVali) {
    ElMessage({ type: 'success', message: '校验成功，数据请查看控制台打印！' })
    formTableConfig.value.editing = false
  } else {
    ElMessage({ type: 'error', message: '校验失败' })
  }
}
/** 表单中使用 end */

/** 表单中使用-render方式 start */
const BsFormDom2 = ref()
const BsEditTableDom4 = ref()
const form2 = ref<any>({})
setTimeout(() => { // 模拟异步返回
  form2.value.tableList = [
    {
      id: 1,
      createTime: '2021-01',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'success',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
    {
      id: 2,
      createTime: '2021-02',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'success',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
    {
      id: 3,
      createTime: '2021-03',
      loanCount: 5,
      effectiveDays: 5,
      statusDesc: 'fail',
      ohter: 1,
      amount: 12,
      category: 'aaa',
    },
  ]
}, 1000)
const formThead2 = ref<editTableColumnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 150,
    widgetConfig: { type: 'month' },
  },
  {
    prop: 'loanCount',
    label: '笔数',
    width: 120,
    widgetConfig: {
      type: 'input',
      required: true,
      rules: [{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }],
    },
  },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  {
    prop: 'statusDesc',
    label: '状态',
    width: 200,
    widgetConfig: {
      type: 'select',
      required: true,
      options: [{ label: '成功', value: 'success' }, { label: '失败', value: 'fail' }],
    },
    render: (scope: any) => {
      return scope.row.statusDesc === 'success' ? '成功' : '失败'
    },
  },
  {
    prop: 'ohter',
    label: '其他',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    label: '统计',
    children: [
      {
        prop: 'amount',
        label: '数目',
      },
      {
        prop: 'category',
        label: '种类',
        render: (scope: any) => <div>{scope.row.category} render测试</div>,
      },
    ],
  },
])
const formTableConfig2 = ref<editTableConfigFace>({
  editing: true,
})
const config2 = reactive<formConfig>({
  // colNum: 6,
  labelWidth: '120px',
  disabled: false,
  loading: false,
  notOpBtn: true,
  columns: [
    {
      label: '姓名1',
      prop: 'name1',
      type: 'input',
      placeholder: '请输入姓名1',
      required: true,
    },
    {
      label: '列表',
      prop: 'tableList',
      type: 'render',
      colNum: 24,
      render: () => {
        return <BsEditTable
          ref={BsEditTableDom4}
          v-model={form2.value.tableList}
          columns={formThead2.value}
          table-config={formTableConfig2.value}
        />
      },
    },
  ],
})
const sub2 = async() => {
  const formVali = await BsFormDom2.value.validate()
  const tableVali = await BsEditTableDom4.value.validate()
  if (formVali && tableVali) {
    ElMessage({ type: 'success', message: '校验成功，数据请查看控制台打印！' })
    formTableConfig2.value.editing = false
  } else {
    ElMessage({ type: 'error', message: '校验失败' })
  }
}
/** 表单中使用 end */


</script>
<style lang="scss" scoped></style>
