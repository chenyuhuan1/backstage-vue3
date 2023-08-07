import date from '../../../src/components/BsForm/components/BsDate';
export default date;
export declare const BsDate: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").dateProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string;
    config: Partial<import("../../../src/components/BsForm/interface/index").dateProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    config: Partial<import("../../../src/components/BsForm/interface/index").dateProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
