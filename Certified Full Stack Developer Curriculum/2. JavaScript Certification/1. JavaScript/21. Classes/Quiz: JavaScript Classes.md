---

## Questions

1) What is the purpose of a class in JavaScript?

- To define static variables only.
- To create reusable blueprints for objects.
- To define only properties, not methods.
- To organize only primitive data.

**Answer: To create reusable blueprints for objects.**

---

2) How do you define a class in JavaScript?

- Using the class keyword.
- Using the className keyword.
- Using the object keyword.
- Using the constructor keyword only.

**Answer: Using the class keyword.**

---

3) Which method is used in a class to initialize properties?

- init
- static
- define
- constructor

**Answer: constructor**

---

4) What does this represent inside a class constructor?

- The function itself.
- An undefined reference.
- An instance of the class.
- The global class object.

**Answer: An instance of the class.**

---

5) Which of the following describes how this behaves in an arrow function inside a class method?

- It inherits the value of this from the nearest function in a different scope.
- It refers to a newly created instance of the class.
- It inherits the value of this from the global object in strict mode.
- It inherits the value of this from the enclosing scope where it is defined.

**Answer: It inherits the value of this from the enclosing scope where it is defined.**

---

6) What is the primary purpose of the extends keyword?

- To create a method in a class.
- To define static methods in a parent class constructor.
- To create a subclass that inherits from a parent class.
- To initialize default properties in the parent class.

**Answer: To create a subclass that inherits from a parent class.**

---

7) Which of the following is an example of how to create a Car class that inherits from a Vehicle class?

- class Car = Vehicle {}
- class Car uses Vehicle {}
- class Car inherits Vehicle {}
- class Car extends Vehicle {}

**Answer: class Car extends Vehicle {}**

---

8) What is the output of the following code?

```js
class Animal {
  speak() {
    return "Animal speaks";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks";
  }
}

const myDog = new Dog();
console.log(myDog.speak());
```

- undefined
- Animal speaks
- An error is raised.
- Dog barks

**Answer: Dog barks**

---

9) What is the function of the super keyword in a subclass?

- To delete methods and properties from the parent class.
- To define a new instance of the parent class.
- To call the constructor or methods of the parent class.
- To access only the static methods of the parent class.

**Answer: To call the constructor or methods of the parent class.**

---

10) Which of the following describes a static method?

- A method that belongs to the class itself, not to any instance.
- A method that is inaccessible inside the class itself.
- A method that is used only in arrow functions.
- A method that is unique to each instance of a class.

**Answer: A method that belongs to the class itself, not to any instance.**

---

11) What will the following code output?

```js
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(3, 4));
```

- NaN
- undefined
- An error is raised.
- 7

**Answer: 7**

---

12) How would you access a static property in JavaScript class?

- By using instance.propertyName after creating an instance.
- By using this.propertyName within a method.
- By using super.propertyName within a subclass.
- By using ClassName.propertyName.

**Answer: By using ClassName.propertyName.**

---

13) In which scenario would you use a static method over an instance method?

- When you need to access and modify the instance's properties.
- When the method operates on data that is shared by all instances of the class.
- When the method doesn't rely on instance-specific data and operates on class-level data.
- When the method needs to be called on an object instance.

**Answer: When the method operates on data that is shared by all instances of the class.**

---

14) What will the following code output?

```js
class MyClass {
  sayHello() {
    return "Hello!";
  }
}

console.log(MyClass.sayHello());
```

- undefined
- null
- Hello!
- It throws an error.

**Answer: It throws an error.**

---

15) What keyword is used to inherit properties and methods from another class?

- extends
- import
- inherit
- static

**Answer: extends**

---

16) What is printed by the following code?

```js
class Person {
  static species = "Human";
}

console.log(Person.species);
```

- An error is raised.
- undefined
- null
- Human

**Answer: Human**

---

17) Which of the following best describes inheritance?

- It allows a class to acquire properties and methods from another class.
- It allows an instance to define its own properties.
- It allows a static property to be converted into a non-static property.
- It allows a method to return a new object.

**Answer: It allows a class to acquire properties and methods from another class.**

---

18) What happens if a constructor is not defined in a subclass?

- The superclass's constructor will be used by default.
- An error will be thrown.
- The subclass cannot create new instances.
- The subclass will inherit the constructor from any class in the code.

**Answer: The superclass's constructor will be used by default.**

---

19) What does this represent in the following code?

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

- An undefined variable.
- The global object.
- The Animal class itself.
- The instance of Animal.

**Answer: The instance of Animal.**

---

20) What is the primary use of static properties?

- To override methods in a subclass.
- To store class-wide data shared across instances.
- To define instance-specific data.
- To define default properties for each class instance.

**Answer: To store class-wide data shared across instances.**

---