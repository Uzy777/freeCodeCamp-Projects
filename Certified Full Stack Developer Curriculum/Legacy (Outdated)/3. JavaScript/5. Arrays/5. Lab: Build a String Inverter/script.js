function reverseString(str) {
    const split = str.split("");
    const reverse = split.reverse();
    const join = reverse.join("");

    return join;
}

reverseString("Howdy");