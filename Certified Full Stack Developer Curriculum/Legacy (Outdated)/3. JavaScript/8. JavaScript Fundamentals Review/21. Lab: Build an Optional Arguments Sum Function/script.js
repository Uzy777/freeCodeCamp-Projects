function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }

  if (arguments.length === 2) {
    if (typeof b !== "number") {
      return undefined;
    }
    return a + b;
  }

  return function(c) {
    if (typeof c !== "number") {
      return undefined;
    }
    return a + c;
  };
}

console.log(addTogether(5, undefined))