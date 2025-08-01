## Responsive Web Design

*   **Definition**: The core principle of responsive design is adaptability – the ability of a website to adjust its layout and content based on the screen size and capabilities of the device it's being viewed on.
*   **Fluid grids**: These use relative units like percentages instead of fixed units like pixels, allowing content to resize and reflow based on screen size.
*   **Flexible images**: These are set to resize within their containing elements, ensuring they don't overflow their containers on smaller screens.

## Media Queries

*   **Definition**: This allows developers to apply different styles based on the characteristics of the device, primarily the viewport width.

```css
@media screen and (min-width: 768px) {
  /* Styles for screens at least 768px wide */
}
```

*   **`all` Media Type**: This is suitable for all devices. This is the default if no media type is specified.
*   **`print` Media Types**: This is intended for paged material and documents viewed on a screen in print preview mode.
*   **`screen` Media Types**: This is intended primarily for screens.
*   **`aspect-ratio`**: This describes the ratio between the width and height of the viewport.

```css
@media screen and (aspect-ratio: 16/9) {
  /* Styles for screens with a 16:9 aspect ratio */
}
```

*   **`orientation`**: This is used to indicate whether the device is in landscape or portrait orientation.

```css
@media screen and (orientation: landscape) {
  /* Styles for landscape orientation */
}
```

*   **`resolution`**: This is used to describe the resolution of the output device in dots per inch (dpi) or dots per centimeter (dpcm).

```css
@media screen and (min-resolution: 300dpi) {
  /* Styles for high-resolution screens */
}
```

*   **`hover`**: This is used to test whether the primary input mechanism can hover over elements.

```css
@media (hover: hover) {
  /* Styles for devices that support hover */
}
```

*   **`prefers-color-scheme`**: This is used to detect if the user has requested a light or dark color theme.
*   **Media Queries and Logical Operators**: The `and` operator is used to combine multiple media features, while `not` and `only` can be used to negate or isolate media queries.

```css
@media screen and (min-width: 768px) and (orientation: landscape) {
  /* Styles for landscape screens at least 768px wide */
}
```

## Common Media Breakpoints

*   **Definition**: Media breakpoints are specific points in a website's design where the layout and content adjust to accommodate different screen sizes. There are some general breakpoints that you can use to target phones, tablets and desktop screens. But it is not wise to try to chase down every single possible screen size for different devices.

```css
/* Styles for screens wider than 768px */
@media screen and (min-width: 768px) {
  body {
    font-size: 1.125rem;
  }
}
```

*   **Small Devices (smartphones)**: up to 640px
*   **Medium Devices (tablets)**: 641px to 1024px
*   **Large Devices (desktops)**: 1025px and larger

## Mobile first approach

*   **Definition**: The `mobile-first` approach is a design philosophy and development strategy in responsive web design that prioritizes creating websites for mobile devices before designing for larger screens.

```css
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Styles for larger screens */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

---
