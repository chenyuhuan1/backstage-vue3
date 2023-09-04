<!--
 * @Author: 陈宇环
 * @Date: 2023-03-03 17:00:45
 * @LastEditTime: 2023-09-04 13:46:16
 * @LastEditors: 陈宇环
 * @Description: 表单
-->
<template>
  <el-alert
    title=""
    type="success"
    style="margin-bottom: 15px;"
  >
    示例代码地址:<a href="https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/form/index.vue">https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/form/index.vue</a>
  </el-alert>
  <el-card
    shadow="always"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>表单</span>
      <a
        style="margin-left: 50px;"
        href="javascript:"
        @click="goApi('/static/apiDocs2/modules/BsForm.html')"
      >API地址</a>
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
    <BsForm
      ref="BsFormDom2"
      v-model="form2"
      :config="formCofing2"
    />
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>文本表单</span>
    </template>
    <BsForm
      ref="BsFormDom3"
      v-model="form3"
      :config="formCofing3"
    />
  </el-card>
  <el-card
    shadow="always"
    style="margin-top: 15px;"
    :body-style="{ padding: '15px' }"
  >
    <template #header>
      <span>表单联动</span>
    </template>
    <BsForm
      ref="BsFormDom4"
      v-model="form4"
      :config="formCofing4"
    />
  </el-card>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
// import BsForm, { formConfig } from '@/components/BsForm/index'
import { BsForm, formConfig } from 'backstage-vue3'
import { goApi } from '@/local/utils/index'

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
//* * 表单-end */


//* * 表单-start */
const BsFormDom2 = ref()
const form2 = ref()
const formCofing2 = ref<formConfig>({
  colNum: 8, // 一行3个
  columns: [
    { type: 'input', prop: 'name', label: '姓名', required: true },
    { type: 'number', prop: 'age', label: '年龄', rules: [{ required: true, message: '请输入年龄', trigger: 'change' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }] },
    { type: 'select', prop: 'sex', label: '性别', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }] },
    { type: 'select', prop: 'department', label: '部门',
      options: {
        type: 'api',
        getData: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([{ label: '信息技术部', value: 1 }, { label: '财务部', value: 2 }])
            }, 1000)
          })
        },
      },
    },
  ],
  searchFn: () => {
    console.log(form2.value)
  },
  resetFn: () => {
    console.log('resetFn')
  },
})
const sub1 = async() => {
  const vali = await BsFormDom.value.validate()
  console.log(vali)
}
//* * 表单-end */


//* * 文本表单-start */
const BsFormDom3 = ref()
const form3 = ref({
  name: '张三',
  age: 18,
  sex: 1,
  department: 1,
})
const formCofing3 = ref<formConfig>({
  notOpBtn: true, // 关闭搜索及重置按钮
  colNum: 8, // 一行3个
  columns: [
    { type: 'input', prop: 'name', label: '姓名', required: true },
    { type: 'number', prop: 'age', label: '年龄', rules: [{ required: true, message: '请输入年龄', trigger: 'change' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }] },
    { type: 'select', prop: 'sex', label: '性别', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }] },
    { type: 'select', prop: 'department', label: '部门', options: {
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
  textMode: true, // 纯文本模式
})
//* * 文本表单-end */

//* * 表单联动-start */
const BsFormDom4 = ref()
const form4 = ref()
const formCofing4 = ref<formConfig>({
  notOpBtn: true, // 关闭搜索及重置按钮
  colNum: 8, // 一行3个
  columns: [
    { type: 'input', prop: 'name', label: '姓名', required: true, change: (e:any) => {
      if (e.value === '张三') {
        form4.value.age = 10
      }
    } },
    { type: 'number', prop: 'age', label: '年龄', rules: [{ required: true, message: '请输入年龄', trigger: 'change' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }] },
    { type: 'select', prop: 'sex', label: '性别', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }], change: (e: any) => {
      const index = formCofing4.value.columns.findIndex((item: any) => {
        return item.prop === 'heigth'
      })
      const departmentIndex = formCofing4.value.columns.findIndex((item: any) => {
        return item.prop === 'department'
      })
      if (e.value === 1) {
        index && (formCofing4.value.columns[index].hide = false)  // 联动-身高显示
        departmentIndex && (formCofing4.value.columns[departmentIndex].required = true)  // 联动-部门必填
      } else {
        index && (formCofing4.value.columns[index].hide = true) // 联动-身高隐藏
        departmentIndex && (formCofing4.value.columns[departmentIndex].required = true)  // 联动-部门非必填
      }
    } },
    { type: 'input', prop: 'heigth', label: '身高', hide: true },
    { type: 'select', prop: 'department', label: '部门', options: {
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
//* * 表单联动-end */

</script>
<style lang="scss" scoped></style>
