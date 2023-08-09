import { PropType } from 'vue';
import { numberRangeProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    propEnd: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: PropType<Partial<numberRangeProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "update:propEnd")[], "change" | "update:modelValue" | "update:propEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    propEnd: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: PropType<Partial<numberRangeProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:propEnd"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    config: Partial<numberRangeProps>;
    propEnd: string | number;
}, {}>;
export default _default;
export * from '../interface/index';
