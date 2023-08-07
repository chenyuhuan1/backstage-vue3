import form from '../../../src/components/BsForm/index';
export default form;
export declare const BsForm: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default(): {};
    };
    config: {
        type: import("vue").PropType<import("../../../src/components/BsForm/index").formConfig>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "update:modelValue" | "search" | "export")[], "search" | "reset" | "update:modelValue" | "export", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: Record<string, any>;
    config: import("../../../src/components/BsForm/index").formConfig;
} & {}> & {
    onReset?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onExport?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    config: import("../../../src/components/BsForm/index").formConfig;
}>;
export * from '../../../src/components/BsForm/interface/index';
