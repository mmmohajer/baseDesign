# basedesign-iswad

## Description

This repository is designed in order to develop basic components and create handy css classes to be used in any react/webpack projects. Using the pre-designed components and pre-defined css classes developed in this repository, you can enourmously increase your speed of development and be more focused on the logic of your project. Css classes defined in this project can be very helpful for you to design full responsive websites with writing much less css codes.

**NOTE:** This project is being developed constantly, and in the first available version of this project, there are a pre-defined lot of css classes available for you to help you develop fully responsive design, as quickly as possible. In the future versions, we try to add different components. To share your feedback with me, you can contact me via mmmohajer70@gmail.com OR https://www.linkedin.com/in/mmmohajer/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Classes](#classes)
- [Components](#components)
  - [AdminNavbar](#adminnavbar)
  - [Alert](#alert)
  - [Button](#button)
  - [Card](#card)
  - [Carousel](#carousel)
  - [Column](#column)
  - [DesktopNavbar](#desktopnavbar)
  - [Div](#div)
  - [Form](#form)
  - [HamburgerIcon](#hamburgericon)
  - [Heading](#heading)
  - [Icon](#icon)
  - [Image](#image)
  - [Input](#input)
  - [Label](#label)
  - [MobileNavbar](#mobilenavbar)
  - [Modal](#modal)
  - [Pagination](#pagination)
  - [Paragraph](#paragraph)
  - [Row](#row)
  - [Search](#search)
  - [Table](#table)
  - [Text](#text)
- [Editable Css Classes](#editable-css-classes)
- [License](#license)

## Installation

In order to setup integrate this package with your project you need to take the following steps:

Since, the project is dependent on the sass module, you need to install that package on your machine:
`npm install --save-dev sass` <br>
Then you can install the npm package related to this project: <br>
`npm install --save basedesign-iswad`<br>

## Usage

In order to use our css classes in your project, you need to do the following import, in your main js file (usually index.js) at the root of your project: <br>
`import basedesign-iswad/dist/style.js` <br>
**Note that css classes are introduced in the css classes section.**
In order to work with our components, you can import them as follows: <br>
`import {ComponentName} from "basedesign-iswad"` <br>
**Note that components are introduced in the components section.**

## Classes

### 1. Alignments
- `text-ltr` &#8594; Align: left to right<br>
- `text-rtl` &#8594; Align: right to left <br>
- `text-center` &#8594; Align: center<br>
- `text-justify` &#8594; Align: justify<br>

**Sample**

`<div class="text-ltr">Hello</div>`

<hr>

### 2. Widths
- `w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Width in percentage <br>
- `w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` &#8594; Width in pixels <br>
- `min-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Min width in percentage <br>
- `min-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` &#8594; Min width in pixels <br>
- `max-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Max width in percentage <br>
- `max-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` &#8594; Max width in pixels <br>
- `w-inherit` &#8594; Width: inherit <br>

**Sample**

`<div className="w-per-10"> Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

### 3. Heights
- `height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` &#8594; Heights in px <br>
- `height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
- `min-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` &#8594; Min heights in px <br>
- `max-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` &#8594; Max heights in px <br>
- `min-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` &#8594; Min heights in vh <br>
- `max-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` &#8594; Max heights in vh <br>

**Sample**

 `<div class="height-px-10">` <br>

<hr>

### 4. Heading
- `h1` &#8594; use this class to make a flexible head in all dimensions(32px at small 40px at medium 48px at large) <br>
- `h2` &#8594; use this class to make a flexible head in all dimensions(26px at small 32px at medium 36px at large) <br>
- `h3` &#8594; use this class to make a flexible head in all dimensions(22px at small 24px at medium 28px at large) <br>

**Sample**

 `<div class="h1">` <br>

<hr>

### 5. Margins and Paddings

- `m(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin value (`1` => 0.5rem) <br>
- `mt(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin top value (`1` => 0.5rem) <br>
- `mr(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin right value (`1` => 0.5rem) <br>
- `mb(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin bottom value (`1` => 0.5rem) <br>
- `ml(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin left value (`1` => 0.5rem) <br>
- `my(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin right and left value (`1` => 0.5rem) <br>
- `mx(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin top and bottom value (`1` => 0.5rem) <br>
- `p(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding value (`1` => 0.5rem) <br>
- `pt(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding top value (`1` => 0.5rem) <br>
- `pr(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding right value (`1` => 0.5rem) <br>
- `pb(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding bottom value (`1` => 0.5rem) <br>
- `pl(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding left value (`1` => 0.5rem) <br>
- `py(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding right and left value (`1` => 0.5rem) <br>
- `px(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding top and bottom value (`1` => 0.5rem) <br>
- `ml-auto` <br>
- `mr-auto` <br>

**Sample**

 `<div className="m5"> Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

### 6. Colors

- `text(Primary, Faded, Info, Inverse, Success, Warning, Danger, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` &#8594; Use this classes to define the text color of an element<br>
- `bg(Primary, Faded, Info, Inverse, Success, Warning, Danger, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` &#8594; Use this classes to define background color of an element<br>

**Sample**

`<div class="text-third bg-green"></div>`


<hr>

### 7. Hover Color
- `hover-text-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` &#8594; Color text when hovering on an element <br>
- `hover-bg-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` &#8594; Background color when hovering on an element <br>

**Sample**

 `<a class="hover-bg-primary"></a>` <br>

<hr>

### 8. Borders
- `br-rad-px-(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)` &#8594; Use this classes to define the border radius in pixels. <br>
- `br-rad-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Use this classes to define the border radius in percentage. <br>
- `br-(all, top, left, right, bottom)-(dotted, dashed, solid, double, groove, ridge, inset, outset, hidden)-(1, 2, 3, 4)` &#8594; Use this classes to define the direction, style, and thickness of borders in pixels. <br>
- `br-color-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` &#8594; Use this classes to define the color of borders. <br>
- `br-none` &#8594; Use this class to remove all borders

**Sample**

 `<div class="br-bottom-double-2 br-color-red">Hello</div>`

<hr>

### 9. Fonts
- `fs-px-(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32)` &#8594; Font size in pixels <br>
- `fs-r-(1, 2, 3, 4, 5, 6, 7, 8)` &#8594; Font size in rem <br>
- `fw-(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)` &#8594; Font weight <br>
- `f-b` &#8594; Bold Text <br>
- `f-i` &#8594; Italic text <br>

**Sample**

 `<p class="fs-r-2 fw-600 f-i">Something</p>` <br>

<hr>

### 10. Position

- `pos-abs` &#8594; Make the position absolute <br>
- `pos-abs--(lt, rt, center, lb, rb)` &#8594; Define the position of an absolute element <br>
- `pos-fix` &#8594; Make the position fixed <br>
- `pos-fix--(lt, rt, center, lb, rb)` &#8594; Define the position of a fixed element <br>
- `pos-rel` &#8594; Make the position relative <br>
- `pos-sticky` &#8594; Make the position sticky <br>
- `pos-sticky--(lt, rt, center, lb, rb)` &#8594; Define the position of a sticky element <br>

**Sample**

 `<div class="pos-abs pos-abs--lt">` <br>

<hr>

### 11. display

- `block` Display : block <br>
- `no-display` Display : none <br>
- `flex` &#8594; Display : Flex <br>
- `grid` Display : Grid <br>
- `show-block-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` Use this classes to show a block div in specific Dimension (`sm` : small, `md` : medium, `lg` : large)<br>

**Sample**

 `<div class="flex">` OR `<div class="no-display"></div>` OR `<div class="block"></div>` <br>

<hr>

### 12. Grid and Flex

- `row` &#8594; Use this classes to define a flex element with row direction <br>
- `row--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` &#8594; Use this class to define how much element you want in any column<br>
- `row--sm--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` &#8594; Small Devices <br>
- `row--md--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` &#8594; Medium Size Devices<br>
- `row--lg--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` &#8594; Large Devices<br>
- `flex--jc--(start, center, end, betwwen, around, evenly)` Use this classes to define the `justify-content` value <br>
- `flex--ai--(start, center, end)` Use this classes to define the `align-items` value <br>
- `flex--dir--(row, col)` Use this classes to define the direction (column, row) <br>
- `flex--dir--(row, col)` Use this classes to define the direction (column, row) <br>
- `flex--gr--(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` &#8594; Flex grow value <br>
- `flex--wrap` Use this classes if you need to assignee a wrap value to flex-wrap property <br>
- `show-flex-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` Use this classes to show a flex div in specific Dimension (`sm` : small, `md` : medium, `lg` : large)<br>
- `grid--cols--(auto, oneFourth, oneThird, oneHalf)` Use this class to define how much element you want in any column <br>

**Sample**

 `<div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

### 13. Links
- `link` &#8594; Basic form for links <br>

**Sample**

`<a class="link"></a>` <br>

<hr>

### 14. Buttons
- `btn-(large, medium, small, full)` &#8594; Use `large`, `medium` and `small` to define the size of button, `full` to take the full of size <br>

**Sample**

 `<button class="btn-large">` <br>

**Note:** You can also use our customized classes to define your desired button with the desired size, color, background color, and borders. <br>

<hr>

### 15. Forms
- `input` &#8594; basic form for an input <br>
- `required` &#8594; use this class for required inputs <br>

**Sample**

 `<div class="input">` <br>

<hr>

### 16. Opacity
- `op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Opacity in percentage <br>

**Sample**

 `<img class="op-60">` <br>

<hr>

### 17. General Classes
- `mouse-hand` &#8594; Pointer Cursor <br>
- `z-(0, 10, 100, 1000, 10000, 100000)` &#8594; Z-index classes <br>
- `f-(left, right)` &#8594; Float left or right <br>
- `of-(y, x)-(hidden, scroll, auto)` &#8594; Overflow <br>

<hr> 

### 18. Mobile Menu Bar
- `menu-mob-icon` &#8594; Mobile Menu Icon <br>
- `menu-mob-closed-icon` &#8594; Closing icon <br>
- `menu-mob-hr` <br>
- `menu-mob-hr-active` <br>


Notice: In order to make any changes in the way of appearing of the mobile menu, you need to change these two classes `hamburger-menu-hr` - `hamburger-menu-hr-active`, in the `_mobmenu.scss` file <br>

<hr>

### 19. Opacity
- `op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` &#8594; Opacity in percentage <br>

**Sample**

 `<img class="op-60">` <br>

<hr>

### 20. General Classes
- `mouse-hand` &#8594; Pointer Cursor <br>
- `z-(0, 10, 100, 1000, 10000, 100000)` &#8594; Z-index classes <br>
- `f-(left, right)` &#8594; Float left or right <br>
- `of-(y, x)-(hidden, scroll, auto)` &#8594; Overflow <br>

<hr>

## Components

### AdminNavbar

This is a flexible Admin Nav that contains two components and provides a basic form of admin nav.  
The order of nesting of these components is as follows:

```
    <AdminNav isActive={true}>
      <AdminNavItem>
        ...
      </AdminNavItem>
    </AdminNav>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestAdminNav/TestAdminNav.js).

#### 1. AdminNav

The AdminNav component is a container of all AdminNav items, and the prop of this component is: <br>

- **isActive**: This prop gets a boolean value indicating whether the navItem is active or not.<br>

#### 2. AdminNavItem

Using this component you can create the AdminNav items also It is fully responsive.The prop of this component is: <br>

- **isActive**: This prop gets a boolean value indicating whether the navItem is active or not.<br>

<hr>

### Alert

This is a flexible Alert that contain two components, and provides a basic form of Alert. The order of nesting of these components is as follows:

```
      <Alert className="...">
          <AlertItem
            className="..."
            isActive=true
          >
            ...
          </AlertItem>
      </Alert>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestAlert/TestAlert.js).

#### 1. Alert

The Alert component is a container of Alert items.

#### 2. AlertItem

Using this component you can create the Alert item also It is fully responsive.

- **isActive**: This prop gets a boolean value indicating whether the Alert is active or not.

<hr>

### Button

This is a flexible and clickable Button. This is like `<button>` in HTML but it has some more props which help you to create your button easier. Inside Button you can put text and any tag that you can put in `<button>`.  This is an example that shows how to use this component:

```
    const buttonRef = useRef();
    useEffect(() => {
      if (buttonRef?.current) {
        buttonRef.current.classList.add("bgBlue");
      }
      console.log(buttonRef);
    }, [buttonRef]);
 
        <Button
          className="bgRed textWhite py1"
          onClick={() => console.log("Hello")}
          fullWidth
          ref={(el) => (buttonRef.current = el)}
        >
          Click Me!
        </Button>
```
You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestButton/TestButton.js).

Available prop for this component is: 

- **fullWidth**: This prop gets a boolean value indicating whether the width of the button should be 100% or not (It sets `w-per-100` as className). 

<hr>

### Card

This is a flexible Card with column direction that contain three components and the order of nesting of this component is as follows:

```
    <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestCard/TestCard.js).

#### 1. CardBody

#### 2. CardFooter

#### 3. CardHeader

<hr>

### Carousel

This is a flexible Carousel that contains two components. The nesting order of these components is as follows:

```
      const [moveLeft, setMoveLeft] = useState(false);
      const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);
      <Carousel
        moveLeft={moveLeft}
        setMoveLeft={setMoveLeft}
        moveToItemWithNum={moveToItemWithNum}
        setMoveToItemWithNum={setMoveToItemWithNum}
      >
        <CarouselItem>
          <p>
            Item 1
          </p>
          <p>
            Item 2
          </p>
        </CarouselItem>
      </Carousel>
      <button onClick={() => setMoveLeft(true)}>Left</button>
      <button onClick={() => setMoveToItemWithNum(4)}>Jump To number 4</button>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

For a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestCaraousel/TestCaraousel.js).

#### 1. Carousel

The carousel component is a container of all carousel items, and the props of this component are: <br>

- **moveRight**: This is a boolean prop that activates the right movement by default `false` but when we change it to `true` the item start moving to the right. <br>
- **setMoveRight**: This is a function that reset the move right prop.<br>

- **moveLeft**: This is a boolean prop that activates the left movement by default `false` but when we change it to `true` the item start moving to the left.<br>
- **setMoveLeft**: This is a function that reset the move left prop. <br>

- **moveToItemWithNum**: This is an integer prop that takes the element's id that we want to access, by default `1` the current element. <br>
- **setMoveToItemWithNum**: This is a function that change the moveToItemWithNum value. <br>
- **transitionDuration**: This is a number prop that change the duration of transition by default `0.3`. <br>
- **transition_timing_function**: This is a prop that take one of these `ease`,`linear`,`ease-in`,`ease-out`,`ease-in-out`,`inherit` as value to define how the transition work.<br>

#### 2. CarouselItem

Using this component you can create the carousel items also It is fully responsive.

<hr>

### Column 
Using column component you can create a column. This is an example that shows how to use this component: 

```
      <Row>
        <Column xs={12} sm={8} md={6} lg={4} className="bgRed">
          Hello
        </Column>
        <Column xs={12} sm={4} md={6} lg={8} className="bgBlue">
          Bye
        </Column>
      </Row>
```
You can use our SCSS classes for styling this component also you can pass any props to these component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestRow/TestRow.js).

Available props for this component is:
- **xs**: This prop is a number between 1 and 12 which indicate the size of column in xs screen. 
- **sm**: This prop is a number between 1 and 12 which indicate the size of column in sm screen. 
- **md**: This prop is a number between 1 and 12 which indicate the size of column in md screen. 
- **lg**: This prop is a number between 1 and 12 which indicate the size of column in lg screen. 
The default value for this props is 12. 

<hr>

### DesktopNavbar

4 components are provided in this section that should be used in a nested way to create a fully flexible desktop navbar. <br>
The order of nesting of these components is as follows: <br>

```
<NavBar>
      <NavItem>
          <SubNavContainer>
              <SubNavItem>
              </SubNavItem>
              ...
          </SubNavContainer>
      </NavItem>
      ...
 </NavBar>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestNavBar/DesktopNav.js).

#### 1. NavBar

This is the container for all components in the navbar (For example the Logo, menu, and register button), also It is fully responsive.

#### 2. NavItem

Using this component you can create your menu. Available prop for this component is:  
- **isActive**: This prop gets a boolean value indicating whether the navItem is active or not. There is a SCSS class for active NavItem(`iswad_navItem_active`).<br>

#### 3. SubNavContainer

This is a wrapper around the SubNavItem components and creates your submenu area. Available prop for this component is:
- **isActive**: This is a boolean value <br>

#### 4. SubNavItem

Using this component you can create submenus for each NavItem. This component uses `iswad_subNavItem` SCSS class as style.<br>

<hr>

### Div

This is a flexible Div that provides you some options to make the basic style of a div easier. <br>
 This is an example that shows how to use this component:

```
    <Div
        type="flex"
        direction="horizontal"
        hAlign="center"
        vAlign="center"
        distributedAround
        className="bgRed height-px-400"
      >
        ...
    </Div>
```
You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestDiv/TestDiv.js).

The props of this component are: <br>

- **type**: This is a prop that takes `flex` or `block` as the value of display, by default `block` <br>
- **direction**: This is a prop that takes one of the two values `horizontal` to have div with a flex-direction row or `vertical` to have div with a flex-direction column, by default `horizontal` <br>

- **hAlign**: 'Horizontal Align' this is a prop that takes one of the three values and each value depends on the direction, by default `start`

- `center`:
  - In `vertical` direction **hAlign** play the rule of `align-items : center`. <br>
  - In `horizontal` direction **hAlign** play the rule of `justify-content : center`. <br><br>

- `end`:
  - In `vertical` direction **hAlign** play the rule of `align-items : end`. <br>
  - In `horizontal` direction **hAlign** play the rule of `justify-content : end`. <br><br>

- `start`:
  - In `vertical` direction **hAlign** play the rule of `align-items : start`. <br>
  - In `horizontal` direction **hAlign** play the rule of `justify-content : start`. <br><br>

- **vAlign**: 'Vertical Align' this is a prop that takes three values and each value depends on the direction, by default `start`.

- `center`:
  - In `horizontal` direction **hAlign** play the rule of `align-items : center`. <br>
 - In `vertical` direction **hAlign** play the rule of `justify-content : center`. <br><br>

- `end`:
  - In `horizontal` direction **hAlign** play the rule of `align-items : end`. <br>
  - In `vertical` direction **hAlign** play the rule of `justify-content : end`. <br><br>

- `start`:
  - In `horizontal` direction **hAlign** play the rule of `align-items : start`. <br>
  - In `vertical` direction **hAlign** play the rule of `justify-content : start`. <br><br>

- **textAlign**: This is a prop that takes one of the three values ` centre` to make the text at the centre or `left` to make the text at the left or `right` to make the text at the right, by default `left` <br>
- **distributedBetween**: This is a boolean prop, by default `false` but if you set it, it will play the role of `justify-content : space-between`, by default `false` <br>
- **distributedAround**: This is a boolean prop, by default `false` but if you set it, it will play the role of `justify-content : space-around`, by default `false` <br>

<hr>

### HamburgerIcon

This is a hamburgur icon with a nice animation on click to close and open the icon.
 This is an example that shows how to use this component:

```
const cssConfigShape = {
    hamburgerMenuBgColor = 'white'
}
const [iconToggler, setIconToggler] = useState(true);
<HamburgerIcon
    iconToggler={true}
    onOpenedIconClick={() => console.log("Open")}
    onClosedIconClick={() => console.log("Close")}
    cssConfig={cssConfigShape}
/>
<button onClick={()=>setIconToggler(true)}> </button>
```

Available props of this component are: <br>

- **onClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the hamburger icon <br>
- **onOpenedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the opened hamburger icon <br>
- **onClosedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the closed hamburger icon <br>
- **iconToggler**: This is a boolean type prop indicating whether or not the hamburger menu icon should be toggleable using the component that this prop is passed to. <br>
- **setIconToggler**: This is a function type prop, that is used to set the iconToggler value. This prop should pass to the hamburger menu toggle handler component. <br>
- **cssConfig**: Using cssConfig you can configure the CSS of the HamburgerIcon. There are different props that you can set. <br>

  - `hamburgerMenuContainerWidth`: a number that specifies the width of the hamburger menu container. <br>
  - `hamburgerMenuContainerHeight`: a number that specifies the height of the hamburger menu container. <br>
  - `hamburgerMenuContainerBgColor`: a string that specifies the background color of the hamburger menu container. <br>
  - `hamburgerMenuContainerBorder`: a string that specifies the border of the hamburger menu container. <br>
  - `hamburgerMenuContainerBorderRadius`: a number that specifies the border radius of the hamburger menu container. <br>
  - `hamburgerMenuContainerPadding`: a number that specifies the padding of the hamburger menu container.<br>
  - `hamburgerMenuTopWidth`: a number that specifies the top width of the hamburger menu. <br>
  - `hamburgerMenuMiddleWidth`: a number that specifies the middle width of the hamburger menu. <br>
  - `hamburgerMenuBottomWidth`: a number that specifies the bottom width of the hamburger menu. <br>
  - `hamburgerMenuHeight`: a number that specifies the height of the hamburger menu. <br>
  - `hamburgerMenuBgColor`: a string that specifies the background color of the hamburger menu. <br>
  - `hamburgerMenuSpace`: a number that specifies the space of the hamburger menu. <br>
  - `hamburgerMenuBorderRadius`: a number that specifies the border radius of the hamburger menu. <br>
  - `hamburgerMenuClosedIconWidth`: a number that specifies the of the hamburger menu. <br>
  - `hamburgerMenuTransitionDuration`: a number that specifies the transition duration of the hamburger menu. <br>
  - `hamburgerMenuContainerXPadding`: a number that specifies the right and left padding of the hamburger menu container. <br>
  - `hamburgerMenuTransform`: one of the following options that specifies the transformation of the hamburger menu: <br>
    - scale(-1, 1) <br>
    - scale(1, 1) <br>
    - scale(1, -1) <br>
    - scale(-1, -1) <br>


<hr>

### Heading 
Headings are titles or subtitles that you want to display on a webpage. This is a flexible heading tag that gives you some options to make the basic style of a heading easier and also makes your code more consistent. This is an example that shows how to use this component:
```
    <Heading className="textBlue" type={3}>
        This is Heading with type 3. It's like h3. 
    </Heading>
```
You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/Document/src/TestComponents/TestHeading/TestHeading.js).<br>

The props that it takes are like `<h1>` to `<h6>` tags in HTML. Also, the other props of this component are:


- **type**: This is a number that indicates how important is the heading. The range of this prop is from 1 to 6. when the type is equal to 1 your Heading looks like `<h1>` and when it is equal to 6 the Heading looks like `<h6>`. 


<hr>

### Icon

This component is used in order to add icons to your project. This is an example that shows how to use this component:<br>

`<Icon type="search" fill="black" stroke="black" scale={1} />` <br>

You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestIcon/TestIcon.js).<br>

The props of this component are: <br>
- **type**: This is the type of icon.
- **fill**: Filling color of the icon as a string (It can be a hex color or a color name) <br>

Also, each type of icon have other different props as you see in the above example "search" icon has the following props:  
- **stroke**: Stroke color of the icon, as a string (It can be a hex color or a color name) <br>
- **scale**: Determine the scale/size of the icon. An integer value can be passes as a value to this prop. <br>

<hr>


### Image

This is a flexible `<img />` that gives you some options to make the basic style of a `<img />` easier and also makes your code more consistent. This is an example that shows how to use this component:

```
    <Image
        src="https://picsum.photos/200"
        alt="Random Image"
        width={350}
        height={350}
    />
```
You can use our SCSS classes for styling these components. The props that it takes are like `<img />`, you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/Document/src/TestComponents/TestImage/TestImage.js).<br>

<hr>

### Input 

This is a flexible `<input />` that gives you some options to make the basic style of a `<input />` easier and also makes your code more consistent. This is an example that shows how to use this component:

```
    <Input
      type="text"
      name="first_name"
      fullWidth
      placeholder="Type your first name"
      value={firstName}
      onChange={(e) => {
        setFirstName(e.target.value);
        setFirstNameErrorIsActive(false);
        setFirstNameErrorMessage("");
      }}
      errorMessage={fistNameErrorMessage}
      errorIsActive={fistNameErrorIsActive}
    />
```
You can use our SCSS classes for styling these components. The props that it takes are like `<input />`, you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestForm/TestForm.js).

Available props for this component is:
- **type**: This prop is a sting that indicates the type of input (for example email, checkbox, etc). 
- **fullWidth**:This prop is a boolean value indicating whether the width of the button should be 100% or not (It sets w-per-100 as className).
- **errorMessage**: This prop is a string value that indicates the error message when an error accrued.
- **errorIsActive**: This prop is a boolean that indicates whether error messages should be shown or not for this input. 

<hr>

### Label 

This is a flexible `<label>` that gives you some options to make the basic style of a `<label>` easier and also makes your code more consistent. This is an example that shows how to use this component: <br>

`        <Label className="textBlack" htmlFor="sample">
          First Name
        </Label>
`

You can use our SCSS classes for styling this component.The props that it takes are like `<label>`, you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestForm/TestForm.js).<br>

<hr>

### MobileNavbar

4 component are provided in this section which should be used in a nested way to create a fully flexible mobile navbar.
The order of nesting of these components is as follows:

```
<MobNav>
      <MobNavItem>
          <MobSubNavContainer>
              <MobSubNavItem>
              </MobSubNavItem>
              ...
          </MobSubNavContainer>
      </MobNavItem>
      ...
 </MobNav>
```
You can use our SCSS classes for styling these components also you can pass any props to these components, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestNavBar/MobileNav.js).<br>

#### 1. MobNav

This is the container for all components in the navbar (For example the menu, and register button), also It is fully responsive. <br>

#### 2. MobNavItem

Using this component you can create your navigation bar. Available prop for this component is:

- **isActive**: This prop gets a boolean value indicating whether the MobnavItem is active or not. There is a SCSS class for active MobNavItem(`iswad_mobNavItem_active`).<br>

#### 3. MobSubNavContainer

This is a wrapper around the MobSubNavItem components. Available prop for this component is:

- **isActive**: This is a boolean value <br>

#### 4. MobSubNavItem

Using this component you can create submenus for each MobNavItem. This component uses `iswad_mobSubNavItem` SCSS class as style.<br>

<hr>

### Modal

This is a flexible Modal that gives you some options to make the basic style of a Modal easier. This is an example that shows how to use this component:

```
    <Modal>
        <div>Hello</div>
    </Modal>
```
You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestModal/TestModal.js).<br>

Available prop for this component is: <br>

- **fullHeightclassName**: This is a prop that gives you the hand to add more styling to your full-screen background <br>


<hr>

### Pagination

This is a flexible Pagination with all its functionality, and gives a basic form of Pagination.
This is an example that shows how to use this component:

```
    const [currentPage, setCurrentPage] = useState(1);
    <Pagination
        numberOfShownPages={5}
        currentPage={currentPage}
        numberOfTotalPages={25}
        setCurrentPage={setCurrentPage}
        showFirstLastIcon={true}
      />
```
You can use our SCSS classes for styling this component also you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestPagination/TestPagination.js).<br>

The clickable icons of this component are:<br>

- **last**: This is an icon that you can use if you want to access the last pages. <br>
- **first**: This is an icon that you can use if you want to access the first pages. <br>

The props of this component are:

- **numberOfShownPages**: This is an integer prop that takes the number of shown pages. <br>
- **numberOfTotalPages**: This is an integer prop that takes the number of available pages. <br>
- **currentPage**:this is an integer prop that takes the id of the current page (The pages' Ids start by 1 not by 0). <br>
- **setCurrentPage**: This is a function that change the currentPage value. <br>
- **showFirstLastIcon**: This prop gets a boolean value indicating the presence of the directions icon. <br>

<hr>

### Paragraph

This is a flexible `<p>` that gives you some options to make the basic style of a `<p>` easier and also makes your code more consistent. This is an example that shows how to use this component: <br>

`<Paragraph> This is some text in a paragraph. </Paragraph>`

You can use our SCSS classes for styling this component.The props that it takes are like `<p>`, you can pass any props to this component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/Document/src/TestComponents/TestParagraph/TestParagraph.js).<br>


<hr>

### Row 
Using Row component you can create a row. This is an example that shows how to use this component: 

```
      <Row>
        <Column xs={12} sm={8} md={6} lg={4} className="bgRed">
          Hello
        </Column>
        <Column xs={12} sm={4} md={6} lg={8} className="bgBlue">
          Bye
        </Column>
      </Row>
```
You can use our SCSS classes for styling this component also you can pass any props to these component, such as onClick, className, etc.

To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestRow/TestRow.js).

Available props for this component is:
- **xs**: This prop is a number between 1 and 12 which indicate the size of row in xs screen. 
- **sm**: This prop is a number between 1 and 12 which indicate the size of row in sm screen. 
- **md**: This prop is a number between 1 and 12 which indicate the size of row in md screen. 
- **lg**: This prop is a number between 1 and 12 which indicate the size of row in lg screen. 
The default value for this props is 12. 
<hr>

### Table

Using this component you can create a flexible table. This is an example that shows how to use this component: <br>
```
  const search = (props) => {
    return <Search {...props} />;
  };

  const [selectedData, setSelectedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
      <Table
        headLines={headLines}
        data={data}
        colWidth={400}
        tableWidth={"2025px"}
        isSelectable={true}
        search={search}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        sortIconColors={{ ASC: "green", DESC: "red", REG: "silver" }}
        rowsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showDefaultPagination={true}
        numberOfShownPages={5}
      />
```
To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestTable/TestTable.js).<br>

 Available props for this component are: <br>
- **headLines**: This prop indicates the table headings. This prop has the following features:<br>
  - **value**: This is the variable in your data. <br>
  - **display**: This is the text that will be shown in the table header for this value. <br>
  - **isSortable**: This is a boolean variable indicating whether or not the column should be sortable. <br>
  - **hasSearch**: This is a boolean variable indicating whether or not the column should has search component. <br>
  - **Example for headlines**: <br>

    ```
    const headLines = [
        {
            value: "user_name",
            display: "Username",
            width: 300,
            hasSearch: true,
            isSortable: true,
        },
        "password",
    ];
    ```

- **data**: This prop indicates the data that will be displayed in the table. This is an for data. <br>
    ```
    [
      {
        "id": 1,
        "first_name": "Brewer",
        "last_name": "Archibald",
        "email": "barchibald0@photobucket.com",
        "gender": "Agender",
        "ip_address": "7.23.122.248"
      },
      {
        "id": 2,
        "first_name": "Harli",
        "last_name": "Panswick",
        "email": "hpanswick1@japanpost.jp",
        "gender": "Male",
        "ip_address": "242.244.91.66"
      },
      ...
      ]
    ```
        
    data also have a display feature that is different from value. using this           feature you can represent data better. so data has two features: value and          display. There is an example here: 
        
    ```
      useEffect(() => {
        data.map((d) => {
          d["gender"] = {
            value: d["gender"],
            display: genderConverter(d["gender"]),
          };
        });
      }, [data]);
  ```
  *genderConverter function returns a proper icon for each gender. 
- **colWidth**: This prop indicates the default width of the columns.<br>
- **isSelectable**: This prop indicates whether rows of the table are selectable or not. When this prop is true then a checkbox appears in the right side of the table for selecting rows. <br>
- **search**: we have an default search component but if you want to use your one you should pass a functional component to this prop. <br>
- **selectedData**: This is the data which have been selected.<br>
- **setSelectedData**: This is the data that you want to select.<br>
- **sortIconColors**: Using this prop you can choose different colors for sort icon in this states : <br>
  - **ASC** (ascending)<br>
  - **REG** (regular)<br>
  - **DESC** (descending)<br>
- **rowsPerPage**: This prop indicates the number of rows per page. <br>
- **currentPage**: This prop is a number that indicates the current page. <br>
- **setCurrentPage**: Using this prop you can set a number as the current page of table. <br>
- **showDefaultPagination**: This prop indicates whether the default pagination should be shown or not. If you want to use your custom pagination component set this false otherwise true. <br>
- **numberOfShownPages**: This prop indicates the number of page that should be shown. <br>


<hr>

### Text

This is a flexible `<span>` that gives you some options to make the basic style of a `<span>` easier and also makes your code more consistent. Text is an inline element while Div is a block-level element. This is an example that shows how to use this component:

```
  <Div>
    Hello
    <Text className="bgBlue">
      World!!
    </Text>
  <Div>
```
To see a more complete example, click [here](https://github.com/mmmohajer/baseDesign/blob/Document/src/TestComponents/TestText/TestText.js).<br>

You can use our SCSS classes for styling this component also you can pass any props to these component, such as onClick, className, etc. The props that it takes are like `<span>`. 

<hr>

## Editable Css Classes

These editable css classes can change the styles of pre-defined components by ISWAD

### AdminNav

`.iswad_adminNav` <br>
`.iswad_adminNav_active` <br>
`.iswad_adminNavItem` <br>
`.iswad_adminNavItem_active` <br>

<hr>

### Alert

`.iswad_alert_container` <br>
`.iswad_alert_item` <br>
`.iswad_alert_item_active` <br>

<hr>

### Mobile Navbar

`.iswad_mobNav` <br>
`.iswad_mobNav_active` <br>
`.iswad_mobNavItem` <br>
`.iswad_mobNavItem_active` <br>
`.iswad_mobSubNavContainer` <br>
`.iswad_mobSubNavContainer_active` <br>
`.iswad_mobSubNavItem` <br>

<hr>

### Desktop Navbar

`.iswad_navItem` <br>
`.iswad_navItem_active` <br>
`.iswad_subNavContainer` <br>
`.iswad_subNavContainer_active` <br>
`.iswad_subNavItem` <br>

<hr>

### Pagination

`.iswad_pagination` <br>
`.iswad_pagination_item` <br>
`.iswad_pagination_item_active` <br>

<hr>

### Table

`.iswad_table` <br>
`.iswad_table_headContainer` <br>
`.iswad_table_search` <br>
`.iswad_td` <br>
`.iswad_th` <br>
`.iswad_tr` <br>

<hr>
 
## License

This project is licensed under the terms of the MIT license.

## How to Contribute

To collaborate on this repository you need to make a request from the owner of this repository (https://github.com/mmmohajer) and then you need to push your changes into a new branch and create pull request.
