/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 17:13:23
 * @LastEditTime: 2023-09-07 10:06:40
 * @LastEditors: 陈宇环
 * @Description: 表单组件
 */

import { defineComponent, PropType, watch, ref, reactive, nextTick, ComponentPublicInstance } from 'vue'
import { formConfig, columnsBase, inlayRuleType } from './interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { commonRules, rulesIn } from '@/utils/validator'
import styles from '@/components/BsForm/style.module.scss'
// 导入所有自定义form控件组件
import * as widget from './components/index'
import { editTableColumnsConfigFace, editTableConfigFace } from '../BsEditTable'
export default defineComponent({
  name: 'BsForm',
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
    type refItem = Element | ComponentPublicInstance | null
    const refMap: Record<string, any> = {}
    const setRefMap = (el: refItem, item: columnsBase) => {
      if (el) {
        refMap[`${item.prop}`] = el
      }
    }

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

    // 正则验证
    const asyncValidator = (val: string | number | any[], type: keyof rulesIn) => val ? commonRules[type][0].test(val) : true
    // 错误消息打印
    const asyncMessage = (type: keyof rulesIn) => commonRules[type][1]

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
            ...(item.inlayRules ? item.inlayRules.map((item: inlayRuleType) => { // 内置校验配置
              return {
                validator: (rule: any, value: any) => {
                  if (!asyncValidator(value, item.validatorName)) {
                    return Promise.reject(item.message ?? asyncMessage(item.validatorName))
                  }
                  return Promise.resolve()
                },
                trigger: item.trigger ?? 'change',
              }
            }) : []),
            ...(item.rules ? item.rules : []), // 自定义rules
            ...(item.type === 'editTable' ? [{ validator: async() => { // table行内编辑table
              const res = await refMap[item.prop]?.validate()
              if (res) {
                return Promise.resolve(true)
              } else {
                return Promise.reject(false)
              }
            }, trigger: 'blur', message: '请检查数据填写！' }] : []),
          ]
        }
      })
      Object.assign(rules, cloneRules)
    }

    watch(
      () => props.config,
      () => {
        Object.assign(cloneConfig, defaultConfig, props.config)
        initFormFn()
        initRulesFn()
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
        ruleFormRef.value.validate().then(() => {
          resolve(true)
        })
          .catch((err:any) => {
            console.log(err)
            resolve(false)
          })
      })
    }

    // 验证表单具体的某个字段方法-已暴露
    const validateField = async(prop?: string | string[]) => {
      return new Promise(async(resolve) => {
        await nextTick()
        const fn:any = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? ruleFormRef.value?.validateFields(prop) : ruleFormRef.value?.validateField(prop)
        fn.then(() => {
          resolve(true)
        })
          .catch((err:any) => {
            console.log(err)
            resolve(false)
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

    const searchFn = async() => {
      const verify = await validate()
      if (verify) {
        cloneConfig.loading = true
        emit('search')
        await (cloneConfig.searchFn && cloneConfig.searchFn(initForm.value))
        cloneConfig.loading = false
      } else {
        console.log('error searchFn!')
      }
    }

    const exportFn = async() => {
      const verify = await validate()
      if (verify) {
        cloneConfig.loading = true
        emit('export')
        await (cloneConfig.exportFn && cloneConfig.exportFn(initForm.value))
        cloneConfig.loading = false
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
      ruleFormRef.value.resetFields()
      updateModelValue()
      setTimeout(() => { // 避免在resetFn方法/reset事件中设置没有resetFields的字段，如prorEnd中的字段会失败问题
        emit('reset')
        cloneConfig.resetFn && cloneConfig.resetFn()
      })
    }
    expose({ validate, resetFields, clearValidate, scrollToField, validateField, resetFn })

    // 根据item：columnsBase获取返回对应的src/components里的组件
    const componentRender = (item: columnsBase) => {
      const componentInstance = widget.getComponentByType(item.type)
      if (item.type === 'editTable') {
        return <componentInstance
          ref={(el: refItem) => setRefMap(el, item)}
          v-models={[
            [initForm.value[item.prop]],
          ]}
          columns={(item as {columns?: editTableColumnsConfigFace})?.columns ?? undefined} // 行编辑表格
          editTableConfig={(item as {editTableConfig?: editTableConfigFace})?.editTableConfig ?? undefined} // 行编辑表格
          onChange={(params: any) => {
            updateModelValue()
            validateField(item.prop)
            item?.change && item?.change(params)
          }}
        />
      }
      return <componentInstance
        ref={(el: refItem) => setRefMap(el, item)}
        v-models={[
          [initForm.value[item.prop]],
          [initForm.value[(item as {propEnd?: any}).propEnd], 'propEnd'],
          [initForm.value[(item as {files?: any}).files], 'fileList'],
          [initForm.value[(item as {propSecond?: any}).propSecond], 'propSecond'],
          [initForm.value[(item as {propThird?: any}).propThird], 'propThird'],
        ]}
        config={item}
        textMode={cloneConfig.textMode || item.textMode}
        onChange={(params: any) => {
          updateModelValue()
          item?.change && item?.change(params)
        }}
        onSetProp2={(value: any) => {
          item.prop2 && setProp2(item.prop2, value)
        }}
      />
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicForm, dynamicRow, dynamicCol,  dynamicFormItem, dynamicButton } = dynamicComponent
      return (
        <div class={['bs-form', styles.BsForm]}>
          <dynamicForm
            ref={ruleFormRef}
            v-loading={cloneConfig.loading}
            label-width={cloneConfig.labelWidth || '100px'}
            model={initForm.value}
            rules={rules}
            validate-on-rule-change={false}
            disabled={cloneConfig.disabled}
            {...cloneConfig.nativeProps}
          >
            <dynamicRow gutter={15}>
              {cloneConfig.columns.map((item) => {
                return (
                  <>
                    {item.hide !== true && item.expandDefault !== false && (
                      <dynamicCol
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
                        <dynamicFormItem
                          label-width={
                            item.labelWidth ||
                            props.config.labelWidth ||
                            '100px'
                          }
                          label={item.label}
                          prop={CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? undefined : item.prop}
                          name={item.prop}
                        >
                          {
                            item.type === 'render' // 自定义render函数（只替换form-item-conent部分，label不会被render）
                              ? item?.render() // ep-form-item__content 部分的render函数
                              : componentRender(item) // 根据item：columnsFormBs中的type属性获取对应的自定义组件
                          }
                          <div style={{ width: '100%', lineHeight: 1 }}>{item.bottomNoteRender && item.bottomNoteRender()}</div>
                        </dynamicFormItem>
                      </dynamicCol>
                    )}
                  </>
                )
              })}
              {!cloneConfig.notOpBtn && cloneConfig.columns?.length > 0 && (
                <dynamicCol span={cloneConfig.opBtnCol}>
                  <div style="display: flex;align-items: center;height: 100%;padding-bottom: 18px;box-sizing: border-box;">
                    {cloneConfig.isSearch && (
                      <dynamicButton
                        type="primary"
                        size="small"
                        {...cloneConfig.searchBtnProps}
                        onClick={() => {
                          searchFn()
                        }}
                      >
                    搜索
                      </dynamicButton>
                    )}
                    {cloneConfig.isReset && (
                      <dynamicButton
                        type="warning"
                        size="small"
                        {...cloneConfig.resetBtnProps}
                        onClick={() => {
                          resetFn()
                        }}
                      >
                      重置
                      </dynamicButton>
                    )}
                    {cloneConfig.isExport && (
                      <dynamicButton
                        type="warning"
                        size="small"
                        {...cloneConfig.exportBtnProps}
                        onClick={() => {
                          exportFn()
                        }}
                      >
                        导出
                      </dynamicButton>
                    )}
                    {cloneConfig.isExpand && (
                      <dynamicButton
                        type="primary"
                        size="small"
                        {...cloneConfig.expandBtnProps}
                        onClick={() => {
                          expandFn()
                        }}
                      >
                        {currentExportState.value ? '收起' : '展开'}
                      </dynamicButton>
                    )}
                    {cloneConfig.appendOpBtn && cloneConfig.appendOpBtn()}
                  </div>
                </dynamicCol>
              )}
            </dynamicRow>
          </dynamicForm>
        </div>
      )
    }
  },
})

export * from './interface/index'
