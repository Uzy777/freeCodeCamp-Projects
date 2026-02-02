function spinalCase(str) {
  const decamelized = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  const hyphenated = decamelized.replace(/[_\s]+/g, '-');

  return hyphenated.toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
