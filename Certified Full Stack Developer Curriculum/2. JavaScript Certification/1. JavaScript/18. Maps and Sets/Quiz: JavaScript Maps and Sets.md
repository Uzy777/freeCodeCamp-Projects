---

## Questions

1) What is a Set in JavaScript?

- A data structure that only stores strings and numbers.
- A collection in which a value can only occur once.
- A collection that does not allow deletion of its elements.
- A data structure that allows duplicate values.

**Answer: A collection in which a value can only occur once.**

---

2) Which of the following methods is available in Maps but not in Sets?

- set()
- clear()
- has()
- values()

**Answer: set()**

---

3) What method is used to add elements to a Set?

- .append()
- .add()
- .push()
- .insert()

**Answer: .add()**

---

4) How do you check if a Set contains a certain value?

- .has()
- .find()
- .hasValue()
- .contains()

**Answer: .has()**

---

5) Which of these is a great use case for Sets?

- Eliminating duplicates from an array.
- Creating ordered lists of items.
- Storing hierarchical data structures in the browser local storage.
- Managing key-value pairs in a database.

**Answer: Eliminating duplicates from an array.**

---

6) What is a WeakSet in JavaScript?

- A Set-like collection that only allows primitive data types.
- A Set-like collection that prevents values from being removed.
- A Set-like collection that only stores objects.
- A Set-like collection that allows duplicate values.

**Answer: A Set-like collection that only stores objects.**

---

7) What is one difference between a Set and a WeakSet?

- A Set allows garbage collection, whereas a WeakSet does not.
- A Set can hold any type of value, while a WeakSet only holds objects.
- A WeakSet can store any type of value, including numbers.
- A Set does not allow duplicate values, but a WeakSet does.

**Answer: A Set can hold any type of value, while a WeakSet only holds objects.**

---

8) What is a Map in JavaScript?

- A collection of key-value pairs of any type.
- A collection that does not allow deletion of its items.
- A collection that only allows unique values.
- A collection that can only use strings as keys.

**Answer: A collection of key-value pairs of any type.**

---

9) What method is used to insert key-value pairs into a Map?

- .insert()
- .set()
- .add()
- .append()

**Answer: .set()**

---

10) What will the following code output?

```js
const myMap = new Map();
myMap.set('a', 1);
myMap.set('a', 2);
console.log(myMap.get('a'));
```

- null
- 1
- undefined
- 2

**Answer: 2**

---

11) How does a Map differ from an Object in JavaScript?

- Objects allow any type as keys, while Maps only allow strings.
- Maps do not support iteration, while Objects do.
- A Map only allows numbers as keys.
- Maps allow any type of key, but Objects only allow strings and symbols.

**Answer: Maps allow any type of key, but Objects only allow strings and symbols.**

---

12) How can you remove a key-value pair from a Map?

- .deleteKey()
- .delete()
- .erase()
- .remove()

**Answer: .delete()**

---

13) What does the size property of a Map return?

- The number of indexes in the Map.
- The total memory used by the Map.
- The number of key-value pairs in the Map.
- The number of unique values in the Map.

**Answer: The number of key-value pairs in the Map.**

---

14) What is a WeakMap in JavaScript?

- A Map-like collection that automatically sorts its keys.
- A Map-like collection with weak references to the keys.
- A Map-like collection that allows primitive values as keys.
- A Map-like collection that blocks the deletion of items.

**Answer: A Map-like collection with weak references to the keys.**

---

15) What is one difference between a Map and a WeakMap?

- A WeakMap allows duplicate keys, whereas a Map does not.
- A Map is iterable, whereas a WeakMap is not.
- A Map allows garbage collection, whereas a WeakMap does not.
- A Map allows only primitive types as keys, whereas a WeakMap only allows objects.

**Answer: A Map is iterable, whereas a WeakMap is not.**

---

16) Which of the following methods does NOT exist on a WeakMap?

- .set()
- .delete()
- .has()
- .size()

**Answer: .size()**

---

17) What will be the output of the following code?

```js
const set = new Set([1, 2, 3]);
set.delete(2);
console.log(set.has(2));
```

- true
- 2
- undefined
- false

**Answer: false**

---

18) How can you iterate over the values in a Set?

- By using the .filter() method.
- By using the .forEach() method.
- By using the .map() method.
- By using the .reduce() method.

**Answer: By using the .forEach() method.**

---

19) Which two methods of Sets return a SetIterator that contains the values of a certain Set?

- entries() and values()
- keys() and values()
- forEach() and values()
- has() and add()

**Answer: keys() and values()**

---

20) What will be the output of the following code?

```js
const map = new Map([["a", 1], ["b", 2]]);
map.clear();
console.log(map.size);
```

- 2
- 1
- undefined
- 0

**Answer: 0**

---