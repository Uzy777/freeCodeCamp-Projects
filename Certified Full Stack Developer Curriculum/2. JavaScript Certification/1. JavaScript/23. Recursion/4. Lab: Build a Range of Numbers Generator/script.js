function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    }

    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr[arr.length] = endNum; // add without using push()
    return arr;
}


console.log(rangeOfNumbers(1, 5));   // [1,2,3,4,5]
console.log(rangeOfNumbers(6, 9));   // [6,7,8,9]
console.log(rangeOfNumbers(4, 4));   // [4]
console.log(rangeOfNumbers(10, 15)); // [10,11,12,13,14,15]
