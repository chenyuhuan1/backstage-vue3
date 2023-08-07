import { PropType } from 'vue';
import { radioProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: PropType<Partial<radioProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "setProp2")[], "change" | "update:modelValue" | "setProp2", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    config: Partial<radioProps>;
} & {
    modelValue?: string | number | boolean | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSetProp2?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
    config: Partial<radioProps>;
}>;
export default _default;
export * from '../interface/index';
