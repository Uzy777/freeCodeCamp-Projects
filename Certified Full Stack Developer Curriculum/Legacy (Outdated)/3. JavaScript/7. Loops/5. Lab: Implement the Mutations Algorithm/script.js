function mutation(array) {
    for (let i = 0; i < array[1].length; i++) {
        const char = array[1][i].toLowerCase();
        if (!array[0].toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;

}


console.log(mutation(["hello", "hey"])) // false

console.log(mutation(["hello", "Hello"])) // true


console.log(mutation(["h", "xx"])) // false