*Q1) What does the CSS animation-delay property do?*

A) Delays the start of the animation.  
B) Defines animation direction.  
C) Specifies the timing function.  
D) Sets how long the animation lasts.  

> [!question]- Answer  
> **A) Delays the start of the animation.**  

---

*Q2) Which animation property specifies how the element should be styled before and after the animation?*

A) animation-iteration-count  
B) animation-fill-mode  
C) animation-direction  
D) animation-delay  

> [!question]- Answer  
> **B) animation-fill-mode**  

---

*Q3) Why should CSS animations be used in moderation?*

A) Too many CSS animations can lead to lower or non existent rankings in search engine results.  
B) Too many CSS animations can lead to poor performance and may be distracting or problematic for users with certain accessibility needs.  
C) Too many CSS animations will automatically crash the server and increase the likelihood for security risks.  
D) Too many CSS animations can lead to styles breaking as well as inconsistent styles across different browsers.  

> [!question]- Answer  
> **B) Too many CSS animations can lead to poor performance and may be distracting or problematic for users with certain accessibility needs.**  

---

*Q4) Which animation property determines whether the animation should play forwards, backwards, or alternate?*

A) animation-direction  
B) animation-timing-function  
C) animation-delay  
D) animation-fill-mode  

> [!question]- Answer  
> **A) animation-direction**  

---

*Q5) Which CSS media query detects if the user has requested minimal animations or motion effects?*

A) prefers-reduced-motion  
B) motion-preferences  
C) reduce-motion  
D) min-motion-preference  

> [!question]- Answer  
> **A) prefers-reduced-motion**  

---

*Q6) Which property sets how many times an animation repeats?*

A) animation-delay  
B) animation-duration  
C) animation-count  
D) animation-iteration-count  

> [!question]- Answer  
> **D) animation-iteration-count**  

---

*Q7) Which CSS rule is used to define the stages and styles of an animation at various points during its duration?*

A) @transition  
B) @keyframes  
C) @transform  
D) @style  

> [!question]- Answer  
> **B) @keyframes**  

---

*Q8) Inside the reduced‑motion media query, which declaration disables transitions?*

A) transition: none;  
B) animation: none;  
C) animation-play-state: paused;  
D) transition: remove;  

> [!question]- Answer  
> **A) transition: none;**  

---

*Q9) What does the animation-play-state property allow you to do?*

A) Determine the direction in which the animation plays.  
B) Specify how long the animation takes to complete.  
C) Set how many times the animation repeats.  
D) Pause and resume the animation.  

> [!question]- Answer  
> **D) Pause and resume the animation.**  

---

*Q10) Which of the following is a good practice when working with animations?*

A) Use as many flashing colors and rapid movements as possible to grab attention.  
B) Make animations last as long as possible to ensure users notice them.  
C) Avoid content that flashes more than three times per second to prevent triggering seizures or causing discomfort.  
D) Avoid testing animations on different devices or screen sizes.  

> [!question]- Answer  
> **C) Avoid content that flashes more than three times per second to prevent triggering seizures or causing discomfort.**  

---

*Q11) Why is the !important declaration used in the CSS rules?*

A) To debug CSS more easily.  
B) To ensure these rules take precedence over other styles.  
C) To limit styles to the first child element.  
D) To prevent other media queries from loading.  

> [!question]- Answer  
> **B) To ensure these rules take precedence over other styles.**  

---

*Q12) What does animation-iteration-count: 1 !important; ensure in CSS?*

A) That animations reverse direction each cycle.  
B) That animations run infinitely.  
C) That animations are paused.  
D) That any looping animations only play once.  

> [!question]- Answer  
> **D) That any looping animations only play once.**  

---

*Q13) What CSS property is used to specify how long an animation should take to complete?*

A) animation-delay  
B) animation-timing-function  
C) animation-duration  
D) animation-iteration-count  

> [!question]- Answer  
> **C) animation-duration**  

---

*Q14) Which property is NOT part of the animation shorthand?*

A) animation-direction  
B) animation-timing-function  
C) animation-delay  
D) animation-transform  

> [!question]- Answer  
> **D) animation-transform**  

---

*Q15) What does the @keyframes rule define?*

A) The default state of an element.  
B) The media queries for animations.  
C) The sequence of styles at different points in an animation.  
D) The timing function of an animation.  

> [!question]- Answer  
> **C) The sequence of styles at different points in an animation.**  

---

*Q16) What does this @keyframe at-rule do to the animated element?*
```css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

A) It scales the element up from 0% to 100%.
B) It moves the element from left to right. 
C) It makes the element fade in by gradually increasing its transparency.
D) It changes the text color to black.

> [!question]- Answer  
> **C) It makes the element fade in by gradually increasing its transparency.**  

---

*Q17) In a keyframes rule, what does 100% represent?*

A) The easing function.  
B) The halfway point.  
C) The start of the animation.  
D) The end of the animation.  

> [!question]- Answer  
> **D) The end of the animation.**  

---

*Q18) Which property controls the pace of an animation over its duration?*

A) animation-timing-function  
B) animation-delay  
C) animation-iteration-count  
D) animation-duration  

> [!question]- Answer  
> **A) animation-timing-function**  

---

*Q19) What should developers consider when implementing animations to maintain accessibility?*

A) Include only bold, fast, and surprising effects.  
B) Add frequent and intense animations for impact.  
C) Rely entirely on JavaScript for all animations.  
D) Use subtle, intentional effects, honor preferences, and offer user control.  

> [!question]- Answer  
> **D) Use subtle, intentional effects, honor preferences, and offer user control.**  

---

*Q20) Which of the following is the correct syntax to slide an element in from the left?*

A)
```css
@keyframes slide-in {
  0% { 
    transform: translateX(-100%); 
  }
  100% { 
    transform: translateX(0); 
  }
}
```

B)
```css
@keyframes slide-in {
  start { 
    transform: moveX(-100%); 
  }
  end { 
    transform: moveX(0); 
  }
}
```

C)
```css
@keyframes slide-in {
  0 { 
    transform: translate(-100%); 
  }
  100 { 
    transform: translate(0); 
  }
}
```

D)
```css
@keyframes slide-in {
  from { 
    translateX(-100%); 
  }
  to { 
    translateX(0); 
  }
}
```

> [!question]- Answer  
> **A)**  

---