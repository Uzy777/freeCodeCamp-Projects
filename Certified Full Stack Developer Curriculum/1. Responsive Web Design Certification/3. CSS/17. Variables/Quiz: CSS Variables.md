*Q1) Which of the following is NOT a valid descriptor in the @property rule?*

A) animation  
B) initial-value  
C) inherits  
D) syntax  

> [!question]- Answer  
> **A) animation**  

---

*Q2) In the following code, which value will color have if --main-color is not defined?*
```
p {
  color: var(--main-color, pink);
}
```

A) No color will be applied.  
B) --main-color 
C) pink  
D) Undefined  

> [!question]- Answer  
> ****  

---

*Q3) Which of the following is a valid way to declare a custom property in CSS?*

A) $background-color: #333;  
B) @property: #333  
C) --background-color: #333;  
D) var(--background-color: #333);  

> [!question]- Answer  
> **C) --background-color: #333;**  

---

*Q4) What is the main purpose of using custom properties in CSS?*

A) To improve accessibility.  
B) To change the DOM structure.  
C) To create dynamic selectors.  
D) To define reusable styles.  

> [!question]- Answer  
> **D) To define reusable styles.**  

---

*Q5) What does the :root selector represent?*

A) The highest-level element in the DOM tree.  
B) The first child of the html tag.  
C) The first child element of the body.  
D) The parent element of all header elements.  

> [!question]- Answer  
> **A) The highest-level element in the DOM tree.**  

---

*Q6) How do you apply a --foreground custom property as the color in CSS?*

A) color: var(--foreground);  
B) color: $foreground;  
C) color: --foreground;  
D) color: css(--foreground);  

> [!question]- Answer  
> **A) color: var(--foreground);**  

---

*Q7) What is the purpose of the @property rule in CSS?*

A) To group CSS properties into one rule.  
B) To define a media query.  
C) To define how custom properties behave.  
D) To control CSS animations and their timing.  

> [!question]- Answer  
> **C) To define how custom properties behave.**  

---

*Q8) When declaring a custom @property, what is the purpose of the syntax in its definition?*

A) It defines whether the property is applied to all elements.  
B) It determines whether the property can be inherited by child elements.  
C) It specifies the default value of the custom property.  
D) It enforces a specific data type or value pattern for the custom property.  

> [!question]- Answer  
> **D) It enforces a specific data type or value pattern for the custom property.**  

---

*Q9) What should you be cautious of when using custom properties?*

A) Custom properties are automatically converted to px units.  
B) Custom properties may not be supported in older browsers.  
C) Custom properties always override inline styles.  
D) Custom properties cannot be used to set font values.  

> [!question]- Answer  
> **B) Custom properties may not be supported in older browsers.**  

---

*Q10) What is the purpose of providing a fallback value in the var() function for CSS custom properties?*

A) To improve performance in modern browsers.  
B) To ensure a valid value is applied if the custom property is undefined.  
C) To optimize rendering time on slow networks.  
D) To reduce the amount of CSS code.  

> [!question]- Answer  
> **B) To ensure a valid value is applied if the custom property is undefined.**  

---


*Q11) When defining a variable --foreground inside a media query, what happens when the media query no longer matches the current viewport?*

A) The custom property is no longer available as it is scoped to the media query.  
B) The custom property is preserved and continues to apply.  
C) The custom property is recalculated based on the viewport.  
D) The custom property reverts to its initial value.  

> [!question]- Answer  
> **A) The custom property is no longer available as it is scoped to the media query.**  

---

*Q12) How would the following declaration behave?*
```
color: var(--main-color, var(--fallback-color, #000));
```

A) It applies --main-color if defined; otherwise, checks --fallback-color; and if both are undefined, it uses #000.
B) It will apply --main-color even if it is not defined, defaulting to that value.
C) It will always default to #000, regardless of whether --main-color or --fallback-color is defined.  
D) It will always default to #000, regardless of whether --main-color or --fallback-color is defined.  

> [!question]- Answer  
> ****  

---

*Q13) What is one benefit of using @property in CSS?*

A) It restricts the use of custom properties to specific elements.  
B) It improves performance by precomputing custom property values.  
C) It allows for animations of custom properties.  
D) It automatically prefixes custom properties for better browser support.  

> [!question]- Answer  
> **C) It allows for animations of custom properties.**  

---

*Q14) What does the inherits property in a custom @property declaration control?*

A) Whether the property accepts fallback values.  
B) Whether the custom property's value is passed to child elements.  
C) Whether the property can have a shorthand version.  
D) Whether the custom property will have an initial value.  

> [!question]- Answer  
> **B) Whether the custom property's value is passed to child elements.**  

---

*Q15) In the declaration of a custom @property, what does the initial-value specify?*

A) The acceptable values the property can accept.  
B) The fallback value for the property.  
C) The type of value the property must have.  
D) The priority of the property in the cascade.  

> [!question]- Answer  
> **B) The fallback value for the property.**  

---

*Q16) Given the following HTML and CSS code, what will be the value of the color property for the .box element?*
```
<div class="container">
  <div class="box">Text</div>
</div>
```
```
:root {
  --main-color: red;
}

.container {
  --main-color: blue;
}

.box {
  color: var(--main-color, black);
}
```

A) blue
B) green
C) red
D) black

> [!question]- Answer  
> **A) blue**  

---

*Q17) Which property should a CSS gradient be applied to?*

A) background  
B) color  
C) border-radius  
D) box-shadow  

> [!question]- Answer  
> **A) background**  

---

*Q18) What is the purpose of color stops in CSS gradients?*

A) To specify the direction of the gradient.  
B) To define the specific points where colors change in the gradient.  
C) To define the transparency level of the gradient.  
D) To repeat the gradient in a fixed pattern.  

> [!question]- Answer  
> **B) To define the specific points where colors change in the gradient.**  

---

*Q19) What happens if no angle or direction is specified in a CSS linear gradient?*

A) The gradient defaults to moving from left to right.  
B) The gradient defaults to moving from bottom to top.  
C) The gradient defaults to moving from top to bottom.  
D) The gradient defaults to a diagonal direction.  

> [!question]- Answer  
> **C) The gradient defaults to moving from top to bottom.**  

---

*Q20) Which CSS gradient function allows you to create a gradient that radiates outward from a central point?*

A) repeating-linear-gradient()  
B) conic-gradient()  
C) radial-gradient()  
D) linear-gradient()  

> [!question]- Answer  
> **C) radial-gradient()**  

---
