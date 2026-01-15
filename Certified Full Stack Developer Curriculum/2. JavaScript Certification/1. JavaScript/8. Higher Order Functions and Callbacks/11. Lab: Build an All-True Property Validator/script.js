
function truthCheck(collection, pre) {
    return collection.every(obj => Boolean(obj[pre]));
}


truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");


console.log(truthCheck(
    [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }],
    "isBot"
)); // false

console.log(truthCheck(
    [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }],
    "name"
)); // true

console.log(truthCheck(
    [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }],
    "role"
)); // false

console.log(truthCheck(
    [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }],
    "number"
)); // true

console.log(truthCheck(
    [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }],
    "caught"
)); // false

console.log(truthCheck(
    [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }],
    "number"
)); // false

console.log(truthCheck(
    [{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }],
    "username"
)); // false

console.log(truthCheck(
    [{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }],
    "users"
)); // true

console.log(truthCheck(
    [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }],
    "data"
)); // true

console.log(truthCheck(
    [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }],
    "id"
)); // false
