/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 17:13:23
 * @LastEditTime: 2023-05-12 17:06:47
 * @LastEditors: 陈宇环
 * @Description: 表单组件
 */

import { defineComponent, PropType, watch, ref, reactive, nextTick } from 'vue'
import { formConfig, columnsBase } from './interface/index'

// 导入所有自定义form控件组件
import * as widget from './components/index'
export default defineComponent({
  name: 'EaseForm',
  props: {
    modelValue: {
      type: Object,
      default() {
        return {}
      },
    },
    config: {
      type: Object as PropType<formConfig>,
      default() {
        return {} // 默认值请看defaultConfig变量
      },
    },
  },
  emits: ['update:modelValue', 'search', 'export', 'reset'],
  setup(props: any, { emit, expose }) {
    // 获取表单组件实例
    const ruleFormRef = ref()

    // config默认值- 没有通过props默认值是因为想实现config字段级别的默认值
    const defaultConfig: formConfig = {
      colNum: 6, // 表单项所占col数
      columns: [], // form表单配置
      labelWidth: '100px', // label宽度
      notOpBtn: false, // 不需要操作按钮
      opBtnCol: 6, // 操作按钮col列数
      isSearch: true, // 是否需要搜索按钮 - 前提需要notOpBtn为false才能展示
      isReset: true, // 是否需要重置按钮 - 前提需要notOpBtn为false才能展示
      isExport: false, // 是否需要导出按钮
    }

    const cloneConfig: formConfig = reactive({
      ...defaultConfig,
      ...props.config,
    })

    // 初始绑定表单
    const initForm = reactive<{ value: {[key: string]: any} }>({ value: {} })
    // 校验规则
    const rules = reactive<{ [key: string]: any }>({})
    /**
     * 表单默认值、rules初始化
     * */
    const initFormFn = async() => {
      const cloneInitForm: { [key: string]: any } = {}
      cloneConfig.columns.forEach((item: columnsBase) => {
        if ((item as {multiple?: boolean}).multiple) {
          cloneInitForm[item.prop] = props.modelValue[item.prop]
            ? Array.isArray(props.modelValue[item.prop])
              ? props.modelValue[item.prop]
              : [props.modelValue[item.prop]]
            : undefined
        } else {
          cloneInitForm[item.prop] = props.modelValue[item.prop]
        }
      })
      initForm.value = { ...props.modelValue, ...cloneInitForm }
    }

    const initRulesFn = () => {
      const cloneRules: { [key: string]: any } = {}
      cloneConfig.columns.forEach((item: columnsBase) => {
        if (!item.hide) {
          cloneRules[item.prop] = [
            {
              required: item.required,
              message: `${
                ['input', 'textarea'].includes(item.type) ? '请输入' : '请选择'
              }${item.label}`,
              trigger: 'change',
            },
            ...(item.rules ? item.rules : []),
          ]
        }
      })
      Object.assign(rules, cloneRules)
    }

    watch(
      () => props.config,
      () => {
        Object.assign(cloneConfig, defaultConfig, props.config)
        initRulesFn()
        initFormFn()
      },
      { immediate: true, deep: true },
    )

    watch(
      () => props.modelValue,
      () => {
        initFormFn()
      },
      { immediate: true, deep: true },
    )

    const updateModelValue = () => {
      emit('update:modelValue', initForm.value)
    }

    // 自适应列宽
    const getSpan = (item: columnsBase): number[] => {
      const spanArray = [12, 8, 8, 6, 6] // [xs,sm,md,lg,xl]
      // 对时间区间做特殊处理
      if (item.type.indexOf('Range') !== -1) {
        // 区间为分栏数量的两倍
        return spanArray.map((v) => v * 2)
      }
      return spanArray
    }

    // 表单整体校验方法-已暴露
    const validate = async() => {
      return new Promise(async(resolve) => {
        await nextTick()
        await ruleFormRef.value?.validate((valid: boolean, fields: any) => {
          if (valid) {
            resolve(true)
          } else {
            console.log('error validate!', fields)
            resolve(false)
          }
        })
      })
    }

    // 验证表单具体的某个字段方法-已暴露
    const validateField = async(prop?: string | string[]) => {
      return new Promise(async(resolve) => {
        await nextTick()
        await ruleFormRef.value?.validateField(prop, (valid: boolean, fields: any) => {
          if (valid) {
            resolve(true)
          } else {
            console.log('error validateField!', fields)
            resolve(false)
          }
        })
      })
    }

    // 表单重置方法-已暴露
    const resetFields = async(prop?: string | string[]) => {
      await nextTick()
      ruleFormRef.value?.resetFields(prop)
      updateModelValue()
    }

    // 清理表单验证信息-已暴露
    const clearValidate = async(prop?: string | string[]) => {
      await nextTick()
      ruleFormRef.value?.clearValidate(prop)
    }

    const scrollToField = async(field: string) => {
      await nextTick()
      ruleFormRef.value?.scrollToField(field)
    }

    expose({ validate, resetFields, clearValidate, scrollToField, validateField })

    const searchFn = async() => {
      const verify = await validate()
      if (verify) {
        emit('search')
        cloneConfig.searchFn && cloneConfig.searchFn()
      } else {
        console.log('error searchFn!')
      }
    }

    const exportFn = async() => {
      const verify = await validate()
      if (verify) {
        emit('export')
        cloneConfig.exportFn && cloneConfig.exportFn()
      } else {
        console.log('error exportFn!')
      }
    }

    const currentExportState = ref(false) // 当前收起展开状态 默认收起
    const expandFn = () => {
      currentExportState.value = !currentExportState.value
      cloneConfig.columns && cloneConfig.columns.forEach((item: columnsBase) => {
        if (!item.hide && item?.expandDefault !== undefined) {
          item.expandDefault = currentExportState.value
        }
      })
    }

    // 部分select组件，后台需要设置两个值   比如：选择人员，后台同时需要 人员id和人员名称时
    const setProp2 = (prop2: string, value: any) => {
      initForm.value[prop2] = value
      updateModelValue()
    }

    const resetFn = async() => {
      emit('reset')
      cloneConfig.resetFn && cloneConfig.resetFn()
      ruleFormRef.value.resetFields()
      updateModelValue()
    }

    // 根据item：columnsFormBase获取返回对应的src/components里的组件
    const componentRender = (item: columnsBase) => {
      const componentInstance = widget.getComponentByType(item)
      return <componentInstance
        v-models={[
          [initForm.value[item.prop]],
          [initForm.value[(item as {propEnd?: any}).propEnd], 'propEnd'],
          [initForm.value[(item as {files?: any}).files], 'fileList'],
        ]}
        config={item}
        onChange={(params: any) => {
          item?.change && item?.change(params)
          updateModelValue()
        }}
        onSetProp2={(value: any) => {
          item.prop2 && setProp2(item.prop2, value)
        }}
      />
    }

    return () => {
      return (
        <div class="BaseForm">
          <el-form
            ref={ruleFormRef}
            v-loading={cloneConfig.loading}
            label-width={cloneConfig.labelWidth || '100px'}
            model={initForm.value}
            rules={rules}
            validate-on-rule-change={false}
            class="ruleForm"
            disabled={cloneConfig.disabled}
            {...cloneConfig.nativeProps}
          >
            <el-row gutter={15}>
              {cloneConfig.columns.map((item) => {
                return (
                  <>
                    {item.hide !== true && item.expandDefault !== false && (
                      <el-col
                        xs={
                          item.colNum || props.config.colNum || getSpan(item)[0]
                        }
                        sm={
                          item.colNum || props.config.colNum || getSpan(item)[1]
                        }
                        md={
                          item.colNum || props.config.colNum || getSpan(item)[2]
                        }
                        lg={
                          item.colNum || props.config.colNum || getSpan(item)[3]
                        }
                        xl={
                          item.colNum || props.config.colNum || getSpan(item)[4]
                        }
                      >
                        <el-form-item
                          label-width={
                            item.labelWidth ||
                            props.config.labelWidth ||
                            '100px'
                          }
                          label={item.label}
                          prop={item.prop}
                        >
                          {
                            item.type === 'render' // 自定义render函数（只替换form-item-conent部分，label不会被render）
                              ? item?.render() // ep-form-item__content 部分的render函数
                              : componentRender(item) // 根据item：columnsFormBase中的type属性获取对应的自定义组件
                          }
                        </el-form-item>
                      </el-col>
                    )}
                  </>
                )
              })}
              {!cloneConfig.notOpBtn && cloneConfig.columns?.length > 0 && (
                <el-col span={cloneConfig.opBtnCol} class="btn-wrap">
                  <div style="display: flex;align-items: center;height: 100%;padding-bottom: 18px;box-sizing: border-box;">
                    {cloneConfig.isSearch && (
                      <el-button
                        type="primary"
                        size="small"
                        onClick={() => {
                          searchFn()
                        }}
                      >
                    搜索
                      </el-button>
                    )}
                    {cloneConfig.isReset && (
                      <el-button
                        type="warning"
                        size="small"
                        onClick={() => {
                          resetFn()
                        }}
                      >
                      重置
                      </el-button>
                    )}
                    {cloneConfig.isExport && (
                      <el-button
                        type="warning"
                        size="small"
                        onClick={() => {
                          exportFn()
                        }}
                      >
                        导出
                      </el-button>
                    )}
                    {cloneConfig.isExpand && (
                      <el-button
                        type="primary"
                        size="small"
                        onClick={() => {
                          expandFn()
                        }}
                      >
                        {currentExportState.value ? '收起' : '展开'}
                      </el-button>
                    )}
                    {cloneConfig.appendOpBtn && cloneConfig.appendOpBtn()}
                  </div>
                </el-col>
              )}
            </el-row>
          </el-form>
        </div>
      )
    }
  },
})
