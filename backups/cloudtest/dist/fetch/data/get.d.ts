declare function fetchGet(table: string | number, id: string, params?: {
    select?: string[];
    expand?: string[];
}): Promise<unknown>;
declare function initFetchGet(): typeof fetchGet;
export default initFetchGet;
