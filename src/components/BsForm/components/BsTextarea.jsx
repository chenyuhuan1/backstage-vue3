/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:37:53
 * @LastEditTime: 2023-07-03 15:40:49
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent } from 'vue';
import styles from '@/components/BsForm/style.module.scss';
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent';
export default defineComponent({
    name: 'BsTextarea',
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
        config: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
        const { dynamicTextarea } = new CustomDynamicComponent();
        function updateValue(value) {
            let cloneValue = value;
            // ant-Design-vue 无input事件，value获取到的是原生input事件的e
            if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
                cloneValue = value.target.value;
            }
            emit('update:modelValue', cloneValue);
            emit('change', {
                prop: props.config?.prop ?? '',
                value: cloneValue,
            });
        }
        return () => {
            return <div class={['BsTextarea', styles.width100]}>
        <dynamicTextarea class="textarea" type='textarea' model-value={props.modelValue} placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`} disabled={!!props.config.disabled} 
            /** ant-design-vue && ele 统一封装 - start */
            clearable={props.config.clearable !== false} // ele 特有属性 - 清除按钮
             allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
             rows={props.config.rows || 3} // ele 特有属性 - 默认area行数
             autoSize={props.config.autoSize || { minRows: 3, maxRows: 3 }} // ant-design-vue特有属性 - 默认area行数
             
            /** ant-design-vue && ele 统一封装 - end */
            {...props.config.nativeProps} onInput={updateValue}/>
      </div>;
        };
    },
});
export * from '../interface/index';
//# sourceMappingURL=BsTextarea.jsx.map