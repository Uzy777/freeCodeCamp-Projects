---

Questions

Q1) What is asynchronous programming?

- A way to make network requests, typically to retrieve or send data to the server.
- A method to execute code concurrently without blocking the main thread.
- A technique to handle errors in your code.
- A method for executing code sequentially.

**Answer: A method to execute code concurrently without blocking the main thread.**

---

Q2) What is a thread?

- A function used to retrieve data from the server.
- A program that executes JavaScript code in a web browser.
- A special type of function that is passed as an argument to another function.
- A sequence of instructions that can be executed independently of the main program flow.

**Answer: A sequence of instructions that can be executed independently of the main program flow.**

---

Q3) What is the purpose of the Fetch API in JavaScript?

- To make network requests to servers.
- To manage asynchronous callbacks.
- To render dynamic HTML content.
- To create and manage cookies.

**Answer: To make network requests to servers.**

---

Q4) Which HTTP method is used to send data to a server for processing?

- HEAD
- DELETE
- GET
- POST

**Answer: POST**

---

5) Which of the following is the correct way to fetch data from an API?

```js
fetch('https://api.example.com/data')
  .allow(response => response.json())
  .allow(data => console.log(data))
```

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
```

```js
fetch('https://api.example.com/data')
  .accept(response => response.json())
  .accept(data => console.log(data))
```

```js
fetch('https://api.example.com/data')
  .send(response => response.json())
  .send(data => console.log(data))
```

**Answer: B**

---

---

Questions

Q6) What is a promise in JavaScript?

- A special type of callback function that you must use in all higher order functions.
- A way to synchronize multiple operations when working with the Fetch API.
- A technique used to handle errors when you work with the Fetch API.
- An object that represents the eventual completion (or failure) of an asynchronous operation.

**Answer: An object that represents the eventual completion (or failure) of an asynchronous operation.**

---

Q7) What does promise chaining allow you to do?

- Allows you to execute multiple synchronous operations in parallel.
- Allows you to perform a sequence of asynchronous operations one after the other.
- Allows you to retry failed operations automatically.
- Allows you to handle synchronous operations more efficiently.

**Answer: Allows you to perform a sequence of asynchronous operations one after the other.**

---

Q8) Which method is used to handle a successful completion of a promise?

- .finally()
- .catch()
- .then()
- .error()

**Answer: .then()**

---

Q9) Which method is used to handle errors in a promise chain?

- .then()
- .finally()
- .catch()
- .error()

**Answer: .catch()**

---

Q10) Which of the following is NOT a valid HTTP method?

- GET
- SEND
- POST
- PUT

**Answer: SEND**

---

Q11) Which of the following is the correct syntax for creating an async function?

- async {} => ()
- function async myFunction() {}
- async function myFunction() {}
- function myFunction() {}

**Answer: async function myFunction() {}**

---

Q12) What does the await keyword do in an async function?

- It pauses the execution of the function until the promise is resolved.
- It executes code immediately without waiting and returns an object.
- It logs the result of the promise and returns null.
- It creates a new promise.

**Answer: It pauses the execution of the function until the promise is resolved.**

---

Q13) Which of the following APIs is used to provide a way for websites to request the user's location?

- Geo API
- Locator API
- Locate API
- Geolocation API

**Answer: Geolocation API**

---

Q14) Which of the following attributes downloads the script asynchronously but waits for the HTML document to be fully parsed before running the script?

- deferred
- deferring
- defer
- asyncDefer

**Answer: defer**

---

15) What will the following code return?

```js
fetch('https://api.example.com/data')
```

- An error saying that the data is corrupted.
- An error saying that the data cannot be fetched.
- A Promise that resolves to a Response object.
- Nothing will be returned and JavaScript will move to the next function in the script.

**Answer: A Promise that resolves to a Response object.**

---

---

Questions

Q16) What is the default HTTP method for the Fetch API?

- GET
- POST
- DELETE
- PUT

**Answer: GET**

---

Q17) Which of the following methods is used to delete resources on the server?

- DELETE
- REMOVE
- DELETING
- REMOVING

**Answer: DELETE**

---

18) Which of the following is the correct way to create a promise?

```js
const promise = set Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received successfully');
  }, 2000);
});
```

```js
const promise = put Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received successfully');
  }, 2000);
});
```

```js
const promise = get Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received successfully');
  }, 2000);
});
```

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received successfully');
  }, 2000);
});
```

**Answer: D**

---

Q19) Which of the following attributes tells the browser to download the script file asynchronously while continuing to parse the HTML document?

- catch
- put
- async
- resolve

**Answer: async**

---

Q20) Which method of the Geolocation API is used to get the current position of a device?

- getPosition()
- getLocation()
- getCurrentPosition()
- getLatLong()

**Answer: getCurrentPosition()**

---