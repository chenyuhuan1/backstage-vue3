import { PropType } from 'vue';
import { textareaProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    config: {
        type: PropType<Partial<textareaProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    config: {
        type: PropType<Partial<textareaProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    config: Partial<textareaProps>;
}, {}>;
export default _default;
export * from '../interface/index';
