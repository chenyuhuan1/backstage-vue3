import { PropType } from 'vue';
import { cascaderProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    config: {
        type: PropType<Partial<cascaderProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<cascaderProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<cascaderProps>;
}>;
export default _default;
export * from '../interface/index';
