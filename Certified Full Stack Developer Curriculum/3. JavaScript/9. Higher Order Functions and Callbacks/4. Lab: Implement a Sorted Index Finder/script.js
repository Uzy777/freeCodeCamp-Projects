function getIndexToIns(arr, int) {
  arr.sort((a, b) => a - b);
  let x = arr.findIndex(num => int <= num)
  if (x === -1) {
    return arr.length
  }
  return x
}


console.log(getIndexToIns([1, 2, 3, 4], 1.5)) // 1