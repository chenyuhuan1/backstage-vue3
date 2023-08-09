import table from '../../../src/components/BsTable/index';
export default table;
export declare const BsTable: import("vue").DefineComponent<{
    tableConfig: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").tableConfigFace>;
        default(): {};
    };
    pagingConfig: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").pagingConfigFace>;
        default(): {};
    };
    columns: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").columnsConfigFace>;
        required: true;
        default(): never[];
    };
    loadData: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").loadDataFace>;
        required: true;
        default(): () => Promise<unknown>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableConfig: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").tableConfigFace>;
        default(): {};
    };
    pagingConfig: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").pagingConfigFace>;
        default(): {};
    };
    columns: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").columnsConfigFace>;
        required: true;
        default(): never[];
    };
    loadData: {
        type: import("vue").PropType<import("../../../src/components/BsTable/index").loadDataFace>;
        required: true;
        default(): () => Promise<unknown>;
    };
}>>, {
    tableConfig: import("../../../src/components/BsTable/index").tableConfigFace;
    pagingConfig: import("../../../src/components/BsTable/index").pagingConfigFace;
    columns: import("../../../src/components/BsTable/index").columnsConfigFace;
    loadData: import("../../../src/components/BsTable/index").loadDataFace;
}, {}>;
export * from '../../../src/components/BsTable/interface/index';
