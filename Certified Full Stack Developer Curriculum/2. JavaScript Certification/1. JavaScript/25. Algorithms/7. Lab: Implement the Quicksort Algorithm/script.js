function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const current = arr[i];

        if (current < pivot) {
            left.push(current);
        } else {
            right.push(current);
        }
    }

    const sortedLeft = quicksort(left);
    const sortedRight = quicksort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}

console.log(
    quicksort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);