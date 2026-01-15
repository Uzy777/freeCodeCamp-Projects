
Q1)
Which of the following statements about JavaScript higher‑order functions is NOT true?
• Higher‑order functions can greatly enhance code readability and maintainability by enabling functional programming techniques.
• All functions in JavaScript, including those that do not take or return other functions, can be classified as higher‑order functions.
• Higher‑order functions may introduce complexity in understanding code, but they can also lead to more expressive and concise solutions.
• Higher‑order functions like map, filter, and reduce are powerful tools for array manipulation, but they are not unique to functional programming.
Answer: All functions in JavaScript, including those that do not take or return other functions, can be classified as higher‑order functions.

Q2)
What is a factory function in the context of higher order functions?
• A function that only works with strings.
• A function that returns a new function based on specific parameters
• A function that creates new variables.
• A function that automatically generates code comments.
Answer: A function that returns a new function based on specific parameters

Q3)
After code execution, what will be the value of forEachRes and mapRes?
const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach(num => {
  return (sum += num);
});
const mapRes = numbers.map(num => {
  return (sum += num);
});

• forEachRes is 0 and mapRes is [1,2,3,4,5]
• forEachRes is undefined and mapRes is [1,2,3,4,5]
• forEachRes is 5 and mapRes is [1,2,3,4,5]
• forEachRes is undefined and mapRes is [6,7,8,9,10]
Answer: forEachRes is undefined and mapRes is [6,7,8,9,10]

Q4)
What is the result of this code?
[, undefined, 'a', 'b', { 20: 5 }].sort();

• Unsupported elements for an array to be sorted, hence error.
• [{ '20': 5 }, 'a', 'b', undefined, empty]
• Callback not supplied, hence error.
• [empty, 'a', 'b', undefined, { '20': 5 }]
Answer: [{ '20': 5 }, 'a', 'b', undefined, empty]

Q5)
Which of the following describes a callback function in JavaScript?
• A function that is invoked with a specific context.
• A function that returns another function.
• A function that is called immediately upon declaration.
• A function passed as an argument to another function, to be executed by that function's logic.
Answer: A function passed as an argument to another function, to be executed by that function's logic.

Q6)
What is the result of using reduce() on an array?
• It varies depending on the accumulator's initial value and the callback function.
• A boolean indicating whether any elements meet a condition.
• An array with all elements reduced by specified callback function.
• An array of booleans.
Answer: It varies depending on the accumulator's initial value and the callback function.

Q7)
How does the sort() method behave if no compare function is provided in numerical sorting?
• It fills the empty slots with null.
• It returns an array of special characters.
• It sorts the array as strings based on UTF‑16 code units.
• It sorts the array in reverse order.
Answer: It sorts the array as strings based on UTF‑16 code units.

Q8)
What is the purpose of the some() method in JavaScript?
• To determine if any elements in an array pass a specified test.
• To iterate through an array without producing a result.
• To create a new array with the results of a function applied to each element.
• To reduce an array to a single value based on a callback function.
Answer: To determine if any elements in an array pass a specified test.

Q9)
Which of the following is a valid example of method chaining?
• console.log('Hello');
• array.push(1).pop();
• Math.random();
• str.toLowerCase().trim().replace(' ', '_');
Answer: str.toLowerCase().trim().replace(' ', '_')

Q10)
What is the output of the following code?
let numbers = [2, 4, 8, 10];
numbers.forEach(function(number) {
    console.log(number % 2);
});

• null null null null
• 2 4 8 10
• 1 2 4 5
• 0 0 0 0
Answer: 0 0 0 0

Q11)
Which of the following is a benefit of method chaining?
• It inherently optimizes performance by reducing the execution time of functions.
• It promotes simplified syntax and more readable code by allowing multiple operations in a single expression.
• It allows for error handling and debugging to be more straightforward.
• It eliminates the need for temporary variables, but may increase memory usage in some cases.
Answer: It promotes simplified syntax and more readable code by allowing multiple operations in a single expression.

Q12)
How can you sort an array of objects by a specific property using the sort method?
• Use the reverse method after sorting.
• Convert the objects to strings and sort them.
• Use a compare function that compares the property values.
• The sort method cannot sort objects.
Answer: Use a compare function that compares the property values.

Q13)
In method chaining, what is a common practice to enhance clarity and debugging?
• Use only built-in methods.
• Break long chains into multiple steps.
• Use fewer methods in the chain.
• Avoid chaining methods that return only primitive values.
Answer: Break long chains into multiple steps.

Q14)
What is a potential downside of using method chaining excessively in your code?
• It prevents the use of comments.
• It makes the file size larger.
• It can make the code harder to debug.
• It makes the code run slower.
Answer: It can make the code harder to debug.

Q15)
Which method would you use to determine if all elements in an array are strings?
• filter()
• some()
• every()
• everyInstance()
Answer: every()

Q16)
What will be the value of originalArray after the following code is run?
const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredArray = originalArray.filter(item => item.id > 1);
filteredArray[0].id = 4;

• [{ id: 1 }, { id: 2 }, { id: 3 }]
• [{ id: 1 }, { id: 4 }, { id: 3 }]
• [{ id: 4 }, { id: 2 }, { id: 3 }]
• [{ id: 1 }]
Answer: [{ id: 1 }, { id: 4 }, { id: 3 }]

Q17)
What will be the value of shortWords after the following code is run?
const words = ['apple', 'banana', 'pear', 'kiwi'];
const shortWords = words.filter(word => word.length <= 5);

• []
• ['pear', 'kiwi']
• ['apple', 'pear', 'kiwi']
• ['apple', 'banana']
Answer: ['apple', 'pear', 'kiwi']

Q18)
What is the purpose of providing an initial value as an argument to the reduce() method?
• To set the length of the array.
• To limit the number of iterations.
• To define the starting value for the accumulator.
• To specify the return type of the function.
Answer: To define the starting value for the accumulator.

Q19)
Can the map method be used on objects that are not arrays?
• No, it is specifically designed for arrays.
• Yes, it can be used on any object.
• Yes, but only on objects with numeric properties.
• It depends on the JavaScript version.
Answer: No, it is specifically designed for arrays.

Q20)
What is the primary purpose of the map method in JavaScript?
• To create a new array containing the results of calling a provided function on each element in the starting array.
• To filter elements from an array and remove or add elements based on a condition.
• To find a specific element in an array and return its index along with the element.
• To sort an array and return a new array while maintaining the original order.
Answer: To create a new array containing the results of calling a provided function on each element in the starting array.