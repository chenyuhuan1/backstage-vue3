import cascader from '../../../src/components/BsForm/components/BsCascader';
export default cascader;
export declare const BsCascader: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").cascaderProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<import("../../../src/components/BsForm/interface/index").cascaderProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<import("../../../src/components/BsForm/interface/index").cascaderProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
