*Q1) Which of the following best describes iteration?*

A) It is a technique for storing data in consecutive memory locations.  
B) It is the process of sending signals between components to establish a connection.  
C) It is the process of repeating a set of instructions multiple times.  
D) It is the process of writing code repeatedly until it works correctly.  

> [!question]- Answer  
> **C) It is the process of repeating a set of instructions multiple times.**

---

*Q2) What technique is used for iterations in programming?*

A) Conditionals  
B) Compilation  
C) Recursion  
D) Looping  

> [!question]- Answer  
> **D) Looping**

---

*Q3) Which of the following is an iterable object?*

A) Number  
B) Undefined  
C) Boolean  
D) String  

> [!question]- Answer  
> **D) String**

---

*Q4) Which of the following is not a type of loop supported in JavaScript?*

A) for...in loop.  
B) for loop.  
C) while loop.  
D) if...else loop.  

> [!question]- Answer  
> **D) if...else loop.**

---

*Q5) What is the correct order of the for loop declaration?*

A) for (increment/decrement; condition; initialization) { statement; }  
B) for (initialization; condition; increment/decrement) { statement; }  
C) for (condition; increment/decrement; initialization) { statement; }  
D) for (initialization; increment/decrement; condition) { statement; }  

> [!question]- Answer  
> **B) for (initialization; condition; increment/decrement) { statement; }**

---

*Q6) Which loop executes the code block once, before checking if the condition is true, and will continue working as long as the condition remains true?*

A) do...while loop.  
B) for...of loop.  
C) for...in loop.  
D) while loop.  

> [!question]- Answer  
> **A) do...while loop.**

---

*Q7) Which of the following will loop over the values of an iterable object?*

A) for loop.  
B) do...while loop.  
C) for...in loop.  
D) for...of loop.  

> [!question]- Answer  
> **D) for...of loop.**

---

*Q8) Which of the following best defines an infinite loop?*

A) A loop that runs until the condition becomes false.  
B) A loop that automatically stops after a fixed number of iterations.  
C) A loop that runs once and then is terminated.  
D) A loop whose termination condition is never met or is absent.  

> [!question]- Answer  
> **D) A loop whose termination condition is never met or is absent.**

---

*Q9) How many times will the following loop run?*

```js
for (let i = 2; i < 10; i+=2) {  
  console.log(i);  
}
```

A) 4  
B) 5  
C) 9  
D) 10  

> [!question]- Answer  
> **A) 4**

---

*Q10) Which loop is the best for iterating objects?*

A) for...in loop.  
B) do...while loop.  
C) for loop.  
D) for...of loop.  

> [!question]- Answer  
> **A) for...in loop.**

---

*Q11) What is the difference between the for...in loop and the for...of loop?*

A) for...in loop iterates over property names (keys), while the for...of loop iterates over property values.  
B) for...in loops create new properties, while for...of loops modify existing properties.  
C) for...in loops can only be used with strings, while the for...of loops can be used with both strings and numbers.  
D) for...in loop iterates over property values, while the for...of loop iterates over property names (keys).  

> [!question]- Answer  
> **A) for...in loop iterates over property names (keys), while the for...of loop iterates over property values.**

---

*Q12) Which of these would cause an infinite loop?*

A) A loop condition that eventually gives false.  
B) A loop condition that always returns true.  
C) Initialization of variable.  
D) Increment/decrement logic.  

> [!question]- Answer  
> **B) A loop condition that always returns true.**

---

*Q13) What statement can be used to break out of a loop completely?*

A) The continue statement.  
B) The break statement.  
C) The skip statement.  
D) The label statement.  

> [!question]- Answer  
> **B) The break statement.**

---

*Q14) Which statement can be used to skip the current iteration and move to the next iteration?*

A) The break statement.  
B) The continue statement.  
C) The return statement.  
D) The label statement.  

> [!question]- Answer  
> **B) The continue statement.**

---

*Q15) What is printed to the console with the following code?*

```js
for (let i = 0; i < 25; i += 2) {  
  if (i % 5 === 0) {  
    continue;  
  }  
  if (i % 13 === 0) {  
    break;  
  }  
  console.log(i);  
}
```

A) 2, 4, 6, 8, 12  
B) 2, 4, 6, 8, 12, 14, 16, 18, 22, 24  
C) 0, 2, 4, 6, 8, 12  
D) 0, 2, 4, 6, 8, 12, 14, 16, 18, 22, 24  

> [!question]- Answer  
> **A) 2, 4, 6, 8, 12**

---

*Q16) What would the following code print to the console?*

```js
for (let i = 1; i < 6; i++) {  
  if (i === 4) break;  
  console.log(i);  
}
```

A) 1, 2, 3, 4, 5, 6  
B) 1, 2, 3, 4, 5  
C) 1, 2, 3  
D) 1, 2, 3, 4  

> [!question]- Answer  
> **C) 1, 2, 3**

---

*Q17) What will be printed to the console with the code below?*

```js
const shoppingList = { tomatoes: 4, apples: 10 };  
for (const item in shoppingList) {  
  console.log(item);  
}
```

A) 4, 10  
B) tomatoes:4, apples:10  
C) tomatoes, apples  
D) tomatoes - 4, apples - 10  

> [!question]- Answer  
> **C) tomatoes, apples**

---

*Q18) What will be the console output of the code below?*

```js
for (let i = 2; i <= 13; i++) {  
  if (i % 2 === 0) continue;  
  console.log(i);  
}
```

A) 2, 4, 6, 8, 10, 12  
B) 3, 5, 7, 9, 11, 13  
C) 1, 3, 5, 7, 9, 11  
D) 1, 3, 5, 7, 9, 11, 13  

> [!question]- Answer  
> **D) 1, 3, 5, 7, 9, 11, 13**

---

*Q19) What would be printed to the console with the code below?*

```js
const fruits = ["Mango", "Pineapple", "Oranges"];  
for (const fruit of fruits) {  
  console.log(fruit);  
}
```

A) Mango, Pineapple, Oranges  
B) 0, 1, 2  
C) Oranges, Pineapple, Mango  
D) Pineapple, Oranges, Mango  

> [!question]- Answer  
> **A) Mango, Pineapple, Oranges**

---

*Q20) How many times will the code below output the string in the loop?*

```js
let x = 0  
while (x < 5) {  
  console.log("in the loop");  
}
```

A) 4 times  
B) 3 times  
C) 5 times  
D) Infinite times  

> [!question]- Answer  
> **D) Infinite times**

---