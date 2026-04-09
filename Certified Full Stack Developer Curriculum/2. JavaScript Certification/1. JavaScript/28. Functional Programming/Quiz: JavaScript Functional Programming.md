---

Questions

Q1) What is a pure function?

- A function that logs an output to the console.
- A function that changes its behavior based on external factors and returns null.
- A function that always returns the same output for the same input and produces no side effects.
- A function that modifies global variables and returns either undefined or null.

**Answer: A function that always returns the same output for the same input and produces no side effects.**

---

Q2) What is a side effect in functional programming?

- A recursive function call that produces an infinite loop and crashes the program.
- A change to the state of the program that are observable outside the function.
- An unexpected TypeError in your code.
- A function that takes too long to execute and crashes the program.

**Answer: A change to the state of the program that are observable outside the function.**

---

Q3) What is currying in functional programming?

- The process of transforming a function with multiple arguments into a sequence of functions, each with a single argument.
- A technique for designing tests to help you ensure your code is 100% error free.
- A more optimized way to write recursive functions so they run twice as fast as other functions.
- The process of building, designing and testing your code to ensure that it meets the standards laid out by ECMAScript.

**Answer: The process of transforming a function with multiple arguments into a sequence of functions, each with a single argument.**

------

4) What will be the output for the following pure function?

```js
const add = (a, b) => a + b;
console.log(add(2, 5));
```

- undefined
- 7
- 4
- 3

**Answer: 7**

---

5) Which of the following is an example of currying?

```js
function curriedAverage(a) {
  return function(b) {
    return function(c) {
      return (a + b + c) / 3;
    };
  };
}
```

```js
const curriedAverage = (a, b, c) => a + b + c
```

```js
function curriedAverage(a) {
  return a 
}

function curried(c) {
  return c
}
```

```js
const curriedAverage = (a, b, c) => a + b + c / 3
```

**Answer: function curriedAverage(a) { return function(b) { return function(c) { return (a + b + c) / 3; }; }; }**

---

Q6) Which of the following is a key principle of functional programming?

- Avoiding side effects and using immutable data.
- Using mutable data structures extensively.
- Modifying global variables frequently.
- Emphasizing object-oriented inheritance.

**Answer: Avoiding side effects and using immutable data.**

---

Q7) What is an impure function?

- A function with side effects.
- A function without side effects.
- A function that returns an object.
- A function that returns null

**Answer: A function with side effects.**

---

8) Which of the following is the correct way to call a curried function?

```js
curriedAverage(2)(3)(4);
```

```js
curriedAverage(2 3 4);
```

```js
curriedAverage(2)=>(3)=>(4);
```

```js
curriedAverage(2)==(3)==(4);
```

**Answer: curriedAverage(2)(3)(4);
**

---

9) Which of the following is an example of an impure function?

```js
function example(num) {
  return num;
}
```

```js
function sum(num1, num2) {
 return num1 + num2
}
```

```js
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}
```

```js
function addToTotal(value) {
  let total = 0;
  total += value;
  return total;
}
```

**Answer: let total = 0;
function addToTotal(value) {
total += value;
return total;
} **

---

Q10) Which of the following is NOT an example of a side effect?

- Writing to a file.
- Returning the sum of two values.
- Making an API call.
- Modifying a global variable.

**Answer: Returning the sum of two values.**

---