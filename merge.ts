export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    let i = 0, j = 0, k = 0;
    const result: number[] = [];
    const totalSize = collection_1.length + collection_2.length + collection_3.length;
    const c_size = collection_3.length - 1;

    while ((i + j + k) < totalSize) {
        const val1 = (i < collection_1.length) ? collection_1[i]! : Infinity;
        const val2 = (j < collection_2.length) ? collection_2[j]! : Infinity;
        const val3 = (k < collection_3.length) ? collection_3[c_size - k]! : Infinity;

        if (val1 <= val2 && val1 <= val3) {
            if (result.length > 0 && val1 < result[result.length - 1]!) {
                throw new Error("Input collections are not properly sorted.");
            }
            result.push(val1);
            i++;
        } else if (val2 <= val1 && val2 <= val3) {
            if (result.length > 0 && val2 < result[result.length - 1]!) {
                throw new Error("Input collections are not properly sorted.");
            }
            result.push(val2);
            j++;
        } else {
            if (result.length > 0 && val3 < result[result.length - 1]!) {
                throw new Error("Input collections are not properly sorted.");
            }
            result.push(val3);
            k++;
        }
    }
    return result;
}