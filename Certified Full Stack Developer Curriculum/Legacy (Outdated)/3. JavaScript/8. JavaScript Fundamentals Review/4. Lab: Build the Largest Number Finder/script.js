function largestOfAll(array) {
const result = [];

for (let i = 0; i < array.length; i++) {
  const subArray = array[i];

  const largestNumber = Math.max(...subArray)

result.push(largestNumber)

}
return result

}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))