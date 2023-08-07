export declare const session: (key: string, value?: any) => any;
export declare function isObject(obj: unknown): boolean;
export declare function replaceParenthesis(url: string, sourceData: any): string;
/**
 * @description [fnDownload 下载文件]
 * @author   zoumiao
 * @param {Object} data [blob数据]
 * @param {String} title [文件名称]
 * @returns   {null}    [没有返回]
 */
export declare function exportFile(data: any, title: string): boolean;
export declare function $download(params: {
    filetype?: string;
    title: string;
    data: any;
    callback: () => void;
}): void;
export declare function getDicByKey(key: string): any;
export declare function treeForeach(tree: any[], func: (node: any) => any | void, childrenKey?: string): void;
export declare const dotNumber: (value: number | string, num?: number | undefined, ignoreStr?: boolean | undefined) => string | number;
/**
 * 根据code判断是否要显示按钮（按钮权限控制）
 * @param code
 * @returns {*}
 */
export declare const isHavePermission: (code: string) => boolean;
