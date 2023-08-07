import select from '../../../src/components/BsForm/components/BsSelect';
export default select;
export declare const BsSelect: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("../../../src/components/BsForm/interface/index").selectProps>>;
        default(): {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "setProp2")[], "change" | "update:modelValue" | "setProp2", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<import("../../../src/components/BsForm/interface/index").selectProps>;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSetProp2?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<import("../../../src/components/BsForm/interface/index").selectProps>;
}>;
export * from '../../../src/components/BsForm/interface/index';
