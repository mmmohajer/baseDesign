# basedesign-iswad

## Description

This repository is designed in order to develop basic components and create handy css classes to be used in any react/webpack projects. Using the pre-designed components and pre-defined css classes developed in this repository, you can enourmously increase your speed of development and be more focused on the logic of your project. Css classes defined in this project can be very helpful for you to design full responsive websites with writing much less css codes.

**NOTE:** This project is being developed constantly, and in the first available version of this project, there are a pre-defined lot of css classes available for you to help you develop fully responsive design, as quickly as possible. In the future versions, we try to add different components. To share your feedback with me, you can contact me via mmmohajer70@gmail.com OR https://www.linkedin.com/in/mmmohajer/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Classes](#classes)
- [Components](#components)
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

**1. Alignments** <br>
`text-ltr` --> Align: left to right<br>
`text-rtl` --> Align: right to left <br>
`text-center` --> Align: center<br>
Sample: `<div class="text-ltr">Hello</div>`

<hr>

**2. Widths** <br>
`w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Width in percentage <br>
`w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Width in pixels <br>
`min-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Min width in percentage <br>
`min-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Min width in pixels <br>
`max-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Max width in percentage <br>
`max-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Max width in pixels <br>
`w-inherit` --> Width: inherit <br>
Sample: `<div className="w-per-10"> Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

**3. Heights** <br>
`height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Heights in px <br>
`height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
`min-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Min heights in px <br>
`max-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Max heights in px <br>
`min-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Min heights in vh <br>
`max-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Max heights in vh <br>
Sample: `<div class="height-px-10">` <br>

<hr>

**4. Heading** <br>
`h1` --> use this class to make a flexible head in all dimensions(32px at small 40px at medium 48px at large) <br>
`h2` --> use this class to make a flexible head in all dimensions(26px at small 32px at medium 36px at large) <br>
`h3` --> use this class to make a flexible head in all dimensions(22px at small 24px at medium 28px at large) <br>
Sample: `<div class="h1">` <br>

<hr>

**5. Margins and Paddings** <br>
`m(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin value (`1` => 0.5rem) <br>
`mt(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin top value (`1` => 0.5rem) <br>
`mr(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin right value (`1` => 0.5rem) <br>
`mb(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin bottom value (`1` => 0.5rem) <br>
`ml(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin left value (`1` => 0.5rem) <br>
`my(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin right and left value (`1` => 0.5rem) <br>
`mx(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set margin top and bottom value (`1` => 0.5rem) <br>
`p(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding value (`1` => 0.5rem) <br>
`pt(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding top value (`1` => 0.5rem) <br>
`pr(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding right value (`1` => 0.5rem) <br>
`pb(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding bottom value (`1` => 0.5rem) <br>
`pl(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding left value (`1` => 0.5rem) <br>
`py(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding right and left value (`1` => 0.5rem) <br>
`px(1, 2, 3, 4, 5, 6, 7, 8)` Use this classes to set padding top and bottom value (`1` => 0.5rem) <br>
`ml-auto` <br>
`mr-auto` <br>
Sample: `<div className="m5"> Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

**6. Colors** <br>
`text(Primary, Faded, Info, Inverse, Success, Warning, Danger, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define the text color of an element<br>
`bg(Primary, Faded, Info, Inverse, Success, Warning, Danger, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define background color of an element<br>
Sample: `<div class="text-third bg-green"></div>`

<hr>

**7. Hover Color** <br>
`hover-text-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Color text when hovering on an element <br>
`hover-bg-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Background color when hovering on an element <br>
Sample: `<a class="hover-bg-primary"></a>` <br>

<hr>

**8. Borders** <br>
`br-rad-px-(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)` --> Use this classes to define the border radius in pixels. <br>
`br-rad-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Use this classes to define the border radius in percentage. <br>
`br-(all, top, left, right, bottom)-(dotted, dashed, solid, double, groove, ridge, inset, outset, hidden)-(1, 2, 3, 4)` --> Use this classes to define the direction, style, and thickness of borders in pixels. <br>
`br-color-(primary, faded, info, inverse, success, warning, danger, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Use this classes to define the color of borders. <br>
`br-none` --> Use this class to remove all borders

Sample: `<div class="br-bottom-double-2 br-color-red">Hello</div>`

<hr>

**8. Fonts** <br>
`fs-px-(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32)` --> Font size in pixels <br>
`fs-r-(1, 2, 3, 4, 5, 6, 7, 8)` --> Font size in rem <br>
`fw-(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)` --> Font weight <br>
`f-b` --> Bold Text <br>
`f-i` --> Italic text <br>
Sample: `<p class="fs-r-2 fw-600 f-i">Something</p>` <br>

<hr>

**9. Position** <br>
`pos-abs` --> Make the position absolute <br>
`pos-abs--(lt, rt, center, lb, rb)` --> Define the position of an absolute element <br>
`pos-fix` --> Make the position fixed <br>
`pos-fix--(lt, rt, center, lb, rb)` --> Define the position of a fixed element <br>
`pos-rel` --> Make the position relative <br>
`pos-sticky` --> Make the position sticky <br>
`pos-sticky--(lt, rt, center, lb, rb)` --> Define the position of a sticky element <br>

Sample: `<div class="pos-abs pos-abs--lt">` <br>

<hr>

**10. display** <br>
`block` Display : block <br>
`no-display` Display : none <br>
`flex` --> Display : Flex <br>
`grid` Display : Grid <br>
`show-block-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` Use this classes to show a block div in specific Dimension (`sm` : small, `md` : medium, `lg` : large)<br>
Sample: `<div class="flex">` OR `<div class="no-display"></div>` OR `<div class="block"></div>` <br>

<hr>

**11. Grid and Flex** <br>
`row` --> Use this classes to define a flex element with row direction <br>
`row--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Use this class to define how much element you want in any column<br>
`row--sm--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Small Devices <br>
`row--md--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Medium Size Devices<br>
`row--lg--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Large Devices<br>
`flex--jc--(start, center, end, betwwen, around, evenly)` Use this classes to define the `justify-content` value <br>
`flex--ai--(start, center, end)` Use this classes to define the `align-items` value <br>
`flex--dir--(row, col)` Use this classes to define the direction (column, row) <br>
`flex--dir--(row, col)` Use this classes to define the direction (column, row) <br>
`flex--gr--(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Flex grow value <br>
`flex--wrap` Use this classes if you need to assignee a wrap value to flex-wrap property <br>
`show-flex-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` Use this classes to show a flex div in specific Dimension (`sm` : small, `md` : medium, `lg` : large)<br>
`grid--cols--(auto, oneFourth, oneThird, oneHalf)` Use this class to define how much element you want in any column <br>
Sample: `<div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

**12. Links** <br>
`link` --> Basic form for links <br>
Sample: `<a class="link"></a>` <br>

<hr>

**13. Buttons** <br>
`btn-(large, medium, small, full)` --> Use `large`, `medium` and `small` to define the size of button, `full` to take the full of size <br>
Sample: `<button class="btn-large">` <br>
**Note:** You can also use our customized classes to define your desired button with the desired size, color, background color, and borders. <br>

<hr>

**14. Forms** <br>
`input` --> basic form for an input <br>
`required` --> use this class for required inputs <br>
Sample: `<div class="input">` <br>

<hr>

**15. Opacity** <br>
`op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Opacity in percentage <br>
Sample: `<img class="op-60">` <br>

<hr>

**16. General Classes** <br>
`mouse-hand` --> Pointer Cursor <br>
`z-(0, 10, 100, 1000, 10000, 100000)` --> Z-index classes <br>
`f-(left, right)` --> Float left or right <br>
`of-(y, x)-(hidden, scroll, auto)` --> Overflow <br>

**17. Mobile Menu Bar** <br>
`menu-mob-icon` --> Mobile Menu Icon <br>
`menu-mob-closed-icon` --> Closing icon <br>
`menu-mob-hr` <br>
`menu-mob-hr-active` <br>
Notice: In order to make any changes in the way of appearing of the mobile menu, you need to change these two classes `hamburger-menu-hr` `hamburger-menu-hr-active`, in the `_mobmenu.scss` file <br>

<hr>

**15. Opacity** <br>
`op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Opacity in percentage <br>
Sample: `<img class="op-60">` <br>

<hr>

**16. General Classes** <br>
`mouse-hand` --> Pointer Cursor <br>
`z-(0, 10, 100, 1000, 10000, 100000)` --> Z-index classes <br>
`f-(left, right)` --> Float left or right <br>
`of-(y, x)-(hidden, scroll, auto)` --> Overflow <br>

## Components

### [Icon](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Icon) <br>

This component is used in order to add icons to your project, and the props for this component are: <br>
**- type**: The type of the icon. One of the following options: <br>
`[search]` <br>
**- fill**: Filling color of the icon as a string (It can be a hex color or a color name) <br>
**- stroke**: Stroke color of the icon, as a string (It can be a hex color or a color name) <br>
**- scale**: Determine the scale/size of the icon. An integer value can be passes as a value to this prop. <br>

**Example** <br>
`<Icon type="search" fill="black" stroke="black" scale={1} />` <br>

<hr>

### [HamburgerIcon](https://github.com/mmmohajer/baseDesign/tree/master/src/components/HamburgerIcon) <br>

This is a hamburgur icon with a nice animation on click to close and open the icon. Available props for this component are: <br>

**- onClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the hamburger icon <br>
**- onOpenedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the opened hamburger icon <br>
**- onClosedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the closed hamburger icon <br>
**- iconToggler**: This is a boolean type prop indicating whether or not the hamburger menu icon should be toggleable using the component that this prop is passed to. <br>
**- setIconToggler**: This is a function type prop, that is used to set the iconToggler value. This prop should pass to the hamburger menu toggle handler component. <br>
**- cssConfig**: Using cssConfig you can configure the CSS of the HamburgerIcon. There are different props that you can set. <br>

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
- - scale(-1, 1) <br>
- - scale(1, 1) <br>
- - scale(1, -1) <br>
- - scale(-1, -1) <br>

**Example** <br>

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

<hr>

### [Desktop Navbar](https://github.com/mmmohajer/baseDesign/tree/master/src/components/NavBar)

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

**1. [NavBar](https://github.com/mmmohajer/baseDesign/blob/master/src/components/NavBar/NavBar.js)**
This is the container for all components in the navbar (For example the Logo, menu, and register button), also It is fully responsive. you can use our SCSS classes for styling this component. <br>
**2. [NavItem](https://github.com/mmmohajer/baseDesign/blob/master/src/components/NavBar/subs/NavItem.js)**
Using this component you can create your menu. Available prop for this component is:  
**- isActive**: This prop gets a boolean value indicating whether the navItem is active or not. There is a SCSS class for active NavItem(`iswad_navItem_active`).<br>
**3. [SubNavContainer](https://github.com/mmmohajer/baseDesign/blob/master/src/components/NavBar/subs/SubNavContainer.js)**
This is a wrapper around the SubNavItem components and creates your submenu area. Available prop for this component is:
**- isActive**: This is a boolean value indicating which SCSS class should be used for this component.(`iswad_subNavContainer_noActive` or `iswad_subNavContainer_active`).<br>
**4. [SubNavItem](https://github.com/mmmohajer/baseDesign/blob/master/src/components/NavBar/subs/SubNavItem.js)**:
Using this component you can create submenus for each NavItem. This component uses `iswad_subNavItem` SCSS class as style.
**Example**<br>
For an example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestNavBar/DesktopNav.js).

<hr>

### [Mobile Navbar](https://github.com/mmmohajer/baseDesign/tree/master/src/components/MobNav)

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

**1. [MobNav](https://github.com/mmmohajer/baseDesign/blob/master/src/components/MobNav/MobNav.js)**
This is the container for all components in the navbar (For example the menu, and register button), also It is fully responsive. you can use our SCSS classes for styling this component. <br>
**2. [MobNavItem](https://github.com/mmmohajer/baseDesign/blob/master/src/components/MobNav/subs/MobNavItem.js)**
Using this component you can create your navigation bar. Available prop for this component is:
**- isActive**: This prop gets a boolean value indicating whether the MobnavItem is active or not. There is a SCSS class for active MobNavItem(`iswad_mobNavItem_active`).<br>
**3. [MobSubNavContainer](https://github.com/mmmohajer/baseDesign/blob/master/src/components/MobNav/subs/MobSubNavContainer.js)**
This is a wrapper around the MobSubNavItem components. Available prop for this component is:
**- isActive**: This is a boolean value indicating which SCSS class should be used for this component.(`iswad_mobSubNavContainer_noActive` or `iswad_mobSubNavContainer_active`).<br>
**4. [MobSubNavItem](https://github.com/mmmohajer/baseDesign/blob/master/src/components/MobNav/subs/MobSubNavItem.js)**
Using this component you can create submenus for each MobNavItem. This component uses `iswad_mobSubNavItem` SCSS class as style.
**Example**<br>
For an example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestNavBar/MobileNav.js).

<hr>

### [Table](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Table)

Using this component you can create a flexible table. Available props for this component are: <br>

- **headLines**: This prop indicates the table headings. This prop has the following features:<br>
- - **value**: This is the variable in your data. <br>
- - **display**: This is the text that will be shown in the table header for this value. <br>
- - **isSortable**: This is a boolean variable indicating whether or not the column should be sortable. <br>
- - **hasSearch**: This is a boolean variable indicating whether or not the column should has search component. <br>
- - **example**: <br>

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

- **data**: This prop indicates the data that will be displayed in the table. <br>
- **colWidth**: This prop indicates the default width of the columns.<br>
- **isSelectable**: This prop indicates whether rows of the table are selectable or not. When this prop is true then a checkbox appears in the right side of the table for selecting rows. <br>
- **search**: we have an default search component but if you want to use your one you should pass a functional component to this prop. <br>
- **selectedData**: This is the data which have been selected.<br>
- **setSelectedData**: This is the data that you want to select.<br>
- **sortIconColors**: Using this prop you can choose different colors for sort icon in this states : <br>
- - **ASC** (ascending)<br>
- - **REG** (regular)<br>
- - **DESC** (descending)<br>
- **rowsPerPage**: This prop indicates the number of rows per page. <br>
- **currentPage**: This prop is a number that indicates the current page. <br>
- **setCurrentPage**: Using this prop you can set a number as the current page of table. <br>
- **showDefaultPagination**: This prop indicates whether the default pagination should be shown or not. If you want to use your custom pagination component set this false otherwise true. <br>
- **numberOfShownPages**: This prop indicates the number of page that should be shown. <br>

**Example**<br>
For an example, click [here](https://github.com/mmmohajer/baseDesign/blob/master/src/TestComponents/TestTable/TestTable.js).

<hr>

### [Flexible Carousel](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Carousel) <br>

This is a flexible Carousel that contain two components, <br>

**1. [Carousel](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Carousel)** <br>
The carousel component is a container of all carousel items, and the props for this component are: <br>

- **moveRight**: this is a boolean prop that activates the right movement by default `false` but when we change it to `true` the item start moving to the right.<br>
- **setMoveRight**: this is a function that reset the move right prop.<br>
- **moveLeft**: this is a boolean prop that activates the left movement by default `false` but when we change it to `true` the item start moving to the left.<br>
- **setMoveLeft**: this is a function that reset the move left prop. <br>
- **moveToItemWithNum**: this is an integer prop that takes the element's id that we want to access, by default `1` the current element. <br>
- **setMoveToItemWithNum**: this is a function that change the moveToItemWithNum value <br>
- **transitionDuration**:this is a number prop that change the duration of transition by default `0.3` <br>
- **transition_timing_function**:this is a prop that take one of these `ease`,`linear`,`ease-in`,`ease-out`,`ease-in-out`,`inherit` as value to define how the transition work .<br>

**2. [CarouselItem](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Carousel/subs)** <br>
Using this component you can create the carousel items also It is fully responsive. you can use our SCSS classes for styling this component. <br>
The order of nesting of these components is as follows:

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

<hr>

### [Flexible Div](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Div) <br>

This is a flexible Div that gives you some options to make the basic style of a div easier, <br>
The props for this component are: <br>

- **type**: this is a prop that takes `flex` or `block` as the value of display, by default `block` <br>
- **direction**: this is a prop that takes one of the two values `horizontal` to have div with a flex-direction row or `vertical` to have div with a flex-direction column, by default `horizontal` <br>
- **hAlign**: 'Horizontal Align' this is a prop that takes one of the three values and each value depends on the direction, by default `start`
- `center`:
- - In `vertical` direction **hAlign** play the rule of `align-items : center`. <br>
- - In `horizontal` direction **hAlign** play the rule of `justify-content : center`. <br>
- `end`:
- - In `vertical` direction **hAlign** play the rule of `align-items : end`. <br>
- - In `horizontal` direction **hAlign** play the rule of `justify-content : end`. <br>
- `start`:
- - In `vertical` direction **hAlign** play the rule of `align-items : start`. <br>
- - In `horizontal` direction **hAlign** play the rule of `justify-content : start`. <br>
- **vAlign**: 'Vertical Align' this is a prop that takes three values and each value depends on the direction, by default `start`
- `center`:
- - In `horizontal` direction **hAlign** play the rule of `align-items : center`.
- - In `vertical` direction **hAlign** play the rule of `justify-content : center`.
- `end`:
- - In `horizontal` direction **hAlign** play the rule of `align-items : end`.
- - In `vertical` direction **hAlign** play the rule of `justify-content : end`.
- `start`:
- - In `horizontal` direction **hAlign** play the rule of `align-items : start`.
- - In `vertical` direction **hAlign** play the rule of `justify-content : start`.
- **textAlign**: this is a prop that takes one of the three values ` centre` to make the text at the centre or `left` to make the text at the left or `right` to make the text at the right, by default `left` <br>
- **distributedBetween**:this is a boolean prop, by default `false` but if you set it, it will play the role of `justify-content : space-between`, by default `false` <br>
- **distributedAround**:this is a boolean prop, by default `false` but if you set it, it will play the role of `justify-content : space-around`, by default `false` <br>
- **className**:this is a prop where you could include more styling <br>

The order of nesting of these components is as follows:

```
    <Div
        type="flex"
        direction="horizontal"
        hAlign="center"
        vAlign="center"
        distributedAround
        className="bgRed height-px-400"
      >
        .......
    </Div>
```

<hr>

### [Flexible Modal](https://github.com/mmmohajer/baseDesign/tree/master/src/components/Modal) <br>

This is a flexible Modal that gives you some options to make the basic style of a Modal easier, The props for this component are:

- **fullHeightclassName**: this is a prop that gives you the hand to add more styling to your full-screen background <br>
- **className**: this is a prop that gives you the hand to add more styling to your Modal <br>
  The order of nesting of these components is as follows:

```
    <Modal>
        <div>Hello</div>
    </Modal>
```

<hr>

### [Flexible Admin Nav](https://github.com/mmmohajer/baseDesign/tree/master/src/components/AdminNav) <br>

This is a flexible Admin Nav that contain two components, and gives a basic form of admin nav <br>

**1. [AdminNav](https://github.com/mmmohajer/baseDesign/tree/master/src/components/AdminNav)**
The AdminNav component is a container of all AdminNav items, and the props of this component are: <br>

**- isActive**: This prop gets a boolean value indicating whether the navItem is active or not.<br>
**- className**: this is a prop that gives you the hand to add more styling to your Modal <br>

**2. [AdminNavItem](https://github.com/mmmohajer/baseDesign/tree/master/src/components/AdminNav/subs)**
Using this component you can create the AdminNav items also It is fully responsive. you can use our SCSS classes for styling this component. <br>
And the props of this component are: <br>

**- isActive**: This prop gets a boolean value indicating whether the navItem is active or not.<br>
**- className**: this is a prop that gives you the hand to add more styling to your Modal <br>

The order of nesting of these components is as follows:

```
    <AdminNav isActive={true}>
      <AdminNavItem>
        .........
      </AdminNavItem>
    </AdminNav>
```

<hr>

## Modifialble CSS Classes:

iswad_adminNav <br>
iswad_adminNav_active <br>
iswad_adminNavItem <br>
iswad_adminNavItem_active <br>
iswad_alert <br>
iswad_alertItem <br>
iswad_alertItem_active <br>
iswad_mobNav <br>
iswad_mobNav_active <br>
iswad_mobNavItem <br>
iswad_mobNavItem_active <br>
iswad_mobSubNavContainer <br>
iswad_mobSubNavContainer_noActive <br>
iswad_mobSubNavContainer_active <br>
iswad_mobSubNavItem <br>
iswad_navItem <br>
iswad_navItem_active <br>
iswad_subNavContainer <br>
iswad_subNavContainer_noActive <br>
iswad_subNavContainer_active <br>
iswad_subNavItem <br>
iswad_pagination_item <br>
iswad_pagination_item_active <br>
iswad_table <br>
iswad_table_headContainer <br>
iswad_table_search <br>
iswad_th <br>
iswad_tr <br>
iswad_td <br>

<hr>

## License

This project is licensed under the terms of the MIT license.

## How to Contribute

To collaborate on this repository you need to make a request from the owner of this repository (https://github.com/mmmohajer) and then you need to push your changes into a new branch and create pull request.
