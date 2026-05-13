---

Questions

Q1) What are the two essential properties that must be present in a problem for dynamic programming to be an effective solution approach?

- Sequential processing and parallel computation
- Overlapping subproblems and optimal substructure
- Fast execution time and minimal memory usage
- Recursion capability and iterative loops

**Answer: Overlapping subproblems and optimal substructure**

---

Q2) What is the primary difference between the memoization and tabulation approaches in dynamic programming?

- Memoization is faster but uses more memory and CPU cycles than tabulation.
- Memoization uses hash tables while tabulation uses arrays, making it more efficient.
- Memoization is a top-down approach using recursion, while tabulation is a bottom-up approach using iteration.
- Memoization can only solve simpler problems than tabulation.

**Answer: Memoization is a top-down approach using recursion, while tabulation is a bottom-up approach using iteration.**

---

Q3) Why do naive recursive solutions to dynamic programming problems typically have exponential time complexity?

- Because they require sorting data in exponential time.
- Because they use exponential amounts of memory to store variables.
- Because each recursive call branches multiple times, causing the same subproblems to be recalculated repeatedly.
- Because they must check all possible permutations of the input.

**Answer: Because each recursive call branches multiple times, causing the same subproblems to be recalculated repeatedly.**

---

Q4) What does optimal substructure mean in the context of dynamic programming?

- The optimal solution can be constructed from optimal solutions to its subproblems.
- The problem must have a unique, single optimal solution.
- The solution must minimize both time and space complexity simultaneously.
- The algorithm must use the most efficient data structure available.

**Answer: The optimal solution can be constructed from optimal solutions to its subproblems.**

---

Q5) When implementing memoization, what happens when a function is called with arguments that have already been computed?

- The function recalculates the result to ensure accuracy.
- The function averages the old and new results for better precision.
- An error is thrown because duplicate calculations are not allowed.
- The cached result is returned immediately without recomputation.

**Answer: The cached result is returned immediately without recomputation.**

---

Q6) What is a key advantage of using tabulation instead of memoization?

- Tabulation can solve a broader class of problems.
- Tabulation always requires less memory than memoization.
- Tabulation is always easier to implement and understand.
- Tabulation avoids recursion overhead and provides predictable sequential execution.

**Answer: Tabulation avoids recursion overhead and provides predictable sequential execution.**

---

Q7) In a bottom-up dynamic programming solution, why are base cases initialized first?

- To improve the time complexity of the algorithm.
- To provide foundational values upon which all larger subproblems are built.
- To allocate memory for the data structure efficiently.
- To prevent infinite loops in the algorithm.

**Answer: To provide foundational values upon which all larger subproblems are built.**

---

Q8) How does dynamic programming transform the time complexity of problems that exhibit overlapping subproblems?

- From exponential to polynomial by storing and reusing subproblem solutions.
- From quadratic to linear by optimizing loop structures.
- From polynomial to logarithmic by dividing the problem efficiently.
- From linear to constant by using hash tables.

**Answer: From exponential to polynomial by storing and reusing subproblem solutions.**

---

Q9) What trade-off does dynamic programming typically make to achieve better time complexity?

- It requires more complex algorithms that are harder to maintain.
- It sacrifices code readability for faster execution.
- It limits the size of problems that can be solved.
- It uses additional space to store intermediate results.

**Answer: It uses additional space to store intermediate results.**

---

Q10) In which scenario would dynamic programming NOT be the appropriate algorithmic approach?

- When subproblems are independent and don't overlap.
- When the problem requires finding an optimal solution.
- When the problem can be broken into smaller subproblems.
- When space complexity must be minimized.

**Answer: When subproblems are independent and don't overlap.**

---