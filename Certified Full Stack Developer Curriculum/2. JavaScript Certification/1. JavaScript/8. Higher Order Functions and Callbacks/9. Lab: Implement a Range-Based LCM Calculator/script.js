function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let [min, max] = arr;
    let multiple = min;

    for (let i = min + 1; i <= max; i++) {
        multiple = (multiple * i) / gcd(multiple, i);
    }

    return multiple;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}