let total = 0;

function getAverage(scores) {
  total = 0;
  for (let x in scores) {
    total += scores[x];
  }
  let length = scores.length;

  let average = total / length;

  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
