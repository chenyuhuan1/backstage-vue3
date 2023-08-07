import { PropType } from 'vue';
import { textProps } from '../interface/index';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    config: {
        type: PropType<Partial<textProps>>;
        default(): {};
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    config?: unknown;
} & {
    config: Partial<textProps>;
} & {
    modelValue?: string | number | boolean | unknown[] | Record<string, any> | undefined;
}>, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<textProps>;
}>;
export default _default;
export * from '../interface/index';
