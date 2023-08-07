import numberRange from '../../../src/components/BsForm/components/BsNumberRange';
export default numberRange;
export declare const BsNumberRange: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    propEnd: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").numberRangeProps>>;
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
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").numberRangeProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:propEnd"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    config: Partial<import("../../../src/components/BsForm/interface/index").numberRangeProps>;
    propEnd: string | number;
}, {}>;
export * from '../../../src/components/BsForm/interface/index';
