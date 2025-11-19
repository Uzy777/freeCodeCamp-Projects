*Q1) Which of the following is NOT a valid value for the position property?*

A) absolute  
B) fixed  
C) above  
D) relative  

> [!question]- Answer  
> **C) above**  

---

*Q2) What is the main purpose of the float property in CSS?*

A) Floats are used to remove an element from its normal flow on the page and position it to the top of its container.  
B) Floats are used to remove an element from its normal flow on the page and automatically position it in the upper right hand side of the webpage.  
C) Floats are used to remove an element from its normal flow on the page and automatically position it to the bottom right hand side of webpage.  
D) Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container.  

> [!question]- Answer  
> **D) Floats are used to remove an element from its normal flow on the page and position it either on the left or right side of its container.**  

---

*Q3) Which of the following is an example making a box element float to the left?*

A)
```.box {
  float: left-side;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}```

B)
```
.box {
  float: left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

C)
```
.box {
  position: float-left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

D)
```
.box {
  left: float;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

> [!question]- Answer  
> **B)**  

---

*Q4) What is the role of the clear property?*

A) It is used to determine if an element needs to be moved to the bottom of the page.  
B) It is used to determine if an element needs to be moved below the floated content.  
C) It is used to determine if an element needs to be fixed to the top of the page.  
D) It is used to determine if an element needs to be completely cleared from the page.  

> [!question]- Answer  
> **B) It is used to determine if an element needs to be moved below the floated content.**  

---

*Q5) Which CSS property is used to control the vertical stacking order of positioned elements that overlap on the page?*

A) z-index  
B) bg-green  
C) position  
D) float  

> [!question]- Answer  
> **A) z-index**  

---

*Q6) Which of the following is the correct syntax for relative positioning?*

A)
```
.relative {
  relative-position: relative;
  top: 30px;
  left: 30px;
}

```

B)
```
.relative {
  position: relative-position;
  top: 30px;
  left: 30px;
}
```

C)
```
.relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

D)
```
.relative {
  relative: position;
  top: 30px;
  left: 30px;
}
```


> [!question]- Answer  
> **C)**  

---

*Q7) Which CSS property would you use to fix an element at a certain position on the page so that it does not move when scrolling occurs?*

A) display: block;  
B) position: relative;  
C) position: fixed;  
D) position: no-scroll;  

> [!question]- Answer  
> **C) position: fixed;**  

---

*Q8) What does absolute positioning do to an element?*

A) Absolute positioning is used to determine if an element needs to be moved below the floated content.  
B) Absolute positioning is used to position the element within the normal document flow.  
C) Absolute positioning allows you to take an element out of the normal document flow, making it behave independently from other elements.  
D) Absolute positioning is used to control the vertical stacking order of positioned elements that overlap on the page.  

> [!question]- Answer  
> **C) Absolute positioning allows you to take an element out of the normal document flow, making it behave independently from other elements.**  

---

*Q9) Which of the following is NOT a valid property that you can use for absolute positioning?*

A) right  
B) top  
C) side  
D) bottom  

> [!question]- Answer  
> **C) side**  

---

*Q10) What is the key difference between relative and absolute positioning?*

A) Relative positioning sets the element in a fixed position while absolute positioning takes an element out of the normal document flow.  
B) Absolute positioning sets the element in a sticky position while relative positioning takes an element out of the normal document flow.  
C) Absolute positioning positions the element within the normal document flow while relative positioning takes an element out of the normal document flow.  
D) Relative positioning positions the element within the normal document flow while absolute positioning takes an element out of the normal document flow.  

> [!question]- Answer  
> **D) Relative positioning positions the element within the normal document flow while absolute positioning takes an element out of the normal document flow.**  

---

*Q11) Which of the following is an example of positioning a box in the upper left hand corner of the page?*

A)
```
.box {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

B)
```
.box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

C)
```
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

D)
```
.box {
  position: absolute;
  top: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

> [!question]- Answer  
> **B)**  

---

*Q12) Which positioning method allows an element to stick to a defined position only when you scroll past a certain point?*

A) Fixed positioning.  
B) Float positioning.  
C) Absolute positioning.  
D) Sticky positioning.  

> [!question]- Answer  
> **D) Sticky positioning.**  

---

*Q13) Which of the following is a correct example of using sticky positioning?*

A)
```
.box {
  position: sticky-fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}

```

B)
```
.box {
  position: sticky;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

C)
```
.box {
  position: sticky-top;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

D)
```
.box {
  sticky: position;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

> [!question]- Answer  
> **B)**  

---

*Q14) What is the difference between sticky and fixed positioning?*

A) Fixed elements will remain in the same position on the screen while sticky elements will only stick to a certain point then behave like relative elements.  
B) Sticky elements can only be used in table layouts while fixed elements can be used in any type of CSS layout.  
C) Sticky elements will always remain in the same position while fixed elements will stick to a certain point then behave like relative elements.  
D) Fixed elements will be positioned relative to its normal position while sticky elements will only stick to a certain point then behave like relative elements.  

> [!question]- Answer  
> **A) Fixed elements will remain in the same position on the screen while sticky elements will only stick to a certain point then behave like relative elements.**  

---

*Q15) What problem did the clearfix hack solve when working with floats?*

A) The clearfix hack helped solve the issue of floated elements being removed from the normal document flow and being placed in a fixed position on the page.  
B) The clearfix hack helped solve the issue of floated elements disappearing from the page.  
C) The clearfix hack helped solve the issue of overlaps and collapsing in the layouts when multiple floated elements were stacked next to each other.  
D) The clearfix hack helped solve the issue of floated elements not being responsive in mobile and tablet layouts.  

> [!question]- Answer  
> **C) The clearfix hack helped solve the issue of overlaps and collapsing in the layouts when multiple floated elements were stacked next to each other.**  

---

*Q16) Which of the following is a correct example for using the clearfix hack?*

A)
```
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

B)
```
.clearfix::before {
  position: fixed;
  top: 0;
  width: 100%;
  clear: both;
}
```

C)
```
.clearfix::before {
  top: 30px;
  clear: none;
}
```

D)
```
.clearfix::after {
  position: relative;
  top: 30px;
  left: 30px;
  clear: all;
}
```

> [!question]- Answer  
> **A)**  

---

*Q17) What is static positioning?*

A) This allows an element to stick to a defined position only when you scroll past a certain point.  
B) This is used to remove an element from its normal flow on the page and automatically position it in the upper right hand side of the webpage.  
C) This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.  
D) This allows you to take an element out of the normal document flow, making it behave independently from other elements.  

> [!question]- Answer  
> **C) This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.**  

---

*Q18) Which of the following is a correct example for using the clearfix hack?*

A)
```
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

B)
```
.navbar {
  fixed: top;
  top: 0;
  width: 100%;
}
```

C)
```
.navbar {
  upper: fixed;
  width: 100%;
}
```

D)
```
.navbar {
  position: fixed-top;
  top: 0;
  width: 100%;
}
```

> [!question]- Answer  
> *A)**  

---

*Q19) Which of the following is a valid value to use for the z-index property?*

A) 1  
B) up  
C) 12.0  
D) none  

> [!question]- Answer  
> **A) 1**  

---

*Q20) Which of the following is the default value of the position property?*

A) initial  
B) static  
C) relative  
D) inherit  

> [!question]- Answer  
> **B) static**  

---