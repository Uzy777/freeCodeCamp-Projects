const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
}

function pairElement(str) {
let result = [];

for (let i = 0; i < str.length; i++) {
  let base = str[i];
  let pair = pairs[base];
  result.push([base, pair]);
}
return result
}

console.log(pairElement("ATCGA"))