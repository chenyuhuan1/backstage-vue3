/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 11:33:03
 * @LastEditTime: 2023-07-03 15:35:48
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref } from 'vue';
import styles from '@/components/BsForm/style.module.scss';
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent';
import dayjs from 'dayjs';
export default defineComponent({
    name: 'BsDate',
    props: {
        modelValue: {
            type: String,
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
        function getFormat(type, formatType) {
            if (type === 'date') {
                return 'YYYY-MM-DD';
            }
            if (type === 'month') {
                return 'YYYY-MM';
            }
            if (type === 'year') {
                return 'YYYY';
            }
            if (type === 'week') {
                if (formatType === 'format') {
                    return '第 ww 周';
                }
                else {
                    return '';
                }
            }
            if (type === 'datetime') {
                return 'YYYY-MM-DD HH:mm:ss';
            }
            return 'YYYY-MM-DD';
        }
        const cloneModelValue = ref(dayjs());
        watch(() => props.modelValue, () => {
            cloneModelValue.value = props.modelValue;
        }, { immediate: true });
        // 解决datetime类型，不点击确认按钮无法触发change事件bug
        watch(() => cloneModelValue.value, () => {
            updateValue(cloneModelValue.value);
        });
        function updateValue(value) {
            console.log(value, 'value');
            emit('update:modelValue', value);
            emit('change', {
                prop: props.config?.prop ?? '',
                value,
            });
        }
        return () => {
            const dynamicComponent = new CustomDynamicComponent();
            const { dynamicDatePicker } = dynamicComponent;
            return <div class={['BsDate', styles.width100]}>
        <dynamicDatePicker class={['date', styles.width100]} v-model={cloneModelValue.value} placeholder={props.config.placeholder || `请选择${props.config?.label ?? ''}`} disabled={!!props.config.disabled} format={props.config.format || getFormat(props.config.type, 'format')} value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')} 
            /** ant-design-vue && ele 统一封装 - start */
            type={props.config.type || 'date'} /** ele 专有属性*/ picker={props.config.type || 'date'} /** ant-design-vue专有属性*/ clearable={props.config.clearable !== false} // ele 特有属性
             allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
             
            /** ant-design-vue && ele 统一封装 - end */
            {...props.config.nativeProps} onChange={updateValue}/>
      </div>;
        };
    },
});
export * from '../interface/index';
//# sourceMappingURL=BsDate.jsx.map