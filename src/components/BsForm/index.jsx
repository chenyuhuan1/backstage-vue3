/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 17:13:23
 * @LastEditTime: 2023-06-26 14:53:57
 * @LastEditors: 陈宇环
 * @Description: 表单组件
 */
import { defineComponent, watch, ref, reactive, nextTick } from 'vue';
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent';
import { commonRules } from '@/utils/validator';
// 导入所有自定义form控件组件
import * as widget from './components/index';
export default defineComponent({
    name: 'BsForm',
    props: {
        modelValue: {
            type: Object,
            default() {
                return {};
            },
        },
        config: {
            type: Object,
            default() {
                return {}; // 默认值请看defaultConfig变量
            },
        },
    },
    emits: ['update:modelValue', 'search', 'export', 'reset'],
    setup(props, { emit, expose }) {
        // 获取表单组件实例
        const ruleFormRef = ref();
        // config默认值- 没有通过props默认值是因为想实现config字段级别的默认值
        const defaultConfig = {
            colNum: 6,
            columns: [],
            labelWidth: '100px',
            notOpBtn: false,
            opBtnCol: 6,
            isSearch: true,
            isReset: true,
            isExport: false, // 是否需要导出按钮
        };
        const cloneConfig = reactive({
            ...defaultConfig,
            ...props.config,
        });
        // 初始绑定表单
        const initForm = reactive({ value: {} });
        // 校验规则
        const rules = reactive({});
        /**
         * 表单默认值、rules初始化
         * */
        const initFormFn = async () => {
            const cloneInitForm = {};
            cloneConfig.columns.forEach((item) => {
                if (item.multiple) {
                    cloneInitForm[item.prop] = props.modelValue[item.prop]
                        ? Array.isArray(props.modelValue[item.prop])
                            ? props.modelValue[item.prop]
                            : [props.modelValue[item.prop]]
                        : undefined;
                }
                else {
                    cloneInitForm[item.prop] = props.modelValue[item.prop];
                }
            });
            initForm.value = { ...props.modelValue, ...cloneInitForm };
        };
        // 正则验证
        const asyncValidator = (val, type) => val ? commonRules[type][0].test(val) : true;
        // 错误消息打印
        const asyncMessage = (type) => commonRules[type][1];
        const initRulesFn = () => {
            const cloneRules = {};
            cloneConfig.columns.forEach((item) => {
                if (!item.hide) {
                    cloneRules[item.prop] = [
                        {
                            required: item.required,
                            message: `${['input', 'textarea'].includes(item.type) ? '请输入' : '请选择'}${item.label}`,
                            trigger: 'change',
                        },
                        ...(item.inlayRules ? item.inlayRules.map((item) => {
                            return {
                                validator: (rule, value) => {
                                    if (!asyncValidator(value, item.validatorName)) {
                                        return Promise.reject(item.message ?? asyncMessage(item.validatorName));
                                    }
                                    return Promise.resolve();
                                },
                                trigger: item.trigger ?? 'change',
                            };
                        }) : []),
                        ...(item.rules ? item.rules : []),
                    ];
                }
            });
            Object.assign(rules, cloneRules);
        };
        watch(() => props.config, () => {
            Object.assign(cloneConfig, defaultConfig, props.config);
            initRulesFn();
            initFormFn();
        }, { immediate: true, deep: true });
        watch(() => props.modelValue, () => {
            initFormFn();
        }, { immediate: true, deep: true });
        const updateModelValue = () => {
            emit('update:modelValue', initForm.value);
        };
        // 自适应列宽
        const getSpan = (item) => {
            const spanArray = [12, 8, 8, 6, 6]; // [xs,sm,md,lg,xl]
            // 对时间区间做特殊处理
            if (item.type.indexOf('Range') !== -1) {
                // 区间为分栏数量的两倍
                return spanArray.map((v) => v * 2);
            }
            return spanArray;
        };
        // 表单整体校验方法-已暴露
        const validate = async () => {
            return new Promise(async (resolve) => {
                await nextTick();
                ruleFormRef.value.validate().then(() => {
                    resolve(true);
                })
                    .catch((err) => {
                    console.log(err);
                    resolve(false);
                });
            });
        };
        // 验证表单具体的某个字段方法-已暴露
        const validateField = async (prop) => {
            return new Promise(async (resolve) => {
                await nextTick();
                ruleFormRef.value.validateFields(prop).then(() => {
                    resolve(true);
                })
                    .catch((err) => {
                    console.log(err);
                    resolve(false);
                });
            });
        };
        // 表单重置方法-已暴露
        const resetFields = async (prop) => {
            await nextTick();
            ruleFormRef.value?.resetFields(prop);
            updateModelValue();
        };
        // 清理表单验证信息-已暴露
        const clearValidate = async (prop) => {
            await nextTick();
            ruleFormRef.value?.clearValidate(prop);
        };
        const scrollToField = async (field) => {
            await nextTick();
            ruleFormRef.value?.scrollToField(field);
        };
        const searchFn = async () => {
            const verify = await validate();
            if (verify) {
                cloneConfig.loading = true;
                emit('search');
                await (cloneConfig.searchFn && cloneConfig.searchFn(initForm.value));
                cloneConfig.loading = false;
            }
            else {
                console.log('error searchFn!');
            }
        };
        const exportFn = async () => {
            const verify = await validate();
            if (verify) {
                cloneConfig.loading = true;
                emit('export');
                await (cloneConfig.exportFn && cloneConfig.exportFn(initForm.value));
                cloneConfig.loading = false;
            }
            else {
                console.log('error exportFn!');
            }
        };
        const currentExportState = ref(false); // 当前收起展开状态 默认收起
        const expandFn = () => {
            currentExportState.value = !currentExportState.value;
            cloneConfig.columns && cloneConfig.columns.forEach((item) => {
                if (!item.hide && item?.expandDefault !== undefined) {
                    item.expandDefault = currentExportState.value;
                }
            });
        };
        // 部分select组件，后台需要设置两个值   比如：选择人员，后台同时需要 人员id和人员名称时
        const setProp2 = (prop2, value) => {
            initForm.value[prop2] = value;
            updateModelValue();
        };
        const resetFn = async () => {
            ruleFormRef.value.resetFields();
            updateModelValue();
            setTimeout(() => {
                emit('reset');
                cloneConfig.resetFn && cloneConfig.resetFn();
            });
        };
        expose({ validate, resetFields, clearValidate, scrollToField, validateField, resetFn });
        // 根据item：columnsFormBase获取返回对应的src/components里的组件
        const componentRender = (item) => {
            const componentInstance = widget.getComponentByType(item);
            return <componentInstance v-models={[
                    [initForm.value[item.prop]],
                    [initForm.value[item.propEnd], 'propEnd'],
                    [initForm.value[item.files], 'fileList'],
                ]} config={item} onChange={(params) => {
                    item?.change && item?.change(params);
                    updateModelValue();
                }} onSetProp2={(value) => {
                    item.prop2 && setProp2(item.prop2, value);
                }}/>;
        };
        return () => {
            const dynamicComponent = new CustomDynamicComponent();
            const { dynamicForm, dynamicRow, dynamicCol, dynamicFormItem, dynamicButton } = dynamicComponent;
            return (<div class="BsForm">
          <dynamicForm ref={ruleFormRef} v-loading={cloneConfig.loading} label-width={cloneConfig.labelWidth || '100px'} model={initForm.value} rules={rules} validate-on-rule-change={false} class="ruleForm" disabled={cloneConfig.disabled} {...cloneConfig.nativeProps}>
            <dynamicRow gutter={15}>
              {cloneConfig.columns.map((item) => {
                    return (<>
                    {item.hide !== true && item.expandDefault !== false && (<dynamicCol xs={item.colNum || props.config.colNum || getSpan(item)[0]} sm={item.colNum || props.config.colNum || getSpan(item)[1]} md={item.colNum || props.config.colNum || getSpan(item)[2]} lg={item.colNum || props.config.colNum || getSpan(item)[3]} xl={item.colNum || props.config.colNum || getSpan(item)[4]}>
                        <dynamicFormItem label-width={item.labelWidth ||
                                props.config.labelWidth ||
                                '100px'} label={item.label} prop={CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? undefined : item.prop} name={item.prop}>
                          {item.type === 'render' // 自定义render函数（只替换form-item-conent部分，label不会被render）
                                ? item?.render() // ep-form-item__content 部分的render函数
                                : componentRender(item) // 根据item：columnsFormBs中的type属性获取对应的自定义组件
                            }
                        </dynamicFormItem>
                      </dynamicCol>)}
                  </>);
                })}
              {!cloneConfig.notOpBtn && cloneConfig.columns?.length > 0 && (<dynamicCol span={cloneConfig.opBtnCol} class="btn-wrap">
                  <div style="display: flex;align-items: center;height: 100%;padding-bottom: 18px;box-sizing: border-box;">
                    {cloneConfig.isSearch && (<dynamicButton type="primary" size="small" onClick={() => {
                            searchFn();
                        }}>
                    搜索
                      </dynamicButton>)}
                    {cloneConfig.isReset && (<dynamicButton type="warning" size="small" onClick={() => {
                            resetFn();
                        }}>
                      重置
                      </dynamicButton>)}
                    {cloneConfig.isExport && (<dynamicButton type="warning" size="small" onClick={() => {
                            exportFn();
                        }}>
                        导出
                      </dynamicButton>)}
                    {cloneConfig.isExpand && (<dynamicButton type="primary" size="small" onClick={() => {
                            expandFn();
                        }}>
                        {currentExportState.value ? '收起' : '展开'}
                      </dynamicButton>)}
                    {cloneConfig.appendOpBtn && cloneConfig.appendOpBtn()}
                  </div>
                </dynamicCol>)}
            </dynamicRow>
          </dynamicForm>
        </div>);
        };
    },
});
export * from './interface/index';
//# sourceMappingURL=index.jsx.map