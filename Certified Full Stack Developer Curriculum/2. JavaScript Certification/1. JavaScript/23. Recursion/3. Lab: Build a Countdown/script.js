function countdown(n) {
    let countArray = []
    if (n < 1) {
        return [];
    } else {
        countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(10))
console.log(countdown(5))