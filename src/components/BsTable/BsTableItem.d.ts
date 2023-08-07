import { PropType } from 'vue';
import { columnsItemConfig } from './interface/index';
declare const _default: import("vue").DefineComponent<{
    itemData: {
        type: PropType<columnsItemConfig>;
        default(): {
            prop: string;
            label: string;
        };
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    itemData?: unknown;
} & {
    itemData: columnsItemConfig;
} & {}>, {
    itemData: columnsItemConfig;
}>;
export default _default;
