Q1) Which of the following is the correct way to add a click event to a button in React?

```
<button onClick={{ handleLoginClick }} />
```

```
<button onClick={handleLoginClick} />
```

```
<button onclick={handleLoginClick} />
```

```
<button onClick={handleLoginClick()} />
```

**Answer: B**

---

Q2) What is a React Synthetic Event?

- A type of JSX element for `submit` events only.
- A wrapper around native events like `click` and `submit` events.
- A way to alter the bubbling phase of event propagation to be more user friendly.
- A type of JSX element for `inputs` and `submit` events only.

**Answer: A wrapper around native events like `click` and `submit` events.**

---

Q3) Which of the following is a common prefix used for naming event handler functions?

- handling
- isHandling
- handle
- hasHandled

**Answer: handle**

---

Q4) What are the three major stages in React's rendering?

- Mounting, updating and unmounting.
- Triggering, rendering and committing.
- Fetching, decoding and execution.
- Handshake, loading and hydration.

**Answer: Triggering, rendering and committing.**

---

Q5) Which of the following is the correct way to work with the `useState` hook?

```
const <count, setCount> = useState(0);
```

```
const [count, setCount] = useState<0>;
```

```
const [count, setCount] = useState(0);
```

```
const count, setCount = useState(0);
```

**Answer: B**

---

Q6) Which of the following is NOT a valid attribute used for handling React events?

- onSubmit
- onChange
- onClick
- onHandle

**Answer: onHandle**

---

Q7) Which of the following is the correct way to update array state?

```
const [certificates, setCertificates] = useState([]);
```

```
setCertificates().append("Front-End");
```

```
setCertificates(previousItems => previousItems, "Front-End");
```

```
setCertificates.push("Front-End");
```

```
setCertificates(previousItems => [...previousItems, "Front-End"]);
```

**Answer: D**

---

Q8) What is wrong with this function?

```
function updateSpaceship() {
setSpaceship(previousState => ({
name: "Discovery"
}));
}
```

- `previousState` needs to be surrounded by parenthesis.
- Updating a `useState` variable is not allowed inside a nested function.
- Arrow functions should not be used inside a state setter function.
- `previousState` must be spread before `name` to ensure any other properties are not overwritten.

**Answer: `previousState` must be spread before `name` to ensure any other properties are not overwritten.**

---

Q9)  Which of the following is the correct way to update state to remove items from an array?

```
const removeItem = (id) => {
setItems((prevItems) => prevItems.reduce((item) => item.id));
};
```

```
const removeItem = (id) => {
setItems((prevItems) => prevItems.map((item) => item.id !== id));
};
```

```
const removeItem = (id) => {
setItems((prevItems) => prevItems.filter((item) => item.id !== id));
};
```

```
const removeItem = (id) => {
setItems(() => delete item.id !== id);
};
```

**Answer: C**

---

Q10) What is the `ref` attribute typically used for in React?

- It is used to audit for performance issues in react components.
- It is used to access a DOM node.
- It is used to remove DOM nodes.
- It is used to audit for accessibility issues in react components.

**Answer: It is used to access a DOM node.**

---

Q11) Which of the following is the correct way to access the current value for a `ref`?

```
const inputRef = useRef(null);
inputRef.initial
```

```
const inputRef = useRef(null);
inputRef.current
```

```
const inputRef = useRef(null);
inputRef.curr
```

```
const inputRef = useRef(null);
inputRef.val
```

**Answer: B**

---

Questions

Q12) How many times will this message be logged to the console?

useEffect(() => {
  console.log("Nice work!!");
}, []);

- Three times.
- Twice.
- None as the dependency array is empty.
- Only once on initial render.

**Answer: Only once on initial render.**

---

Q13) What are React custom hooks typically used for?

- They are helpful for reusing stateful logic across components.
- They are not typically used, built-in hooks are preferred.
- They are used to execute an app's most complex functionality.
- They replace life cycle methods from previous versions of React.

**Answer: They are helpful for reusing stateful logic across components.**

---

Q14) How many times will this message get logged to the console?

useEffect(() => {
  console.log("I love freeCodeCamp!");
});

- It will be logged each time the component renders.
- It will be logged anytime a form is submitted or a click event happens.
- It will only get logged once.
- It will be logged twice.

**Answer: It will be logged each time the component renders.**

---

15) Which of the following is the correct way to prevent a browser refresh for an `onSubmit` event?

```
function handleSubmit(event) {
event.prevent();
console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
<input type="text" />
<button>Submit</button>
</form>;
```

```
function handleSubmit(event) {
event.defaultPrevent();
console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
<input type="text" />
<button>Submit</button>
</form>;
```

```
function handleSubmit(event) {
event.Default();
console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
<input type="text" />
<button>Submit</button>
</form>;
```

```
function handleSubmit(event) {
event.preventDefault();
console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
<input type="text" />
<button>Submit</button>
</form>;
```

**Answer: D**

---

Questions

Q16) Which of the following hooks is typically used to fetch data?

- useEffect
- useState
- useReducer
- useDebounce

**Answer: useEffect**

---

Q17) Which of the following is NOT a valid property on the native Event object?

- target
- prop
- type
- currentTarget

**Answer: prop**

---

Q18) Which of the following rendering stages occurs when React detects that something has changed and the user interface (UI) might need to be updated?

- commit
- trigger
- loop
- setter

**Answer: trigger**

---

Q19) Which of the following stages refers to when React takes the prepared changes from the virtual DOM and applies them to the real DOM?

- setter
- trigger
- commit
- render

**Answer: commit**

---

Q20) What is the purpose of the dependencies in a useEffect?

useEffect(() => {
  // Your side effect logic (usually a function) goes here
}, [dependencies]);

- The optional dependencies argument controls when the effect runs.
- The optional dependencies argument makes the effect run on an infinite loop.
- The optional dependencies argument is used to prevent the effect from running.
- The optional dependencies argument does not effect anything dealing with the useEffect.

**Answer: The optional dependencies argument controls when the effect runs.**

---