import { PropType } from 'vue';
import { columnsConfigFace, loadDataFace, pagingConfigFace, tableConfigFace } from './interface/index';
declare const _default: import("vue").DefineComponent<{
    tableConfig: {
        type: PropType<tableConfigFace>;
        default(): {};
    };
    pagingConfig: {
        type: PropType<pagingConfigFace>;
        default(): {};
    };
    columns: {
        type: PropType<columnsConfigFace>;
        required: true;
        default(): never[];
    };
    loadData: {
        type: PropType<loadDataFace>;
        required: true;
        default(): () => Promise<unknown>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableConfig: {
        type: PropType<tableConfigFace>;
        default(): {};
    };
    pagingConfig: {
        type: PropType<pagingConfigFace>;
        default(): {};
    };
    columns: {
        type: PropType<columnsConfigFace>;
        required: true;
        default(): never[];
    };
    loadData: {
        type: PropType<loadDataFace>;
        required: true;
        default(): () => Promise<unknown>;
    };
}>>, {
    tableConfig: tableConfigFace;
    pagingConfig: pagingConfigFace;
    columns: columnsConfigFace;
    loadData: loadDataFace;
}, {}>;
export default _default;
export * from './interface/index';
