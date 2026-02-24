---

## Questions

1) What does CRUD stand for in the context of web development?

- Create, Replace, Undo, Delete.
- Create, Read, Update, Delete.
- Connect, Remove, Update, Display.
- Copy, Retrieve, Update, Delete.

**Answer: Create, Read, Update, Delete.**

---

2) Which HTTP method is commonly associated with the Create operation in a RESTful API?

- GET
- DELETE
- PUT
- POST

**Answer: POST**

---

3) Which of the following CRUD operations is typically performed when modifying an existing record in a database?

- Update
- Create
- Delete
- Read

**Answer: Update**

---

4) What is the main difference between localStorage and sessionStorage in the Web Storage API?

- localStorage data persists until explicitly deleted, while sessionStorage data is cleared when the page session ends.
- sessionStorage is faster than localStorage for retrieving data.
- localStorage stores data in memory, while sessionStorage stores data on the disk.
- localStorage data is only available during a session, while sessionStorage persists across sessions.

**Answer: localStorage data persists until explicitly deleted, while sessionStorage data is cleared when the page session ends.**

---

5) Which method is used to store data in localStorage?

- localStorage.storeData()
- localStorage.setItem()
- localStorage.setData()
- localStorage.saveItem()

**Answer: localStorage.setItem()**

---

6) How can you remove a single item from sessionStorage?

- sessionStorage.deleteItem('key')
- sessionStorage.clearItem('key')
- sessionStorage.removeItem('key')
- sessionStorage.remove('key')

**Answer: sessionStorage.removeItem('key')**

---

7) What is the difference between PUT and PATCH?

- PUT only adds new resources, while PATCH updates existing ones.
- PUT is used for retrieving data, while PATCH is used for sending data.
- PUT modifies specific fields, while PATCH replaces the entire resource.
- PUT replaces the entire resource, while PATCH updates specific fields.

**Answer: PUT replaces the entire resource, while PATCH updates specific fields.**

---

8) What is the cache storage used for?

- Cache storage is used to track user sessions and preferences by storing key-value pairs accessible across multiple websites.
- Cache storage is used to store frequently requested network resources, reducing load times and improving performance.
- Cache storage is used to store large volumes of structured data in the browser using a database system.
- Cache storage is used to permanently store user credentials securely in the browser for authentication purposes.

**Answer: Cache storage is used to store frequently requested network resources, reducing load times and improving performance.**

---

9) What is a cookie in the context of web development?

- A small piece of data stored by the user's web browser.
- A method to store large files on a server.
- A type of HTTP request.
- A piece of code that runs in the browser.

**Answer: A small piece of data stored by the user's web browser.**

---

10) Which of the following methods is used to manually set a cookie in JavaScript?

- document.setCookie
- document.createCookie
- document.cookie
- document.cookie.set

**Answer: document.cookie**

---

11) Which of the following code snippets correctly deletes a cookie named username?

- document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
- cookie.delete("username");
- document.removeCookie("username");
- document.cookie.delete("username");

**Answer: document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"**

---

12) Which of the following statements about cookies is false?

- Session cookies expire when the browser is closed.
- Cookies can only be set by the server.
- HttpOnly cookies cannot be accessed by JavaScript.
- Secure cookies are only transmitted over HTTPS.

**Answer: Cookies can only be set by the server.**

---

13) What is browser fingerprinting?

- A way of tracking users through browser and device attributes.
- A method of storing data in the browser's cache.
- A form of data encryption.
- A technique used in identifying users based on their IP address.

**Answer: A way of tracking users through browser and device attributes.**

---

14) What is a primary risk associated with storing passwords in local storage?

- Local storage doesn't work offline.
- Local storage data is lost once you delete cookies.
- Local storage is not encrypted and can be accessed easily.
- Local storage data is deleted once you close the browser tab.

**Answer: Local storage is not encrypted and can be accessed easily.**

---

15) What of the following statements is true about client-side storage?

- Client-side storage is more secure than server-side storage.
- Client-side storage uses objects instead of strings to store data.
- Client-side storage uses cloud services to sync user data across multiple devices.
- Client-side storage allows websites to store data on a user's device.

**Answer: Client-side storage allows websites to store data on a user's device.**

---

16) What is the primary benefit of using IndexedDB over localStorage?

- IndexedDB is supported in all web browsers.
- IndexedDB can handle larger amounts of data and more complex queries.
- IndexedDB has a simpler API.
- IndexedDB does not require user consent for data storage.

**Answer: IndexedDB can handle larger amounts of data and more complex queries.**

---

17) Which of the following is a valid way to retrieve data from an object store in IndexedDB?

- Using get() on the store reference.
- Using query() to access specific records.
- Calling retrieve() on the object store.
- Using fetch() method.

**Answer: Using get() on the store reference.**

---

18) What type of transactions does IndexedDB support?

- Read and write transactions.
- Asynchronous transactions only.
- Read transactions only.
- Synchronous transactions only.

**Answer: Read and write transactions.**

---

19) Which of the following is true about the lifecycle of a Service Worker?

- Service Workers can be activated before they are installed.
- Service Workers run in the main thread of the web application.
- Service Workers can only run when the web application is open in the browser.
- A Service Worker can intercept network requests after it has been activated.

**Answer: A Service Worker can intercept network requests after it has been activated.**

---

20) Which statement best describes a key feature of Progressive Web Apps (PWAs)?

- PWAs can only be accessed through specific browsers.
- PWAs are required to have a back-end server.
- PWAs can only be installed on mobile devices.
- PWAs provide offline functionality through Service Workers.

**Answer: PWAs provide offline functionality through Service Workers.**

---
