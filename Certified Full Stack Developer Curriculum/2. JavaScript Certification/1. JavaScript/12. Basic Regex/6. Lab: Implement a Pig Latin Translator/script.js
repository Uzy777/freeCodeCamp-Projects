function translatePigLatin(str) {

  const firstVowelIndex = str.search(/[aeiou]/);


  if (firstVowelIndex === 0) {
    return str + 'way';
  }


  if (firstVowelIndex > 0) {
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
  }


  return str + 'ay';
}



console.log(translatePigLatin("california"));  // aliforniacay
console.log(translatePigLatin("paragraphs"));  // aragraphspay
console.log(translatePigLatin("glove"));       // oveglay
console.log(translatePigLatin("algorithm"));   // algorithmway
console.log(translatePigLatin("eight"));       // eightway
console.log(translatePigLatin("schwartz"));    // artzschway
console.log(translatePigLatin("rhythm"));      // rhythmay