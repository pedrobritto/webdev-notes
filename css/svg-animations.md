# SVG Animations

In order for this to work the SVG must be inline.

### 1. Add classes to desired elements

``` html
<!-- SVG Icon -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 400 200">
 <circle class="gear-bg" fill="#color" cx="200" cy="50" r="90"></circle>
 <path class="gear-icon" fill="#FFFFFF" d="(...)"></path>
</svg>
```

### 2. Manipulate with CSS

``` css
.gear-bg {
  fill: #EA564E;
  stroke-width: 5;
}
```

Animation and pseudo-classes can be used as well.

For other SVG properties, [click here](https://www.w3.org/TR/SVG/propidx.html).

### 3. Rotate and Scale

First, it's necessary to group the SVG's paths with the `<g>` tag. For example:

``` html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 400 200">
  <g class="class">
    <circle class="class-bg"></circle>
    <path class="class-icon"></path>
  </g>
</svg>
```
k
Then add `transform-origin: 50% 50%`, as the transform pivot works diferently with SVG elements.

``` css
/* Sets the icon path transform origin to center */
.class-icon {
  transition: .2s;
  transform-origin: 50% 50%;
}

/* When the class group is hovered, the icon is transformed */
.class:hover .class-icon {
  transform: /* transform function */;
}
```

Example of an animated set of [weather icons](http://codepen.io/noahblon/full/lxukH/) using scale, rotate, opacity and others.


### Creating a more complex animation sequence
