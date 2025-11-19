*Q1) What is CSS Grid?*

A) A way to display outlines around HTML elements.  
B) A two-dimensional layout for HTML documents.  
C) A method used for displaying tables on a website.  
D) A method used for tiling images.  

> [!question]- Answer  
> **B) A two-dimensional layout for HTML documents.**  

---

*Q2) Which of the following is the correct way to create a grid container?*

A) grid: grid-template;  
B) display: grid;  
C) grid-template: set;  
D) display: grid-area;  

> [!question]- Answer  
> **B) display: grid;**  

---

*Q3) What does the grid-template-columns property do?*

A) Creates a two column grid layout container.  
B) Defines the number of columns in a grid layout.  
C) Sets all columns for the grid layout to a fixed length.  
D) Defines two columns and three rows for a grid container.  

> [!question]- Answer  
> **B) Defines the number of columns in a grid layout.**  

---

*Q4) What does the grid-template-rows property do?*

A) Creates a template for creating new grid rows.  
B) Specifies a grid item's size and location in a grid layout.  
C) Specifies the number and height for each row in a grid layout.  
D) Specifies a default row size in the grid container.  

> [!question]- Answer  
> **C) Specifies the number and height for each row in a grid layout.**  

---

*Q5) What does the minmax() function do?*

A) Toggles between the first and second value, depending on available space.  
B) Returns the average of the two inputs.  
C) Sets the minimum and maximum sizes for a track.  
D) Sets the minimal size of the element for browser working in full-screen mode.  

> [!question]- Answer  
> **C) Sets the minimum and maximum sizes for a track.**  

---

*Q6) What is the shorthand for the column-gap and row-gap properties?*

A) gap  
B) gutters  
C) gap-column-row  
D) grid-gap  

> [!question]- Answer  
> **A) gap**  

---

*Q7) What is the difference between an implicit and explicit grid?*

A) Implicit grids use the grid-template-columns property while explicit grids use the grid-template-rows property.  
B) Implicit grids use the grid-template-columns or grid-template-rows properties to create columns while rows and columns are automatically created in explicit grids.  
C) Explicit grids use the grid-template-columns or grid-template-rows properties to create columns while rows and columns are automatically created in implicit grids.  
D) Explicit grids use the grid-template-columns property while implicit grids use the grid-template-rows property.  

> [!question]- Answer  
> **C) Explicit grids use the grid-template-columns or grid-template-rows properties to create columns while rows and columns are automatically created in implicit grids.**  

---

*Q8) Which of the following units represents a fraction of the space within the grid container?*

A) fr  
B) fractional  
C) f  
D) frac  

> [!question]- Answer  
> **A) fr**  

---

*Q9) What are grid lines?*

A) Shorthand for rows and columns.  
B) Lines along which grid columns and rows are created.  
C) Lines on which each of the grid items begin and end.  
D) Outlines of a grid element.  

> [!question]- Answer  
> **C) Lines on which each of the grid items begin and end.**  

---

*Q10) What does the grid-column property do?*

A) Tells the grid item on which grid line it should start and end at.  
B) Aligns text in the grid item vertically.  
C) Adds a new grid element as a child of the element it's applied to.  
D) Sets two columns for a grid container.  

> [!question]- Answer  
> **A) Tells the grid item on which grid line it should start and end at.**  

---

*Q11) How do you create four columns of equal width?*

A) grid-template-columns: repeat(4);  
B) grid-template-columns: repeat(1fr, 4);  
C) grid-template-columns: repeat(4, 1fr);  
D) grid-template-columns: repeat(1, 4);  

> [!question]- Answer  
> **C) grid-template-columns: repeat(4, 1fr);**  

---

*Q12) What does the grid-template-areas property do?*

A) It is used to specify where the item begins on a line in the grid container.  
B) It is used to repeat sections in the track listing.  
C) It is used to create gaps between tracks in the container.  
D) It is used to provide a name for the items you are going to position on the grid.  

> [!question]- Answer  
> **D) It is used to provide a name for the items you are going to position on the grid.**  

---

*Q13) What does the grid-auto-flow property do?*

A) Controls how auto-placed elements get inserted to the grid.  
B) Automatically adjusts the element to fit in the grid.  
C) Adjusts the spacing between the grid elements.  
D) Controls the order in which grid items are displayed.  

> [!question]- Answer  
> **A) Controls how auto-placed elements get inserted to the grid.**  

---

*Q14) Which of the following is the correct way to use the grid-template-areas property?*

A)
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer"; 
  gap: 20px; 
}
```

B)
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

C) Adjusts the spacing between the grid elements. 
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: apply(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

D) 
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set-areas;
  gap: 20px; 
}
```

> [!question]- Answer  
> **A)**  

---

*Q15) Which of the following is the correct way to work with the grid-auto-flow property?*

A)
```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: none;
  grid-auto-columns: 1fr;
}
```

B)
```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: set;
  grid-auto-columns: 1fr;
}
```

C) Adjusts the spacing between the grid elements. 
```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
```

D) 
```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: allow;
  grid-auto-columns: 1fr;
}
```

> [!question]- Answer  
> **C)**  

---

*Q16) Which of the following is NOT a valid grid property?*

A) grid-column  
B) gap  
C) grid-set  
D) grid-template-columns  

> [!question]- Answer  
> **C) grid-set**  

---

*Q17) Which of these properties can be used to center items inside a grid element?*

A) align-items  
B) set-items  
C) center-items  
D) allow-items  

> [!question]- Answer  
> **A) align-items**  

---

*Q18) Which of the following is a correct value to use with the grid-auto-columns property?*

A) grid-auto-columns: unset-grid;  
B) grid-auto-columns: revert-grid;  
C) grid-auto-columns: set-content(20%);  
D) grid-auto-columns: 1fr;  

> [!question]- Answer  
> **D) grid-auto-columns: 1fr;**  

---

*Q19) What are grid tracks?*

A) Spaces between two adjacent grid lines.  
B) Lines on which each of the grid items begins and ends.  
C) Shorthand for rows and columns.  
D) Lines along which you can animate movement of the grid items.  

> [!question]- Answer  
> **A) Spaces between two adjacent grid lines.**  

---

*Q20) Which of the following is the correct way to use the minmax() function?*

A)
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
}
```

B)
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(apply);
}
```

C) Adjusts the spacing between the grid elements. 
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax();
}
```

D) 
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(set);
}
```

> [!question]- Answer  
> **A)** 

---