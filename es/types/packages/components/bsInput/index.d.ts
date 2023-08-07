import input from '../../../src/components/BsForm/components/BsInput';
export default input;
export declare const BsInput: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").inputProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string | number;
    config: Partial<import("../../../src/components/BsForm/interface/index").inputProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    config: Partial<import("../../../src/components/BsForm/interface/index").inputProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
