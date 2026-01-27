---

Questions

Q1) Which attribute is used for accessibility purposes to indicate if a control is expanded or collapsed?

- aria-controls
- aria-expands
- aria-expanded
- aria-controlled

**Answer: aria-expanded**

---

Q2) Which two attributes can be used in combination with aria-expanded to establish a programmatic connection between the controlling element and the element it controls?

- aria-controls and aria-label
- aria-controls and aria-owns
- aria-live and aria-owns
- aria-labelledBy and aria-owns

**Answer: aria-controls and aria-owns**

---

Q3) Which of the following attributes creates a live region on your page which can be used to notify screen reader users of dynamic content changes in the live region as they occur?

- aria-lives
- aria-live-region
- aria-live
- aria-live-regions

**Answer: aria-live**

---

Q4) Which of the following div elements will be disabled only to people using assistive technologies, such as screen readers?

- <div role="button" tabindex="-1" aria-disabled="true">Edit</div>
- <div role="button" tabindex="-1" aria-disables="true">Edit</div>
- <div role="button" tabindex="-1" aria-disabling="true">Edit</div>
- <div role="button" tabindex="-1" aria-disable="true">Edit</div>

**Answer: <div role="button" tabindex="-1" aria-disabled="true">Edit</div>**

---

Q5) Which of the following is a valid use of the aria-expanded attribute?

- <button aria-expanded="set">Menu</button>
- <button aria-expanded="expand">Menu</button>
- <button aria-expanded="true">Menu</button>
- <button aria-expanded="allow">Menu</button>

**Answer: <button aria-expanded="true">Menu</button>**

---

Q6) Which attribute is used to create a programmatic relationship between a controlling element and the element it affects on the page?

- aria-controls
- aria-region
- aria-set
- aria-expanded

**Answer: aria-controls**

---

Q7) Which of the following is NOT a common use case for live regions?

- Messages that are displayed after an action has been taken (such as an error message or confirmation).
- General status messages (such as updates about a process).
- Messages that are displayed before an action has been taken (such as a confirmation dialog).
- Content that updates periodically (such as a ticker, marquee, or countdown timer).

**Answer: Messages that are displayed before an action has been taken (such as a confirmation dialog).**

---

Q8) Which of the following examples is the correct way to indicate which tab is currently selected?

-
```
<div role="tablist">
  <button role="tab" aria-selects="true">Tab 1</button>
  <button role="tab" aria-selects="false">Tab 2</button>
  <button role="tab" aria-selects="false">Tab 3</button>
</div>
```
- 
```
<div role="tablist">
  <button role="tab" aria-select="true">Tab 1</button>
  <button role="tab" aria-select="false">Tab 2</button>
  <button role="tab" aria-select="false">Tab 3</button>
</div>
```
-
```
<div role="tablist">
  <button role="tab" aria-selecting="true">Tab 1</button>
  <button role="tab" aria-selecting="false">Tab 2</button>
  <button role="tab" aria-selecting="false">Tab 3</button>
</div>
```
-
```
<div role="tablist">
  <button role="tab" aria-selecting="true">Tab 1</button>
  <button role="tab" aria-selecting="false">Tab 2</button>
  <button role="tab" aria-selecting="false">Tab 3</button>
</div>
```

**Answer: 
```
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>
```
**

---

Q9) Which of the following is NOT a valid value for the aria-live attribute?

- on
- off
- polite
- assertive

**Answer: on**

---

Q10) Which of the following aria-live attribute values means that the update is very important and has the highest priority?

- assertive
- immediate
- urgent
- now

**Answer: assertive**

---