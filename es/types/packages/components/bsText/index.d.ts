import text from '../../../src/components/BsForm/components/BsText';
export default text;
export declare const BsText: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").textProps>>;
        default(): {};
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    config: Partial<import("../../../src/components/BsForm/interface/index").textProps>;
} & {
    modelValue?: string | number | boolean | unknown[] | Record<string, any> | undefined;
}>, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<import("../../../src/components/BsForm/interface/index").textProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
