
function steamrollArray(arr) {
    const result = [];

    (function flatten(items) {
        for (const item of items) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    })(arr);

    return result;
}
