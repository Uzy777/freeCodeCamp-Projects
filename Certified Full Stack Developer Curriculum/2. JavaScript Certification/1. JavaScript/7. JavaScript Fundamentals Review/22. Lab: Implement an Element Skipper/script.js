function dropElements(arr, func) {
  let i = 0;

  while (i < arr.length && !func(arr[i])) {
    i++
  }
  return i < arr.length ? arr.slice(i) : [];
}