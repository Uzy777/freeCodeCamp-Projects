function uniteUnique(...arrays) {
  let combined = arrays.flat();
  let result = [];

  for (let i = 0; i < combined.length; i++) {
    if (!result.includes(combined[i])) {
      result.push(combined[i]);
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// [1, 3, 2, 5, 4]