<!--
 * @Author: 陈宇环
 * @Date: 2023-03-03 17:00:45
 * @LastEditTime: 2023-09-07 11:06:11
 * @LastEditors: 陈宇环
 * @Description: 组件示例页面
-->
<template>
  <div class="home">
    <el-alert
      title=""
      type="success"
      style="margin-bottom: 15px;"
    >
      示例代码地址:<a href="https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/home/index.vue">https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/home/index.vue</a>
    </el-alert>
    <FullPageLayout class="FullPageLayout">
      <template #autoStrut>
        <BsForm
          v-model="form"
          class="BsForm"
          :config="config"
        />
        <BsButtons
          :buttons="actions"
        />
      </template>
      <template #flex1>
        <BsTable
          :columns="thead"
          :load-data="loadData2"
          :table-config="tableConfig"
        />
      </template>
    </FullPageLayout>
  </div>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue'
import FullPageLayout from '@/layout/FullPageLayout.vue'
import { ElInput } from 'element-plus'
import { BsForm, BsTable, BsButtons, buttonFace, formConfig, loadDataFace, tableConfigFace, columnsConfigFace } from 'backstage-vue3'

const opFn = () => {
  console.log(123123)
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== '123456') {
    callback(new Error('Two inputs don\'t match!'))
  } else {
    callback()
  }
}

const actions:buttonFace[] = [
  {
    text: '新增',
    confirmConfig: {
      title: '点击[审核]当前选择记录状态将变成:已审核，确定继续吗?',
      nativeProps: {
        placement: 'top-start',
      },
    },
    click: () => {
      opFn()
    },
  },
]

const form = ref<any>({ name1: '12312', date1: '2023-08-10', pass: '11', age: 3123, sex: 1, sex2: [2], sex4: 2, date11: ['2025-07', '2025-12'], date2: '2023-08-10', number2: 4123, cascader1: 'zhonghuamen1', test: '123123123123333', swi: true, date22: '2025-07', date33: '2025-12', date3: '2023-08-25', number3: 32513 })
const config = reactive<formConfig>({
  // colNum: 6,
  labelWidth: '120px',
  disabled: false,
  loading: false,
  textMode: false,
  columns: [
    {
      prop: 'guide',
      type: 'collapse',
      labelWidth: '0px',
      colNum: 24,
      dataConfig: [
        {
          title: '操作指引',
          desc: '1. 直接转移（调动后社保帐户增员）的社保信息，全部来源于调动环节，无法修改',
        },
      ],
    },
    {
      label: '姓名1',
      prop: 'name1',
      type: 'input',
      placeholder: '请输入姓名1',
      required: true,
      inlayRules: [{ validatorName: 'letters' }],
      // inlayRules: [
      //   {
      //     validatorName: 'positivedigits',
      //   },
      //   {
      //     validatorName: 'qq',
      //   },
      // ],
      // hide: true,
    },
    {
      label: '密码',
      prop: 'pass',
      type: 'password',
      placeholder: '请输入密码',
      required: true,
      rules: [{ validator: validatePass2, trigger: 'blur' }],
      // hide: true,
    },
    {
      label: '年龄',
      prop: 'age',
      type: 'number',
      placeholder: '请输入年龄1',
      required: true,
      // precision: 2,
      // hide: true,
    },
    // {
    //   label: '姓名2',
    //   prop: 'name2',
    //   type: 'textarea',
    //   placeholder: '请输入姓名2',
    //   required: true,
    //   rows: 5,
    //   rules: [{ validator: validatePass2, trigger: 'blur' }],
    // },
    {
      label: '性别dic',
      prop: 'sex',
      type: 'select',
      options: {
        type: 'api',
        getData: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                {
                  name: '男12312ss',
                  value: 1,
                },
                {
                  name: '女55454333dd1',
                  value: 2,
                },
              ])
            }, 2000)
          })
        },
      },
      labelKey: 'name',
      valueKey: 'value',
      collapseTags: true,
      placeholder: '请选择性别111',
      // effect: 'dark',
      // required: true,
    },
    {
      label: '性别2',
      prop: 'sex2',
      type: 'checkbox',
      options: [
        {
          name: '男',
          value: 1,
        },
        {
          name: '女',
          value: 2,
        },
      ],
      labelKey: 'name',
      // collapseTags: true,
      placeholder: '请选择性别111',
      // required: true,
    },
    {
      label: '性别radio',
      prop: 'sex4',
      type: 'radio',
      options: [
        {
          name: '男',
          value: 1,
        },
        {
          name: '女',
          value: 2,
        },
      ],
      labelKey: 'name',
      placeholder: '请选择性别111',
      // required: true,
    },
    {
      label: '日期',
      prop: 'date1',
      type: 'date',
      placeholder: '请输入日期1',
      required: true,
    },
    {
      label: '日期范围组件',
      prop: 'date11',
      propSecond: 'date22',
      propThird: 'date33',
      type: 'monthrange',
      required: true,
    },
    {
      label: '日期范围',
      prop: 'date2',
      propEnd: 'date3',
      type: 'dateRange',
      placeholder: '请输入日期范围1',
      required: true,
      change(e: any) {
        console.log(e)
      },
      // disabledDate: (date: any) => {
      //   return +date > +new Date()
      // },
    },
    {
      label: '数字范围',
      prop: 'number2',
      propEnd: 'number3',
      type: 'numberRange',
      placeholder: '请输入数字返回1',
      required: true,
    },
    {
      colNum: 6,
      label: '地址',
      prop: 'cascader1',
      type: 'cascader',
      placeholder: '请输入',
      clearable: true,
      props: {
        multiple: true,
        emitPath: false,
      },
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
                {
                  value: 'zhonghuamen1',
                  label: 'Zhong Hua Men1',
                },
              ],
            },
          ],
        },
      ],
      // nativeProps: {
      //   collapseTags: true,
      //   showAllLevels: true,
      // },
    },
    {
      label: '测试render',
      prop: 'test',
      type: 'render',
      render: () => {
        return <ElInput v-model={form.value.test}></ElInput>
      },
      placeholder: '请输入',
    },
    {
      label: '开关',
      prop: 'swi',
      type: 'switch',
      placeholder: '请输入',
    },
  ],
})

const tableConfig = ref<tableConfigFace>({
  rowSelection: {
    type: 'checkout',
    onChange: (selection: any) => {
      console.log('table勾选项：', selection)
    },
  },
  nativeProps: {
    border: true,
  },
})

const thead = ref<columnsConfigFace>([
  { type: 'index', fixed: 'left' },
  { prop: 'id', label: 'id', width: 100, align: 'left', fixed: 'left' },
  { prop: 'createTime', label: '创建时间', width: 100 },
  { prop: 'loanCount', label: '笔数', width: 80 },
  { prop: 'effectiveDays', label: '下载有效期(天)' },
  { prop: 'statusDesc', label: '状态' },
  {
    prop: 'infoData1',
    label: '数目1',
    width: 160,
    nativeProps: {
      'show-overflow-tooltip': true,
    },
  },
  {
    prop: 'infoData21',
    label: '统计数目21',
    children: [
      {
        prop: 'infoData211',
        label: '统计数目211',
      },
      {
        prop: 'infoData212',
        label: '统计数目212',
        render: (scope: any) => <div>{scope.row.infoData211} render测试</div>,
      },
    ],
  },
])

const loadData2: loadDataFace = async({
  pageIndex,
  pageSize,
}: {
  pageIndex: number
  pageSize: number
}) => {
  console.log(pageIndex, pageSize)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        list:
          pageIndex === 1
            ? [
              {
                id: 1,
                createTime: '2021-01',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 2,
                createTime: '2021-02',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 3,
                createTime: '2021-03',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 4,
                createTime: '2021-04',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 5,
                createTime: '2021-05',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 6,
                createTime: '2021-06',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 7,
                createTime: '2021-07',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 8,
                createTime: '2021-08',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 9,
                createTime: '2021-09',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 10,
                createTime: '2021-10',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
            ]
            : [
              {
                id: 11,
                createTime: '2021-11',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
              {
                id: 12,
                createTime: '2021-12',
                loanCount: 5,
                effectiveDays: 5,
                statusDesc: '成功',
                infoData1: 1,
                infoData21: 21,
                infoData22: 22,
                infoData211: 211,
                infoData212: 212,
                infoData221: 221,
                infoData222: 222,
              },
            ],
        total: 12,
      })
    }, 1500)
  })
}

</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  .FullPageLayout{
    flex: 1;
  }
}
</style>
