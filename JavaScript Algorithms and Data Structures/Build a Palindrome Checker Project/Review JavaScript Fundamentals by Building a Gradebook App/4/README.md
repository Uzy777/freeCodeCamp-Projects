# Message to Student with Results

Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the `studentMsg` function with `totalScores` and `studentScore` for parameters. The function should return a string representing a message to the student.

### Message Format:

If the student passed the course, the string should follow this format:
```javascript
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
```

If the student failed the course, the string should follow this format:
```javascript
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
```

Replace `average-goes-here` with the average of the total scores. Replace `grade-goes-here` with the student's grade.

### Tips:
- Use the `getAverage` function to get the class average.
- Use the `getGrade` function to get the student's grade.
- Use string concatenation (`+`) to build the message.
- Be careful with the punctuation and spaces in the message.


![alt text](image.png)