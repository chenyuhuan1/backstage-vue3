import radio from '../../../src/components/BsForm/components/BsRadio';
export default radio;
export declare const BsRadio: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").radioProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "setProp2")[], "change" | "update:modelValue" | "setProp2", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").radioProps>>;
        default(): {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSetProp2?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
    config: Partial<import("../../../src/components/BsForm/interface/index").radioProps>;
}, {}>;
export * from '../../../src/components/BsForm/interface/index';
