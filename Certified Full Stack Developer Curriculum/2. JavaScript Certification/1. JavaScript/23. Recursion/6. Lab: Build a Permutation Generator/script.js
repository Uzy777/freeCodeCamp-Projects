function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  const usedAtThisLevel = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (usedAtThisLevel.has(char)) continue;
    usedAtThisLevel.add(char);

    const remaining = str.slice(0, i) + str.slice(i + 1);
    permuteString(remaining, prefix + char, results);
  }

  return results;
}


console.log(permuteString("far"));
console.log("")
console.log(permuteString("fcc"));
console.log("")
console.log(permuteString("p"));
console.log("")
console.log(permuteString(""));
console.log("")
console.log(permuteString("walk"));