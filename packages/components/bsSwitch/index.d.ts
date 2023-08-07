import switchC from '../../../src/components/BsForm/components/BsSwitch';
export default switchC;
export declare const BsSwitch: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").switchProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string | number | boolean;
    config: Partial<import("../../../src/components/BsForm/interface/index").switchProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
    config: Partial<import("../../../src/components/BsForm/interface/index").switchProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
