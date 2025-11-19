*Q1) Which of the following is the correct way to declare a function in JavaScript?*

A)
```js 
defineFunction greet() {  
  console.log("Hello there!");  
}  
```

B)
```js
def greet() {  
  console.log("Hello there!");  
}  
```

C)
```js
function greet() {  
  console.log("Hello there!");  
}  
```

D)
```js
func greet() {  
  console.log("Hello there!");  
}  
```

> [!question]- Answer  
> **C) function greet() { console.log("Hello there!"); }**

---

*Q2) What happens when you call (or execute) a function?*

A) The code inside the function will run and a value will be returned.  
B) Nothing will happen when you call a function.  
C) The code inside the function will run and null will always be returned.  
D) A TypeError will be thrown and the program will crash.  

> [!question]- Answer  
> **A) The code inside the function will run and a value will be returned.**

---

*Q3) Which of the following is the correct way to call a function?*

A)
```js
()exampleFunction();  
```

B)
```js
exampleFunction&gt;&gt;;  
```

C)
```js
exampleFunction;  
```

D)
```js
exampleFunction();  
```

> [!question]- Answer  
> **D) exampleFunction();**

---

*Q4) What is the role of the return keyword?*

A) The return keyword serves no purpose in functions.  
B) The return keyword will throw a type error.  
C) The return keyword returns a value from the function.  
D) The return keyword will execute the function.  

> [!question]- Answer  
> **C) The return keyword returns a value from the function.**

---

*Q5) Which of the following is a valid function expression?*

A)
```js
expression function getSum(x, y) {  
    return x + y;  
};  
```

B)
```js
function = getSum(x, y) {  
    return x + y;  
};  
```

C)
```js
const getSum = function(x, y) {  
    return x + y;  
};  
```

D)
```js
getSum: function(x, y) {  
    return x + y;  
};  
```

> [!question]- Answer  
> **C) const getSum = function(x, y) { return x + y; };**

---

*Q6) What are function arguments?*

A) Real values passed to a function when it is called.  
B) Special values that act similar to anonymous functions.  
C) Values that represents the absence of a value.  
D) Placeholder values used inside of the function.  

> [!question]- Answer  
> **A) Real values passed to a function when it is called.**

---

*Q7) What are function parameters?*

A) Values that represent the intentional absence of the value.  
B) Values listed inside the function definition.  
C) Floating point values used inside of the function.  
D) Values passed to a function when it is called.  

> [!question]- Answer  
> **B) Values listed inside the function definition.**

---

*Q8) What will be logged to the console?*

```js
const calculateTotal = (amount, taxRate = 0.05) =&gt; {  
  return amount + (amount * taxRate);  
};  
console.log(calculateTotal(100));
```

A) 105  
B) undefined  
C) 10  
D) 1  

> [!question]- Answer  
> **A) 105**

---

*Q9) Which of the following is the correct syntax for an arrow function?*

A)
```js
const sum === (num1, num2) === num1 + num2  
```

B)
```js
const sum = (num1, num2) =&gt; num1 + num2  
```

C)
```js
const sum &gt;=&gt; (num1, num2) =&gt; num1 + num2 
```

D)
```js
const sum &lt;&lt;&gt;&gt; (num1, num2) =&gt; num1 + num2  
```

> [!question]- Answer  
> **B) const sum = (num1, num2) =&gt; num1 + num2**

---

*Q10) What will be result for the following code?*

```js
function greet() {  
  const developer = "Jessica";  
  console.log("Hello there!");  
}  
console.log(developer);
```

A) The string "Hello there!" will be logged to the console.  
B) You will get a reference error because developer is not defined globally.  
C) Nothing will happen and the code will run normally.  
D) The string "Hello!" will be logged to the console.  

> [!question]- Answer  
> **B) You will get a reference error because developer is not defined globally.**

---

*Q11) When can you omit a set of parentheses around a parameter list for an arrow function?*

A) You should always omit the parentheses around a parameter list.  
B) You should only omit the parentheses when you only have one parameter.  
C) You should only omit the parentheses when you are working with multiple parameters.  
D) You are never supposed to omit the parentheses for an arrow function.  

> [!question]- Answer  
> **B) You should only omit the parentheses when you only have one parameter.**

---

*Q12) When can you omit the curly braces and return keyword for an arrow function?*

A) You should always omit the curly braces and return keyword.  
B) You should never omit the curly braces and return keyword.  
C) When the function body has multiple lines of code.  
D) When the function body consists of a single expression.  

> [!question]- Answer  
> **D) When the function body consists of a single expression.**

---

*Q13) What will be the result for the following code?*

```js
function exampleFunction() {  
  return "Hello";  
  return "World!";  
};  
exampleFunction();
```

A) "Hello World!"  
B) "Hello"  
C) undefined  
D) "World!"  

> [!question]- Answer  
> **B) "Hello"**

---

*Q14) Which of the following is the correct way to use default parameters?*

A)
```js
function sum(num1, num2 = 12) {  
  return num1 + num2  
}  
```

B)
```js
function sum(num1, num2 === 12) {  
  return num1 + num2  
}  
```

C)
```js
function sum(num1, num2 &lt;&lt;&gt;&gt; 12) {  
  return num1 + num2  
}  
```

D)
```js
function sum(num1, num2 &gt;&gt; 12) {  
  return num1 + num2  
}  
```

> [!question]- Answer  
> **A) function sum(num1, num2 = 12) { return num1 + num2 }**

---

*Q15) What will be the result for the following code?*

```js
const developer = "Jessica";  
function greet() {  
  console.log("Hello, " + developer)  
}  
greet();
```

A) The string "Hello, Jessica" will be logged to the console.  
B) An error message will display in the console.  
C) Nothing will display in the console.  
D) The string "Hello, developer" will be logged to the console.  

> [!question]- Answer  
> **A) The string "Hello, Jessica" will be logged to the console.**

---

*Q16) What happens if you try to remove the curly braces for a regular function?*

A) The program will crash and not start again.  
B) You will get a syntax error.  
C) An alert box will display on the page with an error.  
D) Nothing will happen.  

> [!question]- Answer  
> **B) You will get a syntax error.**

---

*Q17) What will be the result for the following code?*

```js
const sum = (num1, num2) =&gt; num1 + num2  
console.log(sum(0, 0) + 10);
```

A) An error message will display in the console.  
B) Nothing will be logged to the console.  
C) The number 0 will be logged to the console.  
D) The number 10 will be logged to the console.  

> [!question]- Answer  
> **D) The number 10 will be logged to the console.**

---

*Q18) What will be the output for the following code?*

```js
const exampleFunction = (param1, param2) =&gt; param1 + param2;  
console.log(exampleFunction(3, "Something"));
```

A) undefined  
B) 3 + "Something"  
C) null  
D) "3Something"  

> [!question]- Answer  
> **D) "3Something"**

---

*Q19) What will be the result for the following code?*

```js
const sum = (num1, num2) =&gt; num1 + num2  
console.log(sum(0, 0) + num2);
```

A) An error message saying num1 is not defined.  
B) An error message saying num2 is not defined.  
C) undefined will be displayed in the console.  
D) The number 0 will be displayed in the console.  

> [!question]- Answer  
> **B) An error message saying num2 is not defined.**

---

*Q20) What will be the output for the following code?*

```js
const divideTwoNumbers = (num1, num2) =&gt; num1 / num2;  
console.log(divideTwoNumbers(3, 0));
```

A) Error  
B) Infinity  
C) 0  
D) null  

> [!question]- Answer  
> **B) Infinity**

---