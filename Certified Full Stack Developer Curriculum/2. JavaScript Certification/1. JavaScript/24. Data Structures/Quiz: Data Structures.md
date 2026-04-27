---

Questions

Q1) What does Big O notation describe in algorithm analysis?

- How the time or space grows relative to input size (an upper bound).
- How readable the code is to other developers.
- The percentage of code lines executed during a run.
- The exact runtime in seconds for a specific computer.

**Answer: How the time or space grows relative to input size (an upper bound).**

---

Q2) When starting an algorithmic challenge, what is the best first step?

- Optimize for performance before you understand the problem.
- Write unit tests only after finishing the solution.
- Clarify the problem and constraints with examples and edge cases.
- Begin coding immediately to gain momentum.

**Answer: Clarify the problem and constraints with examples and edge cases.**

---

Q3) What is the key difference between dynamic arrays and static arrays?

- Dynamic arrays store values of different types; static arrays cannot.
- Static arrays allow duplicate values; dynamic arrays do not.
- Dynamic arrays can grow or shrink by resizing; static arrays have a fixed size.
- Dynamic arrays are faster than static arrays for every operation.

**Answer: Dynamic arrays can grow or shrink by resizing; static arrays have a fixed size.**

---

Q4) What is the amortized time complexity of appending an element to the end of a dynamic array?

- O(n log n)
- O(log n)
- O(n)
- O(1) amortized

**Answer: O(1) amortized**

---

Q5) Why does accessing the k-th element by index in a singly linked list take O(n) time?

- The list must be resized before any access.
- Nodes are stored contiguously, so shifting is required.
- The index is hashed and looked up in a table.
- You must traverse from the head node to the k-th node one by one.

**Answer: You must traverse from the head node to the k-th node one by one.**

---

Q6) Which feature does a doubly linked list have that a singly linked list does not?

- A built-in array buffer for faster iteration.
- Random access to any index in O(1) time.
- Automatic maintenance of the list length as a constant.
- Pointers to both next and previous nodes enabling backward traversal.

**Answer: Pointers to both next and previous nodes enabling backward traversal.**

---

Q7) Which of the following best describes a stack?

- A structure where any element can be removed in O(1) time.
- First In, First Out (FIFO) with removals at the front.
- A circular buffer with constant-time random access.
- Last In, First Out (LIFO) with push and pop at the top.

**Answer: Last In, First Out (LIFO) with push and pop at the top.**

---

Q8) Which operation removes the element at the front of a queue?

- peek
- pop
- push
- dequeue

**Answer: dequeue**

---

Q9) What is the typical average-case time complexity to look up a value by key in a hash map?

- O(n) because all keys must be scanned sequentially.
- O(n log n) because keys are sorted during insertion.
- O(1) on average with a good hash function and low load factor.
- O(log n) due to binary search within buckets.

**Answer: O(1) on average with a good hash function and low load factor.**

---

Q10) Which guarantee is provided by a set data structure?

- Elements are indexed by their insertion position.
- Elements are stored in sorted order by default.
- It stores only unique elements (no duplicates).
- Duplicate values are allowed and kept together.

**Answer: It stores only unique elements (no duplicates).**

---

Q11) In a dynamic array, what is the worst-case time complexity of inserting an element at index i (not at the end)?

- O(1) amortized
- O(log n)
- O(1)
- O(n)

**Answer: O(n)**

---

Q12) What is the time complexity of inserting a new node at the head of a singly linked list?

- O(n)
- O(log n)
- O(n log n)
- O(1)

**Answer: O(1)**

---

Q13) Which operation returns the top element of a stack without removing it?

- peek
- Insert at bottom.
- pop
- push

**Answer: peek**

---

Q14) Which of the following best describes a queue?

- Elements are always kept in sorted order automatically.
- First In, First Out (FIFO) with enqueue at the back and dequeue at the front.
- Random access to any index in O(1) time.
- Last In, First Out (LIFO) with removals at the top.

**Answer: First In, First Out (FIFO) with enqueue at the back and dequeue at the front.**

---

Q15) What is a high-level description of algorithm logic that is language-independent called?

- Machine code
- Debugger
- Pseudocode
- Syntax

**Answer: Pseudocode**

---

Q16) What is one of the things you should do to understand a problem?

- Start coding immediately.
- Read the problem statement multiple times.
- Skip directly to optimization.
- Ignore edge cases.

**Answer: Read the problem statement multiple times.**

---

Q17) Which two components should you identify when solving a problem?

- The variable names and other identifiers.
- The input and the expected output.
- The color scheme and code formatting.
- The programming language and the IDE.

**Answer: The input and the expected output.**

---

Q18) Which time complexity grows faster than O(n log n) as n becomes large?

- O(1)
- O(n)
- O(log n)
- O(n^2)

**Answer: O(n^2)**

---

Q19) After implementing a brute-force solution, what is a good next step?

- Discard tests and rewrite the solution from scratch.
- Avoid considering edge cases to keep the code simple.
- Analyze its time/space complexity and optimize identified bottlenecks.
- Micro-optimize constant factors before measuring.

**Answer: Analyze its time/space complexity and optimize identified bottlenecks.**

---

Q20) What does space complexity measure?

- How memory usage grows relative to input size.
- How long a program takes to compile.
- The length of a program in lines of code.
- How many CPU cores a program uses.

**Answer: How memory usage grows relative to input size.**

---