const num = 5;

function factorialCalculator(number) {
    let result = 1

    let i = 0

    while (i < number) {
        i++
        result = result * i
    }
    return result
}

const factorial = factorialCalculator(num);

console.log(factorialCalculator(num))

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);