declare type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
    [propName: string]: any;
} | {
    [index: number]: any;
};
declare function fetchSet(table: string | number, params: {
    [propName: string]: ['geo', ...any[]] | dataType;
}): Promise<unknown>;
declare function initFetchSet(): typeof fetchSet;
export default initFetchSet;
