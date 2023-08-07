import { PropType } from 'vue';
import { checkboxProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default(): never[];
    };
    config: {
        type: PropType<Partial<checkboxProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default(): never[];
    };
    config: {
        type: PropType<Partial<checkboxProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: unknown[];
    config: Partial<checkboxProps>;
}, {}>;
export default _default;
export * from '../interface/index';
