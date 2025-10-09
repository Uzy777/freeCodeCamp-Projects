*Q1) Which one of these will create a String object?*

A) String("Hello World");  
B) String({ "Hello World" });  
C) new String("Hello World");  
D) "Hello World".toString();  

> [!question]- Answer  
> **C) new String("Hello World");**

---

*Q2) How can you convert a String object into a string literal?*

A) With the String() constructor.  
B) With the .stringify() method.  
C) Enclose the String object in double quotes.  
D) With the .toString() method.  

> [!question]- Answer  
> **D) With the .toString() method.**

---

*Q3) Why can you use methods like .length, .repeat(), .concat(), and .slice() on a string primitive in JavaScript?*

A) JavaScript temporarily converts the string primitive to an array.  
B) Those methods exist natively on string primitives.  
C) String primitives are stored as objects internally.  
D) JavaScript temporarily wraps the string primitive in a String object.  

> [!question]- Answer  
> **D) JavaScript temporarily wraps the string primitive in a String object.**

---

*Q4) What will the following code log to the console?*

```js
let stringArray = [8, 9, 10].toString();  
console.log(stringArray);
```

A) "8", "9", "10"  
B) ["8", "9", "10"]  
C) [8,9,10]  
D) "8,9,10"  

> [!question]- Answer  
> **D) "8,9,10"**

---

*Q5) How can you convert a string literal into a Number object?*

A) With the .parseInt() method.  
B) With the .toNumber() method.  
C) With the Object() constructor.  
D) With the Number() constructor.  

> [!question]- Answer  
> **D) With the Number() constructor.**

---

*Q6) What will Number(true) and Number(false) return, respectively?*

A) NaN and NaN  
B) true and false  
C) 1 and 0  
D) undefined and undefined  

> [!question]- Answer  
> **C) 1 and 0**

---

*Q7) What will Number(undefined) and Number(null) return, respectively?*

A) 0 and 0  
B) undefined and null  
C) NaN and 0  
D) NaN and NaN  

> [!question]- Answer  
> **C) NaN and 0**

---

*Q8) Which of the following is the best name for a boolean variable that checks if a user is allowed to do something on your website?*

A) permission  
B) getPermission  
C) handlePermission  
D) hasPermission  

> [!question]- Answer  
> **D) hasPermission**

---

*Q9) Which of the following is the best name for a function that runs when a user submits a form?*

A) formSubmit  
B) didSubmit  
C) handleSubmit  
D) hasSubmitted  

> [!question]- Answer  
> **C) handleSubmit**

---

*Q10) What is a sparse array?*

A) An array where one or more indices have a value of an empty object literal.  
B) An array where one or more indices have a value of undefined.  
C) An array where one or more indices have a value of null.  
D) An array where one or more indices are not assigned a value.  

> [!question]- Answer  
> **D) An array where one or more indices are not assigned a value.**

---

*Q11) In which of the following examples will arr NOT be a sparse array?*

A) const arr = Array.from({ length: 5 });  
B) const arr = new Array(5);  
C) const arr = [1, 2, 3, , 5];  
D) const arr = [1, 2, 3]; arr[4] = 4;  

> [!question]- Answer  
> **A) const arr = Array.from({ length: 5 });**

---

*Q12) What is the primary purpose of a linter?*

A) To optimize code for performance.  
B) To create documentation for code.  
C) To format code automatically.  
D) To detect potential errors and issues in code.  

> [!question]- Answer  
> **D) To detect potential errors and issues in code.**

---

*Q13) What is a benefit of using a formatter in a codebase?*

A) They convert code to a specific programming language.  
B) They allow developers to compile code more efficiently.  
C) They detect logical errors.  
D) They ensure a consistent code style.  

> [!question]- Answer  
> **D) They ensure a consistent code style.**

---

*Q14) In JavaScript, who or what is typically responsible for allocating memory to variables?*

A) The operating system.  
B) The server.  
C) The runtime engine.  
D) The developer.  

> [!question]- Answer  
> **C) The runtime engine.**

---

*Q15) What will be logged to the console in the following code?*

```js
function trackTotal(initialValue) {  
  let total = initialValue;  
  return function(increment) {  
    total += increment;  
    return total;  
  };  
}  

let track = trackTotal(1);  
console.log(track(2));  
console.log(track(3));
```

A) 2, 5  
B) 3, 6  
C) 5, 6  
D) 2, 3  

> [!question]- Answer  
> **B) 3, 6**

---

*Q16) What is hoisting in JavaScript?*

A) The process of moving variable declarations to the top of their scope.  
B) The process of creating new variables.  
C) Raising errors to the top of the code.  
D) Automatically moving var declarations to the top of the block.  

> [!question]- Answer  
> **A) The process of moving variable declarations to the top of their scope.**

---

*Q17) Why is using the var keyword considered bad practice in modern JavaScript?*

A) They don't allow type checking.  
B) They're slower than let and const.  
C) They cause syntax errors.  
D) They're accessible outside their block.  

> [!question]- Answer  
> **D) They're accessible outside their block.**

---

*Q18) What is the purpose of modules in JavaScript?*

A) To create new programming languages.  
B) To make code more difficult to understand.  
C) To organize code into reusable units.  
D) To improve code performance.  

> [!question]- Answer  
> **C) To organize code into reusable units.**

---

*Q19) How do you add an app.js script as a module in an HTML document?*

A) <script src="app.js" module></script>  
B) <script type="module/javascript" src="app.js"></script> 
C) <script type="module" src="app.js"></script> 
D) <script src="app.js"></script>

> [!question]- Answer  
> **C)<script type="module" src="app.js"></script>**

---

*Q20) Which of the following examples exports the calculateSum function from a utils.js module and properly imports and uses it in an app.js file?*

A) 
```js
// utils.js  
export function calculateSum(a, b) {  
  return a + b;  
}  

// app.js  
import calculateSum from './utils.js';  
console.log(calculateSum(2, 3));  
```

B)  
```js
// utils.js  
export function calculateSum(a, b) {  
  return a + b;  
}  

// app.js  
import { calculateSum } from './utils.js';  
console.log(calculateSum(2, 3));  
```

C)  
```js
// utils.js  
function calculateSum(a, b) {  
  return a + b;  
}  

export default calculateSum;  

// app.js  
import * as utils from './utils.js';  
console.log(utils.calculateSum(2, 3));  
```

D)  
```js
// utils.js  
export default function calculateSum(a, b) {  
  return a + b;  
}  

// app.js  
import { calculateSum } from './utils.js';  
console.log(calculateSum(2, 3));  

> [!question]- Answer  
> **B) import { calculateSum } from './utils.js';**
```

---