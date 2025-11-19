function frankenSplice(arr1, arr2, index) {
  
const result = [... arr2];

result.splice(index, 0, ...arr1)

return result

}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))