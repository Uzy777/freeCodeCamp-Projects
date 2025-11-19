function whatIsInAName(arrayObject, sourceObject) {
// Get the keys from the source object
const sourceKeys = Object.keys(sourceObject);

// Filter the arrayObject
return arrayObject.filter(obj => {
  // Check if every key in sourceObject matches in obj
  return sourceKeys.every(key => {
    return obj.hasOwnProperty(key) && obj[key] === sourceObject[key];
  });
});
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) // [{ first: "Tybalt", last: "Capulet" }]