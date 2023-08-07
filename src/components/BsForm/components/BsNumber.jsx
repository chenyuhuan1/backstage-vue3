/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:19:17
 * @LastEditTime: 2023-06-06 11:37:35
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent } from 'vue';
import styles from '@/components/BsForm/style.module.scss';
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent';
export default defineComponent({
    name: 'BsNumber',
    props: {
        modelValue: {
            type: [String, Number],
            default: undefined,
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
        const { dynamicNumber } = new CustomDynamicComponent();
        function updateValue(value) {
            emit('update:modelValue', value);
            emit('change', {
                prop: props.config?.prop ?? '',
                value,
            });
        }
        return () => {
            return <div class={['BsNumber', styles.width100, styles.BsNumber]}>
        <dynamicNumber style={{ width: '100%' }} class={{ number: true, textLeft: props.config.controls !== true }} model-value={props.modelValue} placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`} disabled={!!props.config.disabled} controls={props.config.controls === true} {...props.config.nativeProps} onInput={updateValue}/>
      </div>;
        };
    },
});
export * from '../interface/index';
//# sourceMappingURL=BsNumber.jsx.map