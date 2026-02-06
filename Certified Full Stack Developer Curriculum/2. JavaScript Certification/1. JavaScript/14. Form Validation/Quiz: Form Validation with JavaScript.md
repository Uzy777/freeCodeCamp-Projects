---

## Questions

1) Which method is used to check if an input element's value satisfies the validation rules?

- checkValue()
- checkValidity()
- validateInput()
- isValid()

**Answer: checkValidity()**

---

2) What happens if the checkValidity() method finds an invalid input?

- Nothing happens.
- The input value is cleared.
- The form is automatically submitted.
- The browser displays a validation message.

**Answer: The browser displays a validation message.**

---

3) Which method is used to customize the message shown during validation failure?

- setCustomValidity()
- setValidationMessage()
- setErrorMessage()
- customMessage()

**Answer: setCustomValidity()**

---

4) What is the default validation behavior for required fields when the form is submitted?

- The form submits but gives a warning.
- The form is submitted even if required fields are empty.
- The form resets the input values.
- The browser stops the form submission if required fields are empty.

**Answer: The browser stops the form submission if required fields are empty.**

---

5) Which action does not cause an HTML form to be checked for errors?

- Changing the input value.
- Calling reportValidity().
- Submitting the form.
- Clicking a reset button.

**Answer: Clicking a reset button.**

---

6) What does checkValidity() return when all form inputs are valid?

- undefined
- true
- null
- false

**Answer: true**

---

7) When does the checkValidity() method stop form submission?

- When the form has at least one invalid input (and the default behavior of form submission is prevented).
- When the form action is empty.
- When the form method is POST.
- When the form has no submit button.

**Answer: When the form has at least one invalid input (and the default behavior of form submission is prevented).**

---

8) What happens if checkValidity() is called, but a field fails validation?

- The form closes immediately.
- The form submits without error.
- The input values are cleared.
- The invalid field is highlighted and a message appears.

**Answer: The invalid field is highlighted and a message appears.**

---

9) Which action will make checkValidity() run?

- Clicking an anchor tag.
- Changing an input value.
- Resetting the form.
- Submitting the form manually.

**Answer: Submitting the form manually.**

---

10) What is the purpose of calling checkValidity() before submitting a form?

- To automatically submit the form.
- To clear all input fields.
- To check if all input elements meet their specified constraints.
- To reload the page.

**Answer: To check if all input elements meet their specified constraints.**

---

11) What is the main purpose of e.preventDefault()?

- To stop the default action of an event.
- To clear form data.
- To reload the form.
- To reset the form values.

**Answer: To stop the default action of an event.**

---

12) When used on a form's submit event, what does e.preventDefault() do?

- It prevents the form from being submitted.
- It submits the form.
- It clears all form fields.
- It disables the form temporarily.

**Answer: It prevents the form from being submitted.**

---

13) In which scenario is e.preventDefault() most useful?

- When submitting a form and preventing a page reload.
- When closing a modal dialog.
- When opening a new page.
- When handling a button click that submits a form.

**Answer: When submitting a form and preventing a page reload.**

---

14) What happens if you forget to call e.preventDefault() on a form submit event?

- All the input fields are set to their default values.
- The form submits and refreshes the page.
- The form data is lost.
- The form does not submit.

**Answer: The form submits and refreshes the page.**

---

15) Which default behavior can be prevented using e.preventDefault()?

- Editing a form.
- Reloading the form.
- The default behavior caused by submitting a form.
- Rendering the form.

**Answer: The default behavior caused by submitting a form.**

---

16) What triggers the form's submit event?

- When the form is reset.
- When an input field changes.
- When the form's action is cleared.
- When a form's submit button is clicked or Enter is pressed.

**Answer: When a form's submit button is clicked or Enter is pressed.**

---

17) Where do you usually handle the submit event in JavaScript?

- On a text input element.
- On the form element itself.
- On a button element outside the form.
- On any field in the form.

**Answer: On the form element itself.**

---

18) What does the submit event do by default?

- It sends form data to the server specified in the form's action.
- It validates the form but doesn't submit it.
- It clears the form fields.
- It cancels form submission.

**Answer: It sends form data to the server specified in the form's action.**

---

19) Which event should you listen for to handle form data when the form is submitted in JavaScript?

- "submit"
- "change"
- "focus"
- "input"

**Answer: "submit"**

---

20) What is the default value of the method attribute in an HTML form?

- "PUT"
- "POST"
- "UPDATE"
- "GET"

**Answer: "GET"**

---