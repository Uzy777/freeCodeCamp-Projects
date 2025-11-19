const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convertHTML(str) {

let result = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (htmlEntities[char]) {
    result += htmlEntities[char];
  } else {
    result += char;
  }
}
return result

}

console.log(convertHTML("Dolce & Gabbana"))