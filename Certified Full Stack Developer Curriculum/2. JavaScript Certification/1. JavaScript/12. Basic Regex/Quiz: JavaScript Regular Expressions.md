---

## Questions

Q) Which of the following is NOT a valid regular expression?

- /hello, world!/i
- new RegExp("hello, world!")
- "hello, world!"
- /(?:^|\s)hello[,]?\sworld[!]?(?:$|\s)/i

**Answer: "hello, world!"**

---

Q) Which RegExp contains the same pattern as the regular expression /f[o0]{2} b[a4@]r/i?

- new RegExp("f[o0]{2} b[a4@]r")
- new RegExp("/f[o0]{2} b[a4@]r/", "i")
- new RegExp("f[o0]{2} b[a4@]r", "i")
- new RegExp("f[o0]{2} b[a4@]r", "g")

**Answer: new RegExp("f[o0]{2} b[a4@]r", "i")**

---

Q) What is the return type for the regular expression method test?

- null, the method test only validates if the given regular expression is valid.
- An object containing information about the (sub)string the regular expression matched.
- A boolean indicating whether the string matches the regular expression.
- An array of strings that matched the regular expression.

**Answer: A boolean indicating whether the string matches the regular expression.**

---

Q) What does the match method do when passed a regular expression without any flags?

- It searches for the first full match, and returns a boolean indicating whether or not a match was found.
- It searches for any strings that match the given regular expression, and returns ALL matches as an array.
- It searches for the first full match, and returns an array containing that first match.
- It searches for the first full match, and returns the starting index of that match.

**Answer: It searches for the first full match, and returns an array containing that first match.**

---

Q) Which is the best use case for test?

- To extract all matches from a given string.
- For verifying a given regular expression.
- To check if a given string matches the regular expression.
- For getting detailed information about a string match, such as the length of the matched string.

**Answer: To check if a given string matches the regular expression.**

---

Q) What is the purpose of using replace?

- To replace a matched string with a given replacement string.
- To replace the current regular expression with a new regular expression.
- When given an index and a string, to replace the character at the specified index with the string provided.
- To remove all instances of a matched substring from a string.

**Answer: To replace a matched string with a given replacement string.**

---

Q) What is the difference between match and matchAll?

- match returns a number indicating the starting index of the first match found, while matchAll returns an array of numbers containing indices where a match was found.
- match always returns a string, while matchAll always returns an array of matches.
- match returns a boolean indicating whether a match is found, while matchAll returns a number representing the amount of matches found.
- match returns an array of strings that match, while matchAll returns an iterator object of all matches found.

**Answer: match returns an array of strings that match, while matchAll returns an iterator object of all matches found.**

---

Q) Which of the following is the correct use of replaceAll?

- foo.replaceAll(/foobar/, "fizzbuzz")
- foo.replaceAll(/foobar/i, "fizzbuzz")
- foo.replaceAll(/foobar/g, "fizzbuzz")
- foo.replaceAll(/foobar/gi, /fizzbuzz/)

**Answer: foo.replaceAll(/foobar/g, "fizzbuzz")**

---

Q) Which of the following character classes is equivalent to the regular expression /[a-zA-Z0-9_]/?

- \n
- \s
- \d
- \w

**Answer: \w**

---

Q) Which of the following character classes is most appropriate for extracting digits from a phone number?

- \D
- \s
- \w
- \d

**Answer: \d**

---

Q) What happens when a lookahead (?=) is used in a regular expression?

- The lookahead will assert to the left of the string, verifying that the sub-pattern IS present.
- The lookahead will assert to the right of the string, verifying that the sub-pattern IS NOT present.
- A lookahead asserts to the right of the string, verifying that the sub-pattern IS present.
- A lookahead is an alternate regular expression pattern used when the main pattern fails to match.

**Answer: A lookahead asserts to the right of the string, verifying that the sub-pattern IS present.**

---

Q) When making a regular expression, where should a lookbehind (?<=) be placed?

- The lookbehind should include the main pattern of the regular expression.
- The lookbehind should be placed to the left of the main pattern of the regular expression.
- The lookbehind should be placed to the right of the main pattern of the regular expression.
- The lookbehind can be placed anywhere in the regular expression.

**Answer: The lookbehind should be placed to the left of the main pattern of the regular expression.**

---

Q) Which quantifier matches the preceding element zero or one times?

- ?
- +
- *
- a{0,}

**Answer: ?**

---

Q) Which of the following regular expressions only allows numbers between 0 and 999,999?

- /^\d{0, 999999}$/
- /^\d+$/
- /^\d{6}$/
- /^\d{1,6}$/

**Answer: /^\d{1,6}$/**

---

Q) Which of the following statements is true about the custom character class ([])?  

- It's a set of characters to be removed from the match.  
- It can define a set of characters to match without the need to escape any special characters.  
- It represents a set of characters in Unicode form.  
- It can define a custom set of characters to match.  

**Answer: It can define a custom set of characters to match.**

---

Q) Which of the following character classes correctly matches the uppercase alphabet?

- [A-Z]
- [a-z]
- \w
- [AZ]

**Answer: [A-Z]**

---

Q) What happens when a capturing group (...) is used in a regular expression?

- The capturing group attempts to match using the given subpattern, and continues with the result in memory.
- The capturing group is a prioritized subpattern, which will immediately return when a match is found for the subpattern.
- The capturing group is immediately evaluated, regardless of where it is located in the regular expression.
- The capturing group attempts to match using the given subpattern, and continues without memorizing the result.

**Answer: The capturing group attempts to match using the given subpattern, and continues with the result in memory.**

---

Q) What happens when a non-capturing group (?:...) is used in a regular expression?

- The non-capturing group attempts to match using the given subpattern, and continues without keeping the result in memory.
- The non-capturing group attempts to match using the given subpattern, and continues with the result in memory.
- The non-capturing group is considered an optional match, so only a successful match is added on the result.
- The non-capturing group immediately terminates when it finds a match for the given subpattern.

**Answer: The non-capturing group attempts to match using the given subpattern, and continues without keeping the result in memory.**

---

Q) Given the following regular expression, which of these tests will return true?
const regex = /(cat)\s+\1/i;

- regex.test("cat\s+cat");
- regex.test("cat   cat");
- regex.test("catcat");
- regex.test("cat dog cat");

**Answer: regex.test("cat   cat");**

---

Q) What does the wildcard character class (.) do in a regular expression?

- It matches any single character except a newline.
- It matches only whitespace characters.
- It matches a single digit.
- It matches the start of a string.

**Answer: It matches any single character except a newline.**

---