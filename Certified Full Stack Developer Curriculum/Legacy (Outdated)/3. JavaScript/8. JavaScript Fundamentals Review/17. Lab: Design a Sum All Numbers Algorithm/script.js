function sumAll(array) {

let total = 0

let minValue = Math.min(...array)

let maxValue = Math.max(...array)

for (let i = minValue; i <= maxValue; i++) {
  total += i;
}
   return total
}

console.log(sumAll([4, 1])) // 10