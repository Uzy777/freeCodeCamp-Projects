function findLongestWordLength(string) {
    string = string.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    let count = 0;

    for (let i = 0; i < string.length; i++) {

        if (string[i].length > largest.length) {
            largest = string[i];
            count = string[i].length;

        }
    }
    return count;
}



console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));