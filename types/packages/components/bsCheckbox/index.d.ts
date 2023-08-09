import checkbox from '../../../src/components/BsForm/components/BsCheckbox';
export default checkbox;
export declare const BsCheckbox: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default(): never[];
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").checkboxProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default(): never[];
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").checkboxProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: unknown[];
    config: Partial<import("../../../src/components/BsForm/interface/index").checkboxProps>;
}, {}>;
export * from '../../../src/components/BsForm/interface/index';
