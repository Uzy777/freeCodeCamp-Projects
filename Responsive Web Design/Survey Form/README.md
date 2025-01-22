# Build a Survey Form

**Objective:**  
Build an app that is functionally similar to [this survey form](https://survey-form.freecodecamp.rocks). Do not copy this demo project.

## User Stories:

1. You should have a page title in an `h1` element with an `id` of `title`.
2. You should have a short explanation in a `p` element with an `id` of `description`.
3. You should have a `form` element with an `id` of `survey-form`.
4. Inside the form element, you are required to enter your name in an input field that has an `id` of `name` and a `type` of `text`.
5. Inside the form element, you are required to enter your email in an input field that has an `id` of `email`.
6. If you enter an email that is not formatted correctly, you will see an HTML5 validation error.
7. Inside the form, you can enter a number in an input field that has an `id` of `number`.
8. The number input should not accept non-numbers, either by preventing you from typing them or by showing an HTML5 validation error (depending on your browser).
9. If you enter numbers outside the range of the number input, which are defined by the `min` and `max` attributes, you will see an HTML5 validation error.
10. For the name, email, and number input fields, you can see corresponding label elements in the form that describe the purpose of each field with the following ids: `id="name-label"`, `id="email-label"`, and `id="number-label"`.
11. For the name, email, and number input fields, you can see placeholder text that gives a description or instructions for each field.
12. Inside the form element, you should have a select dropdown element with an `id` of `dropdown` and at least two options to choose from.
13. Inside the form element, you can select an option from a group of at least two radio buttons that are grouped using the `name` attribute.
14. Inside the form element, you can select several fields from a series of checkboxes, each of which must have a `value` attribute.
15. Inside the form element, you are presented with a `textarea` for additional comments.
16. Inside the form element, you are presented with a button with an `id` of `submit` to submit all the inputs.

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note:**  
Be sure to add `<link rel="stylesheet" href="styles.css">` in your HTML to link your stylesheet and apply your CSS.

## Tests:

- **Passed:** 1. You should have an `h1` element with an `id` of `title`.
- **Passed:** 2. Your `#title` should not be empty.
- **Passed:** 3. You should have a `p` element with an `id` of `description`.
- **Passed:** 4. Your `#description` should not be empty.
- **Passed:** 5. You should have a `form` element with an `id` of `survey-form`.
- **Passed:** 6. You should have an input element with an `id` of `name`.
- **Passed:** 7. Your `#name` should have a `type` of `text`.
- **Passed:** 8. Your `#name` should require input.
- **Passed:** 9. Your `#name` should be a descendant of `#survey-form`.
- **Passed:** 10. You should have an input element with an `id` of `email`.
- **Passed:** 11. Your `#email` should have a `type` of `email`.
- **Passed:** 12. Your `#email` should require input.
- **Passed:** 13. Your `#email` should be a descendant of `#survey-form`.
- **Passed:** 14. You should have an input element with an `id` of `number`.
- **Passed:** 15. Your `#number` should be a descendant of `#survey-form`.
- **Passed:** 16. Your `#number` should have a `type` of `number`.
- **Passed:** 17. Your `#number` should have a `min` attribute with a numeric value.
- **Passed:** 18. Your `#number` should have a `max` attribute with a numeric value.
- **Passed:** 19. You should have a label element with an `id` of `name-label`.
- **Passed:** 20. You should have a label element with an `id` of `email-label`.
- **Passed:** 21. You should have a label element with an `id` of `number-label`.
- **Passed:** 22. Your `#name-label` should contain text that describes the input.
- **Passed:** 23. Your `#email-label` should contain text that describes the input.
- **Passed:** 24. Your `#number-label` should contain text that describes the input.
- **Passed:** 25. Your `#name-label` should be a descendant of `#survey-form`.
- **Passed:** 26. Your `#email-label` should be a descendant of `#survey-form`.
- **Passed:** 27. Your `#number-label` should be a descendant of `#survey-form`.
- **Passed:** 28. Your `#name` should have a `placeholder` attribute and value.
- **Passed:** 29. Your `#email` should have a `placeholder` attribute and value.
- **Passed:** 30. Your `#number` should have a `placeholder` attribute and value.
- **Passed:** 31. You should have a select field with an `id` of `dropdown`.
- **Passed:** 32. Your `#dropdown` should have at least two selectable (not disabled) option elements.
- **Passed:** 33. Your `#dropdown` should be a descendant of `#survey-form`.
- **Passed:** 34. You should have at least two input elements with a type of radio (radio buttons).
- **Passed:** 35. You should have at least two radio buttons that are descendants of `#survey-form`.
- **Passed:** 36. All your radio buttons should have a `value` attribute and value.
- **Passed:** 37. All your radio buttons should have a `name` attribute and value.
- **Passed:** 38. Every radio button group should have at least 2 radio buttons.
- **Passed:** 39. You should have at least two input elements with a type of checkbox (checkboxes) that are descendants of `#survey-form`.
- **Passed:** 40. All your checkboxes inside `#survey-form` should have a `value` attribute and value.
- **Passed:** 41. You should have at least one `textarea` element that is a descendant of `#survey-form`.
- **Passed:** 42. You should have an input or button element with an `id` of `submit`.
- **Passed:** 43. Your `#submit` should have a `type` of `submit`.
- **Passed:** 44. Your `#submit` should be a descendant of `#survey-form`.