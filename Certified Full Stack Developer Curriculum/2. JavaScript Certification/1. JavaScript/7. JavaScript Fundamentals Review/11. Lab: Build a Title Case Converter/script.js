function titleCase(word) {

let words = word.split(" ");

for (let i = 0; i < words.length; i++) {

words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()

}
return words.join(" ");
}


console.log(titleCase("I like to code"))

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));