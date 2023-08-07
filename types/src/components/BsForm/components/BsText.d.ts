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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    config: {
        type: PropType<Partial<textProps>>;
        default(): {};
    };
}>>, {
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    config: Partial<textProps>;
}, {}>;
export default _default;
export * from '../interface/index';
