function confirmEnding(string, check) {
    const ending = string.slice(-check.length);

    return ending === check;
}

console.log(confirmEnding("Bastian", "n"));

console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")); 
