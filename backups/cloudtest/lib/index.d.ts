export declare const getb: (table: string | number, id: string, params?: {
    select?: string[] | undefined;
    expand?: string[] | undefined;
}) => Promise<unknown>;
export declare const get: (table: string | number, id: string, params?: {
    select?: string[] | undefined;
    expand?: string[] | undefined;
}) => Promise<unknown>;
export declare const set: (table: string | number, params: {
    [propName: string]: string | number | boolean | string[] | number[] | boolean[] | {
        [propName: string]: any;
    } | {
        [index: number]: any;
    } | ["geo", ...any[]] | null | undefined;
}) => Promise<unknown>;
declare const _default: {
    get: (table: string | number, id: string, params?: {
        select?: string[] | undefined;
        expand?: string[] | undefined;
    }) => Promise<unknown>;
    set: (table: string | number, params: {
        [propName: string]: string | number | boolean | string[] | number[] | boolean[] | {
            [propName: string]: any;
        } | {
            [index: number]: any;
        } | ["geo", ...any[]] | null | undefined;
    }) => Promise<unknown>;
};
export default _default;
