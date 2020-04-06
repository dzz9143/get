import { getPathComponents } from "./utils";

function get<T>(obj: any, path: string): T {
    const arr = getPathComponents(path);
    let idx = 0;
    let len = arr.length;
    let o = obj;
    while (o != null && idx < len) {
        o = o[arr[idx++]];
    }

    return idx === len ? o : undefined;
}

export {
    get,
};