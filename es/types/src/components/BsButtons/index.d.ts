import { PropType } from 'vue';
import { buttonFace } from './interface/index';
declare const _default: import("vue").DefineComponent<{
    buttons: {
        type: PropType<buttonFace[]>;
        default(): never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    buttons?: unknown;
} & {
    buttons: buttonFace[];
} & {}>, {
    buttons: buttonFace[];
}>;
export default _default;
export * from './interface/index';
