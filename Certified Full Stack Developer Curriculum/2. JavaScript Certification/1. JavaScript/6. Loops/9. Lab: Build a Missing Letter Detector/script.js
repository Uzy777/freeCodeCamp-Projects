function fearNotLetter(str) {
    if (!str || str.length === 0) return undefined;

    let expected = str.charCodeAt(0);

    for (let i = 0; i < str.length; i++) {
        const actual = str.charCodeAt(i);

        if (actual !== expected) {
            return String.fromCharCode(expected);
        }

        expected++
    }
}


console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))