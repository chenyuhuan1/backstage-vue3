import { PropType } from 'vue';
import { formConfig } from './interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default(): {};
    };
    config: {
        type: PropType<formConfig>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "update:modelValue" | "search" | "export")[], "reset" | "update:modelValue" | "search" | "export", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default(): {};
    };
    config: {
        type: PropType<formConfig>;
        default(): {};
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onExport?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    config: formConfig;
}, {}>;
export default _default;
export * from './interface/index';
