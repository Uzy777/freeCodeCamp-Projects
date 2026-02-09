---

## Questions

1) What is the JavaScript Date object used for?

- Work with just dates only.
- Work with just leap years.
- Work with just time only.
- Work with both dates and time.

**Answer: Work with both dates and time.**

---

2) Which code creates a new Date object instance?

- new.Date()
- Date.new()
- new Date()
- Date.fetch()

**Answer: new Date()**

---

3) How does Date.now() work?

- It returns the current time in nanoseconds since July 4, 1776.
- It returns the current time in milliseconds since January 1, 1970.
- It returns the current date in minutes since January 1, 1970.
- It returns the previous time in milliseconds since January 1, 1974.

**Answer: It returns the current time in milliseconds since January 1, 1970.**

---

4) Which method returns the current year?

- getLastYear()
- getFullYear()
- getLeapYear()
- getNewYear()

**Answer: getFullYear()**

---

5) Which method returns the current month, as a zero-indexed integer?

- getMonth()
- getCalendar()
- get.Month()
- fetchMonth()

**Answer: getMonth()**

---

6) Which method formats a date as a string?

- toStingy()
- toString()
- formatDate()
- getMonth()

**Answer: toString()**

---

7) What would the result of console.log(new Date().getFullYear()); be, if it is June 12th 2022?

- "2023"
- "June 12th 2022"
- "2022"
- "06/12/2022"

**Answer: "2022"**

---

8) What does fr-FR in date.toLocaleDateString("fr-FR") represent?

- A French-Canadian locale.
- A French-Italian locale.
- A French-Finnish locale.
- A French locale.

**Answer: A French locale.**

---

9) If the time in your locale is formatted as HH:MM:SS AM/PM, which line of code would correctly display the current time?

- console.log(new Date().toLocaleTimeString());
- console.log(new Date().toLocaleDateString());
- console.log(new Date().toString());
- console.log(new Date().toCityDateString());

**Answer: console.log(new Date().toLocaleTimeString());**

---

10) In which format does the toISOString() method return a date?

- A UTC string format.
- An ISO-8601 string format.
- An MP3 string format.
- A USA-863 string format.

**Answer: An ISO-8601 string format.**

---

11) What should an ISO-8601 date format look like?

- YYYY-MM-DDTHH:mm:ss.sssZ
- DD-MM-YYYY
- DD-MM-YYTHH
- YYYY-MM-DDTHH:mm:ssZ

**Answer: YYYY-MM-DDTHH:mm:ss.sssZ**

---

12) What is the corresponding month for console.log(new Date(2003, 6, 27).getMonth());?

- June
- July
- April
- January

**Answer: July**

---

13) How would you format a date to a locale-specific string or a more readable format?

- .toLocaleString()
- .toLocaleDateString()
- .toLocaleDate()
- .toLocaleTimeString()

**Answer: .toLocaleString()**

---

14) What is the default locale used by the toLocaleDateString() method if no locales parameter is provided?

- English (Great Britain).
- The locale closest to United States.
- French (France).
- The user's system locale.

**Answer: The user's system locale.**

---

15) What gets assigned to now in the code below?

const now = new Date();

- The current time in nanoseconds since January 1, 1990.
- The current date in milliseconds minus the Unix epoch.
- The current date and time based on your computer system's clock.
- The current time in milliseconds since January 1, 1990.

**Answer: The current date and time based on your computer system's clock.**

---

16) What is the output of console.log(new Date(2003, 6, 27).getFullYear());?

- "27/6/2003"
- 27
- 2003
- 6

**Answer: 2003**

---

17) What does getDate return when the date is invalid?

- 0
- NaN
- null
- undefined

**Answer: NaN**

---

18) If we are in the month of October, what will console.log(new Date().getMonth()); output?

- 1
- 3
- 10
- 9

**Answer: 9**

---

19) Which option will output 2021 for the following object?

const d = new Date("2021-12-25");

- console.log(d.getFullYear())
- console.log(d.toUTCString())
- console.log(d.getTime())
- console.log(d.getDate())

**Answer: console.log(d.getFullYear())**

---

20) Which option will output "2021-12-25T00:00:00.000Z" for the following object?

const d = new Date("2021-12-25");

- console.log(d.getFullYear())
- console.log(d.toUTCString())
- console.log(d.getTime())
- console.log(d.toISOString())

**Answer: console.log(d.toISOString())**

---