*Q1) Which of the following does NOT describe an object in JavaScript?*

A) A non-primitive data type.  
B) A container for properties and methods.  
C) A primitive data type.  
D) A collection of key-value pairs.  

> [!question]- Answer  
> **C) A primitive data type.**

---

*Q2) Which of the following object definitions is invalid?*

A) const product = { color: blue };  
B) const person = { "name": "nora" };  
C) const book = { "pages": 255 };  
D) const car = { year: 2025 };  

> [!question]- Answer  
> **A) const product = { color: blue };**

---

*Q3) How can you access the job property of this person object?*

```js
let person = { job: "Software Developer" };
```

A) person.job  
B) person#job  
C) person -> job  
D) person[job]  

> [!question]- Answer  
> **A) person.job**

---

*Q4) How can you access the street property of the person object below?*

```js
const person = {  
  address: {  
    street: "sample-street"  
  }  
};
```

A) person["address"]["street"]  
B) person -> address -> street  
C) person[address.street]  
D) person#address#street  

> [!question]- Answer  
> **A) person["address"]["street"]**

---

*Q5) Which of these property keys can only be accessed using bracket notation?*

A) A property key that is dynamic.  
B) A property key that is known and static.  
C) A property key that is nested within multiple levels of an object.  
D) A property key that might not exist in the object.  

> [!question]- Answer  
> **A) A property key that is dynamic.**

---

*Q6) Which of the following correctly uses destructuring to access the name property of the person object below?*

```js
const person = { name: "John" }
```

A) const { name } = person;  
B) const name = person.name;  
C) const { ...name } = person;  
D) const name = person["name"];  

> [!question]- Answer  
> **A) const { name } = person;**

---

*Q7) Which of the following correctly uses destructuring to access the flour property of the recipe object below?*

```js
const recipe = {  
  ingredients: {  
    flour: "2 cups",  
    sugar: "1 cup"  
  }  
};
```

A) const flour = recipe.ingredients.flour;  
B) const { ingredients: flour } = recipe;  
C) const { ingredients: { flour } } = recipe;  
D) const flour = recipe["ingredients"]["flour"];  

> [!question]- Answer  
> **C) const { ingredients: { flour } } = recipe;**

---

*Q8) How can you assign a default value to a property key when using destructuring in JavaScript?*

A) const { key: "defaultValue" } = object;  
B) const key = object.key || "defaultValue";  
C) const { key = "defaultValue" } = object;  
D) const key = object.key && "defaultValue";  

> [!question]- Answer  
> **C) const { key = "defaultValue" } = object;**

---

*Q9) How can you check if a car object has a year property?*

A) car.hasOwnProperty("year");  
B) car.hasProperty("year");  
C) car.hasOwnProperty(year);  
D) year.hasProperty("car");  

> [!question]- Answer  
> **A) car.hasOwnProperty("year");**

---

*Q10) What is an object method?*

A) An array associated with an object.  
B) A number associated with an object.  
C) A function associated with an object.  
D) A string associated with an object.  

> [!question]- Answer  
> **C) A function associated with an object.**

---

*Q11) How can you call the add method of this calculator object to add the numbers 10 and 7?*

```js
const calculator = {  
  add: function(a, b) {  
    return a + b;  
  }  
};
```

A) add.calculator(10, 7);  
B) calculator.call(add(10, 7));  
C) calculator.add(10, 7);  
D) calculator#add(10, 7);  

> [!question]- Answer  
> **C) calculator.add(10, 7);**

---

*Q12) Which operator removes a property from an object?*

A) erase  
B) discard  
C) remove  
D) delete  

> [!question]- Answer  
> **D) delete**

---

*Q13) How can you check if a score property exists in a player object?*

A) "score" in player  
B) score in player  
C) player in "score"  
D) player in score  

> [!question]- Answer  
> **A) "score" in player**

---

*Q14) How can you create a new empty object in JavaScript?*

A) new Object()  
B) Object() new  
C) new object()  
D) object() new  

> [!question]- Answer  
> **A) new Object()**

---

*Q15) What is the correct syntax for using optional chaining in JavaScript?*

A) object?.key  
B) object.["key"]  
C) object.?key  
D) object?key  

> [!question]- Answer  
> **A) object?.key**

---

*Q16) What is optional chaining used for in JavaScript?*

A) Used to safely access properties of an object that might be null or undefined.  
B) Used to write more concise code by chaining multiple method calls together in a single statement.  
C) Used to define variables with default values.  
D) Used to define optional methods within an object that may or may not be called.  

> [!question]- Answer  
> **A) Used to safely access properties of an object that might be null or undefined.**

---

*Q17) What method is used to convert a JavaScript object into a JSON string?*

A) Object.toJSON()  
B) Stringify.toJSON()  
C) JSON.stringify()  
D) JSON.toObject()  

> [!question]- Answer  
> **C) JSON.stringify()**

---

*Q18) What method converts a JSON string back into a JavaScript object?*

A) JSON.parse()  
B) JSON.object()  
C) JSON.convert()  
D) JSON.toObject()  

> [!question]- Answer  
> **A) JSON.parse()**

---

*Q19) Which one of these options accesses the color property of a toy object using bracket notation?*

A) toy[color]  
B) color[toy]  
C) toy.color  
D) toy["color"]  

> [!question]- Answer  
> **D) toy["color"]**

---

*Q20) How can you access the home phone of this learner object in JavaScript using dot notation?*

```js
const learner = {  
  name: "Nora",  
  age: 45,  
  contact: {  
    email: "nora@email.com",  
    phone: {  
      home: "123-456-7890",  
      work: "098-765-4321"  
    }  
  }  
};
```

A) learner.contact.home  
B) learner.name.phone.home  
C) learner.contact.phone.home  
D) learner.email.work  

> [!question]- Answer  
> **C) learner.contact.phone.home**

---
