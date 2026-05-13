function fibonacci(n) {
    const sequence = [0, 1];

    if (n === 0) return sequence[0];
    if (n === 1) return sequence[1];

    for (let i = 2; i <= n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence[n];
}


console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2
console.log(fibonacci(5));  // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610
