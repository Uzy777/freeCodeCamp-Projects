function pyramid(char, rows, upsideDown) {
let result = "\n";

if (upsideDown === false) {
for (let i = 1; i<= rows; i++) {
  let spaces = " ".repeat(rows - i);
  let chars = char.repeat(2 * i - 1);
  result += spaces + chars + "\n";
}

} else {
  for (let i = rows; i >= 1; i--) {
let spaces = " ".repeat(rows - i);
let chars = char.repeat(2 * i - 1);
result += spaces + chars + "\n";
  }

  }

return result
}


console.log(pyramid("o", 4, true));

