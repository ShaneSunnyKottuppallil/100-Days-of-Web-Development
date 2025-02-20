# Web Development - 100 Days Challenge 🚀  

## Day 1 - HTML Basics  
- HTML Introduction  
- Paragraph, Heading, Image, Bold Tags  
- HTML Boilerplate  
<br>  

## Day 2 - Lists & Attributes in HTML  
- Lists in HTML  
  - Ordered List  
  - Unordered List  
- HTML Attributes  
  - Anchor Tag  
  - Image Tag  
  - Next Line (Break Line)  
  - Bold, Italic, Underline  
- Comments in HTML  
<br>  

## Day 3 - HTML Elements & Semantic Markup  
- Inline vs Block Elements  
  - Div Element  
  - Span Element  
  - HR Tag  
- Subscript & Superscript  
- Semantic Markup  
  - SEO  
- Semantic Tags  
  - header, main, footer, nav  
  - section, article, aside  
- HTML Entities  
  - Space, Lesser Than, Greater Than, Quotation  
<br>  

## Day 4 - Emmets, Tables & Forms in HTML  
- Emmets in HTML  
  - Child Emmet, Sibling Emmet, Multiplication Emmet  
- Tables in HTML  
  - table, tr, td, th  
- Table Semantics  
  - thead, tbody, tfoot  
  - Colspan & Rowspan Attributes  
- Forms in HTML  
  - Input Elements  
    - text, password, number, time, color, button  
  - Placeholder Attributes  
  - Labels  
  - Button Element  
    - submit, button, reset  
<br>  

## Day 5 - HTML Form Elements  
- Name Attribute  
- Checkbox Attribute  
- Radio Element  
- Select Element  
- Range Element  
<br>  

## Day 6 - CSS Basics  
### Getting Started with CSS  
- Introduction to CSS  
- How to Include CSS in HTML  
  - Inline Styles  
  - Internal Stylesheet  
  - External Stylesheet  
<br>  

### Colors in CSS  
- Named Colors  
- Hexadecimal (`#RRGGBB`)  
- RGB (`rgb(r, g, b)`)  
- HSL (`hsl(h, s%, l%)`)  
<br>  

### Text Properties in CSS  
- Text Alignment (`text-align`)  
- Font Weight (`font-weight`)  
- Text Decoration (`text-decoration`)  
- Line Height (`line-height`)  
- Letter Spacing (`letter-spacing`)  
- Font Size (`font-size`)  
<br>

## Day 7 - Typography and Units in CSS  
### Typography in CSS  
- Font Weight (`font-weight`)  
- Text Decoration (`text-decoration`)  
  - Underline, Overline, Line-through, None  
- Line Height (`line-height`)  
- Letter Spacing (`letter-spacing`)  
- Font Family (`font-family`)  
<br>  

### Units in CSS  
- Absolute Units  
  - Pixels (`px`), Points (`pt`)  
- Relative Units  
  - Percentage (`%`), EM (`em`), REM (`rem`)  
<br>  


## Day 8 - CSS Selectors  

### Basic Selectors  
- **Element Selector** (`element {}`)  
- **Universal Selector** (`* {}`)  
- **ID Selector** (`#idName {}`)  
- **Class Selector** (`.className {}`)  
<br>  

### Combinators & Advanced Selectors  
- **Descendant Selector** (`parent child {}`)  
- **Adjacent Sibling Selector** (`element1 + element2 {}`)  
- **Child Combinator** (`parent > child {}`)  
- **Attribute Selector** (`[attribute=value] {}`)  
<br>  

## Day 9 - CSS Advanced Selectors  

### Pseudo-classes  
- `:hover` – Applies styles when the user hovers over an element.  
- `:active` – Styles elements when they are being clicked.  
- `:checked` – Targets checked checkboxes or radio buttons.  
- `:nth-of-type(n)` – Selects the nth occurrence of a specific element type within its parent.  
<br>  

### Pseudo-elements  
- `::first-letter` – Styles the first letter of a text block.  
- `::first-line` – Styles the first line of a text block.  
- `::selection` – Customizes the appearance of highlighted text.  
<br>  

### Selector Specificity  
- Understanding how CSS rules are prioritized.  
- Importance of inline styles, ID selectors, and class selectors.  
- `!important` – Used to override all other styles (use with caution).  
<br>  

### Inheritance in CSS  
- Some CSS properties (e.g., `color`, `font-family`) are inherited by default.  
- Other properties (e.g., `margin`, `padding`, `border`) are **not** inherited.  
- `inherit`, `initial`, and `unset` values to control inheritance behavior.  
<br>

## Day 10 - Box Model in CSS  

### Box Model in CSS  
The CSS Box Model is the fundamental concept that defines how elements are structured and spaced.  

### Box Model Properties  
- **Height (`height`)** - Defines the height of an element.  
- **Width (`width`)** - Defines the width of an element.  
- **Border (`border`)** - The outer edge of an element, defining its boundary.  
- **Margin (`margin`)** - Space outside the border, creating separation between elements.  
- **Padding (`padding`)** - Space between the content and the border of an element.  

### Shorthand Properties  
- **Padding Shorthand (`padding: top right bottom left;`)**  
- **Margin Shorthand (`margin: top right bottom left;`)**  

Understanding the Box Model is crucial for creating well-structured and responsive layouts in CSS.  

<br> 

## Day 11 - CSS Display & Units  

### Inline vs Block Elements  
- Block elements take full width and start on a new line.  
- Inline elements take only as much width as needed and stay in line with other elements.  
<br>  

### The `display` Property  
- `block` → Takes full width (e.g., `<div>`, `<p>`)  
- `inline` → Takes only as much width as needed (e.g., `<span>`, `<a>`)  
- `inline-block` → Behaves like `inline` but allows setting width & height  
- `none` → Hides the element from the page  
<br>  

### CSS Units  
#### `%` Unit  
- Relative to the parent element's size.  

#### `em` Unit  
- Relative to the font size of the parent element.  

#### `rem` Unit  
- Relative to the root (`<html>`) font size.  
<br>  

### Display Inline for List Elements  
- By default, `<li>` elements are block-level.  
- Setting `display: inline;` arranges them in a horizontal line instead of stacking vertically.  
<br>  

## Day 12 - CSS Effects and Transformations  

###  Alpha Channel & Opacity  
- RGBA (`rgba(r, g, b, a)`)  
- HSLA (`hsla(h, s%, l%, a)`)  
- `opacity` property  

###  Range Element Styling  
- Customizing `<input type="range">`  

###  Transitions in CSS  
- `transition-property`  
- `transition-duration`  
- `transition-timing-function`  
- `transition-delay`  

###  CSS Transform  
- `rotate(deg)` → Rotates an element  
- `scale(x, y)` → Resizes an element  
- `translate(x, y)` → Moves an element  
- `skew(x, y)` → Tilts an element  

###  Box Shadow  
- `box-shadow: x-offset y-offset blur spread color;`  

###  Background Image Properties  
- `background-size: contain;`  
- `background-size: cover;`  
- `background-size: auto;`  
<br>  

## Day 13 - CSS Positioning  

### Position Property in CSS  
- `position: static;` (Default position)  
- `position: relative;` (Positioned relative to itself)  
- `position: absolute;` (Positioned relative to the nearest positioned ancestor)  
- `position: fixed;` (Positioned relative to the viewport)  
<br>  

## Day 14 - Flexbox in CSS  

### Flexbox Basics  
- Main Axis & Cross Axis  
- `display: flex;` (Enables flexbox on a container)  
- Direct Child Elements become Flex Items  
<br>  

### Flexbox Direction  
- `flex-direction: row;` (Default - Left to Right)  
- `flex-direction: column;` (Top to Bottom)  
- `flex-direction: row-reverse;` (Right to Left)  
- `flex-direction: column-reverse;` (Bottom to Top)  
<br>  

### Justify Content (Alignment on Main Axis)  
- `justify-content: flex-start;` (Default - Items start from the left)  
- `justify-content: flex-end;` (Items align to the right)  
- `justify-content: center;` (Items align to the center)  
- `justify-content: space-between;` (Equal space between items)  
- `justify-content: space-around;` (Equal space around items)  
- `justify-content: space-evenly;` (Even spacing between items)  
<br>  

### Flex Wrap  
- `flex-wrap: nowrap;` (Default - Items remain in a single line)  
- `flex-wrap: wrap;` (Items wrap to the next line if needed)  
- `flex-wrap: wrap-reverse;` (Items wrap in reverse order)  
<br>  

## Day 15 - Advanced Flexbox in CSS  

### Aligning Items in Flexbox  
- `align-items: flex-start;` (Align items at the start of the cross axis)  
- `align-items: flex-end;` (Align items at the end of the cross axis)  
- `align-items: center;` (Align items in the center of the cross axis)  
- `align-items: baseline;` (Align items based on text baseline)  
- `align-items: stretch;` (Default - Items stretch to fill container)  
<br>  

### Aligning Content in Flexbox  
- `align-content: flex-start;` (Align multiple lines at the start)  
- `align-content: flex-end;` (Align multiple lines at the end)  
- `align-content: center;` (Align multiple lines at the center)  
- `align-content: space-between;` (Equal space between rows)  
- `align-content: space-around;` (Equal space around rows)  
- `align-content: stretch;` (Default - Rows stretch to fill container)  
<br>  

### Aligning Individual Items  
- `align-self: auto;` (Default - Inherits parent `align-items`)  
- `align-self: flex-start;` (Aligns item to start of cross axis)  
- `align-self: flex-end;` (Aligns item to end of cross axis)  
- `align-self: center;` (Aligns item to center of cross axis)  
- `align-self: baseline;` (Aligns item based on text baseline)  
- `align-self: stretch;` (Stretches item to fill container)  
<br>  

### Flex Sizing  
- `flex-grow: 1;` (Item grows to take available space)  
- `flex-basis: auto;` (Defines the initial size of the item)  
- `flex-shrink: 1;` (Item shrinks when necessary)  
- `flex: grow shrink basis;` (Shorthand for flex sizing)  
<br>  

## Day 16 - CSS Grid  

### CSS Grid Model  
- A two-dimensional layout system for creating flexible and responsive web designs.  

### Column Lines  
- Defines the vertical divisions in a grid, helping with element alignment.  

### Grid Template  
- `grid-template-columns`: Defines the number and size of columns.  
- `grid-template-rows`: Defines the number and size of rows.  

### Repeat Function  
- The `repeat(n, value)` function simplifies defining grid columns or rows.  

### Grid Gaps  
- Defines spacing between grid items.  
  - `grid-gap`: Sets the overall gap between grid elements.  
  - `row-gap`: Controls the vertical spacing.  
  - `column-gap`: Controls the horizontal spacing.  
<br>  

## Day 17 - CSS Grid, Animations, Media Queries & Z-Index  

### CSS Grid Advanced Properties  
- **Grid Columns & Rows** – Defining structured grid layouts.  
- **Common Grid Properties** – Organizing elements efficiently.  
- **Justify & Align in Grid**  
  - `justify-items` (Container)  
  - `align-items` (Container)  
  - `place-items` (Container)  
  - `justify-self` (Item)  
  - `align-self` (Item)  
  - `place-self` (Item)  
<br>  

### CSS Animations  
- `animation-name`  
- `animation-duration`  
- `animation-timing-function`  
- `animation-delay`  
- `animation-iteration-count`  
- `animation-direction`  
- **Animation Shorthand**  
- **Percentage in Animations (Keyframes)**  
<br>  

### Media Queries & Responsive Design  
- `@media` for responsive layouts  
- Orientation control for different devices  
<br>  

### Z-Index in CSS  
- Controlling the stacking order of overlapping elements using `z-index`.  
<br>  

## Day 18 - Basic Design Principles  

###  Color in Web Design  
- Understanding **Primary, Secondary, and Tertiary Colors**  
- Importance of **Color Psychology & Meaning**  
- **Contrast & Accessibility** for better readability  
- Common **Color Schemes**:  
  - Monochrome  
  - Complementary  
  - Analogous  

<br>  

###  Typography in Web Design  
- Different **Font Families**:  
  - Serif  
  - Sans-Serif  
  - Monospace  
- Key properties:  
  - **Font Size**  
  - **Line Height**  
  - **Letter Spacing**  
- Choosing fonts for **Branding & Readability**  

<br>  

Good design enhances user experience and engagement! 

## Day 19 - Creating Forms in HTML  

###  Forms in HTML  
Forms allow users to enter and submit data on a webpage.  

###  Input Types in Forms  
- **Text Input**: `<input type="text">`  
- **Email Input**: `<input type="email">`  
- **Password Input**: `<input type="password">`  
- **Number Input**: `<input type="number">`  
- **Checkbox & Radio**: `<input type="checkbox">`, `<input type="radio">`  
- **Date & Time Picker**: `<input type="date">`, `<input type="time">`  
- **File Upload**: `<input type="file">`  
<br>  

###  Labels & Buttons in Forms  
- **Labels for Accessibility**: `<label for="id">Label Text</label>`  
- **Buttons for Submission**:  
  - Submit: `<button type="submit">Submit</button>`  
  - Reset: `<button type="reset">Reset</button>`  
<br>  

Mastering forms is essential for creating interactive and user-friendly web applications! <br>
Stay tuned for more updates! 🚀  


 

 
  


 
