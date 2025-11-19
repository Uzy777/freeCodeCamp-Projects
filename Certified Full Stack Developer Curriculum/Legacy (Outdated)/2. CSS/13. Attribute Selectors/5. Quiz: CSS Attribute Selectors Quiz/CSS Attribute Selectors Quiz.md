*Q1) What are CSS attribute selectors used for?*

A) To apply styles to elements based on their attributes.  
B) To apply styles to elements based on their tag name.  
C) To apply styles to elements based on their class name.  
D) To apply styles to elements based on their parent element.  

> [!question]- Answer  
> **A) To apply styles to elements based on their attributes.**  

---

*Q2) Which of the following will NOT be selected by this CSS selector?*
```
[title~="flower"] {
  border: 5px solid yellow;
}
```

A)
```
<img src="img2.jpg" title="FLOWERS of flower" width="150" height="113">
``` 
B)
```
<img src="img2.jpg" title="flower" width="150" height="113">
``` 
C)
```
<img src="img2.jpg" title="flowers" width="150" height="113">
``` 
D)
```
<img src="img1.jpg" title="clematis flower" width="150" height="113">
``` 

> [!question]- Answer  
> **C)**  

---

*Q3) Which CSS selector matches all p elements with a lang attribute set to "fr"?*

A)
```
p[lang~="fr"] { color: blue; }
``` 
B)
```
p[lang="fr"] { color: blue; }
``` 
C)
```
p[lang=="fr"] { color: blue; }
``` 
D)
```
p[lang-="fr"] { color: blue; }
``` 

> [!question]- Answer  
> **B)**  

---


*Q4) Which CSS selector matches all a elements with an href attribute?*

A)
```
a { color: green; }
``` 
B)
```
a[href~=""] { color: green; }
``` 
C)
```
a(href) { color: green; }
``` 
D)
```
a[href] { color: blue; }
``` 

> [!question]- Answer  
> **D)**  

---

*Q5) Which CSS selector matches all ordered lists with uppercase Roman numerals?*

A)
```
ol[type="i"] { border-color: black; }
``` 
B)
```
ol[type="A"] { border-color: black; }
``` 
C)
```
ol[type="I"] { border-color: black; }
``` 
D)
```
ol[type="a"] { border-color: black; }
``` 

> [!question]- Answer  
> **C)**  

---

*Q6) What is the data-lang attribute commonly used for?*

A) To define the character encoding of the document.  
B) To specify the language of the document.  
C) To set the language of an element based on its parent element.  
D) To apply styles to elements based on this custom data attribute.  

> [!question]- Answer  
> **C) To set the language of an element based on its parent element.**  

---

*Q7) Which CSS selector should you use to style img elements only if their alt attribute is equal to "code"?*

A) img[alt=="code"] { border: 1px solid red; }  
B) img[alt~="code"] { border: 1px solid red; }  
C) img[alt*="code"] { border: 1px solid red; }  
D) img[alt="code"] { border: 1px solid red; }  

> [!question]- Answer  
> **D) img[alt="code"] { border: 1px solid red; }**  

---

*Q8) Which CSS selector matches ordered lists with a numerical numbering type?*

A) ol[type="i"] { color: purple; }  
B) ol[type="I"] { color: purple; }  
C) ol[type="a"] { color: purple; }  
D) ol[type="1"] { color: purple; }  

> [!question]- Answer  
> **D) ol[type="1"] { color: purple; }**  

---

*Q9) Which of the following CSS selectors would you use to style a elements with both href and title attributes?*

A) a[href] a[title] { text-decoration: underline dotted; }  
B) a[href].[title] { text-decoration: underline dotted; }  
C) a[href][title] { text-decoration: underline dotted; }  
D) a[href]a[title] { text-decoration: underline dotted; }  

> [!question]- Answer  
> **C) a[href][title] { text-decoration: underline dotted; }**  

---

*Q10) Which CSS selector would you use if you are developing a website for a restaurant and want to style all elements with the menu-item class that have a data-special attribute?*

A) #menu-item[data-special] { background-color: blue; }  
B) menu-item[data-special] { background-color: blue; }  
C) .menu-item[data-special] { background-color: blue; }  
D) [data-special="menu-item"] { background-color: blue; }  

> [!question]- Answer  
> **C) .menu-item[data-special] { background-color: blue; }**  

---
