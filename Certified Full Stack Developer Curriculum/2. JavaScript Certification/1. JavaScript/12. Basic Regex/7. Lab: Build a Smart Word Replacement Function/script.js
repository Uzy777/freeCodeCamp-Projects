function myReplace(str, before, after) {
  
  const capitalizeFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const lowercaseFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

  const isBeforeCapitalized = /^[A-Z]/.test(before);

  const adjustedAfter = isBeforeCapitalized ? capitalizeFirst(after) : lowercaseFirst(after);

  return str.replace(before, adjustedAfter);
}




console.log(myReplace("Let us go to the store", "store", "mall"));
// → "Let us go to the mall"

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// → "He is Sitting on the couch"

console.log(myReplace("I think we should look up there", "up", "Down"));
// → "I think we should look down there"

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// → "This has a spelling error"

console.log(myReplace("His name is Tom", "Tom", "john"));
// → "His name is John"

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// → "Let us get back to more Algorithms"