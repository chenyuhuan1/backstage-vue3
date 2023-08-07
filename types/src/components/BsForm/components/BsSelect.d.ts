import { PropType } from 'vue';
import { selectProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    config: {
        type: PropType<Partial<selectProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "setProp2")[], "change" | "update:modelValue" | "setProp2", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    config: {
        type: PropType<Partial<selectProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSetProp2?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<selectProps>;
}, {}>;
export default _default;
export * from '../interface/index';
