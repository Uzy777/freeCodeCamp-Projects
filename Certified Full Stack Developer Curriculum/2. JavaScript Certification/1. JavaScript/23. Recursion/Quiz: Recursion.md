---

## Questions

1) What is recursion in programming?

- A process in which a function calls itself.
- A loop that never ends.
- A function that returns undefined.
- A method of sorting arrays.

**Answer: A process in which a function calls itself.**

---

2) Which of the following is an example of recursion?

- 
```js
function factorial(n) {
  let result = 1;

  while (n > 0) {
    result = result * n;
    n--;
  }

  return result;
}
```
-
```js
function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}
```
- 
```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```
- 
```js
function factorial(n) {
  const arr = Array(n).fill().map((_, i) => i + 1);
  return arr.reduce((acc, curr) => acc * curr, 1);
}
```

**Answer: C**

---

3) What will the following function return?

```js
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
sum(3);
```

- 6
- 1
- 3
- 0

**Answer: 6**

---

4) How many times will the mystery function be called?

```js
function mystery(n) {
  if (n <= 1) return 1;
  return mystery(n - 2);
}
mystery(5);
```

- 3
- 2
- 5
- 4

**Answer: 3**

---

5) Which of the following is true about recursion?

- It should always have a base case.
- It should only be used for factorials.
- It should never have a base case.
- It should only be used for the Fibonacci sequence.

**Answer: It should always have a base case.**

---

6) Which of the following options would be an appropriate base case for the given example?
```js
function countDownToZero(number) {
  // Base case goes here.

  console.log(number);
  countDownToZero(number - 1);
}
```

- 
```js
if (number === 0) {
  return;
}
```
-
```js
if (number > 0) {
  return;
}
```
- 
```js
if (number !== 0) {
  return;
}
```
- 
```js
if (number < 0) {
  return;
}
```

**Answer: A**

---

7) Why must recursion have a base case?

- To ensure the function always has a return value.
- To reduce the number of function calls.
- To ensure all recursive calls are executed in the correct order and a RecursionError is not thrown.
- To provide a way for the function to break out of its recursive calls and prevent infinite loops.

**Answer: To provide a way for the function to break out of its recursive calls and prevent infinite loops.**

---

8) What will this recursive function do?

```js
function repeatString(str) {
  return str + repeatString(str);
}
```

- Return undefined.
- Cause a stack overflow.
- Create an empty string.
- Return the string twice.

**Answer: Cause a stack overflow.**

---

9) What is a call stack?

- A list of function calls that have been executed.
- A data structure that keeps track of function calls and their execution order.
- A special function used to call a function exactly three times.
- A list of values that were returned by a function.

**Answer: A data structure that keeps track of function calls and their execution order.**

---

10) What does this recursive function do?

```js
function changeString(str) {
  if (str === "") return "";
  return changeString(str.slice(1)) + str[0];
}
```

- Removes vowels.
- Reverses a string.
- Duplicates a string.
- Removes spaces.

**Answer: Reverses a string.**

---