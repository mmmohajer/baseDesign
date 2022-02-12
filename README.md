# iswad-basedesign

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
`npm install --save sass` <br>
Then you can install the npm package related to this project: <br>
`npm install --save iswad-basedesign`<br>

## Usage

In order to use our css classes in your project, you need to do the following import, in your main js file (usually index.js) at the root of your project: <br>
`import iswad-basedesign/dist/style.js` <br>
**Note that css classes are introduced in the css classes section.**
In order to work with our components, you can import them as follows: <br>
`import {ComponentName} from "iswad-basedesign"` <br>
**Note that components are introduced in the components section.**

## Classes

**1. Alignments** <br>
`text-ltr` --> Align: left to right<br>
`text-rtl` --> Align: right to left <br>
`text-center` --> Align: center<br>
Sample: `<div class="text-ltr">Hello</div>`

<hr>

**2. Borders** <br>
`br-rad-px-(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)` --> Use this classes to define the border radius in pixels. <br>
`br-rad-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Use this classes to define the border radius in percentage. <br>
`br-(all, top, left, right, bottom)-(dotted, dashed, solid, double, groove, ridge, inset, outset, hidden)-(1, 2, 3, 4)` --> Use this classes to define the direction, style, and thickness of borders in pixels. <br>
`br-color-(primary, secondary, third, fourth, success, warning, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Use this classes to define the color of borders. <br>
`br-none` --> Use this class to remove all borders
Sample: `<div class="br-bottom-double-2 br-color-red">Hello</div>`

<hr>

**3. Buttons** <br>
`btn-(large, medium, small)` --> Use `large`, `medium` and `small` to define the size of button. <br>
Sample: `<button class="btn-large">` <br>
**Note:** You can also use our customized classes to define your desired button with the desired size, color, background color, and borders. <br>

<hr>

**4. Colors** <br>
`text(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define the text color of an element <br>
`bg(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define background color of an element<br>
Sample: `<div class="text-third bg-green"></div>`

<hr>

**5. display** <br>
`flex` <br>
`flex--jc--(start, center, end, betwwen, around, evenly)` <br>
`flex--ai--(start, center, end)` <br>
`flex--dir--(row, col)` <br>
`flex--gr--(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Flex grow value <br>
`flex--wrap` <br>
`block` <br>
`no-display` <br>
`show-flex-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` <br>
`show-block-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` <br>
Sample: `<div class="flex flex--jc--center flex--ai--center flex--dir--col">` OR `<div class="no-display"></div>` OR `<div class="block"></div>` <br>

<hr>

**6. Fonts** <br>
`fs-px-(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32)` --> Font size in pixels <br>
`fs-r-(1, 2, 3, 4, 5, 6, 7, 8)` --> Font size in half rem <br>
`fw-(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)` --> Font weight <br>
`f-b` --> Bold Text <br>
`f-i` --> Italic text <br>
Sample: `<p class="fs-r-2 fw-600 f-i">Something</p>` <br>

<hr>

**7. Heights and Boxes**
`min-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Min heights in px <br>
`min-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Min heights in vh <br>
`height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Heights in px <br>
`height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
`max-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Max heights in px <br>
`max-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Max heights in vh <br>
Sample: `<div class="box-vh-half">` <br>

<hr>

**8. Hover** <br>
`hover-text-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Color text when hovering on an element <br>
`hover-bg-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Background color when hovering on an element <br>
Sample: `<a class="hover-text-third hover-bg-primary"></a>` <br>

<hr>

**9. Opacity** <br>
`op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Opacity in percentage <br>
Sample: `<img class="op-60">` <br>

<hr>

**10. Position** <br>
`pos-abs` --> Make the position absolute <br>
`pos-abs--(lt, rt, center, lb, rb)` --> Define the position of an absolute element <br>
`pos-fix` --> Make the position fixed <br>
`pos-fix--(lt, rt, center, lb, rb)` --> Define the position of a fixed element <br>
`pos-rel` --> Make the position relative <br>
Sample: `<div class="pos-abs pos-abs--lt">` <br>

<hr>

**11. Rows and Columns** <br>
`row--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> XS Devices<br>
`row--sm--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Small Devices <br>
`row--md--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Medium Size Devices<br>
`row--lg--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Large Devices<br>
`grid` <br>
`grid--cols--(auto, oneFourth, oneThird, oneHalf)` <br>
Sample: `<div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>` OR `<div class="grid grid--cols--auto"></div>` <br>

<hr>

**12. Margins and Paddings** <br>
`m(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mt(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mr(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mb(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`ml(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`my(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mx(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`p(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pt(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pr(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pb(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pl(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`py(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`px(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`ml-auto` <br>
`mr-auto` <br>

<hr>

**13. Widths** <br>
`min-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Min width in percentage <br>
`min-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Min width in pixels <br>
`w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Width in percentage <br>
`w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Width in pixels <br>
`max-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Max width in percentage <br>
`max-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Max width in pixels <br>
`w-inherit` --> Width: inherit <br>

<hr>

**14. Mobile Menu Bar** <br>
`menu-mob-icon` --> Mobile Menu Icon <br>
`menu-mob-closed-icon` --> Closing icon <br>
`menu-mob-hr` <br>
`menu-mob-hr-active` <br>
Notice: In order to make any changes in the way of appearing of the mobile menu, you need to change these two classes `hamburger-menu-hr` `hamburger-menu-hr-active`, in the `_mobmenu.scss` file <br>

<hr>

**15. General Classes** <br>
`mouse-hand` --> Pointer Cursor <br>
`z-(0, 10, 100, 1000)` --> Z-index classes <br>
`f-(left, right)` --> Float left or right <br>
`of-(y, x)-(hidden, scroll, auto)` --> Overflow <br>

## Components

**1. Icon** <br>
This component is used in order to add icons to your project, and the props for this component are: <br>
**type**: The type of the icon. One of the following options: <br>
`[search]` <br>
**fill**: Filling color of the icon as a string (It can be a hex color or a color name) <br>
**stroke**: Stroke color of the icon, as a string (It can be a hex color or a color name) <br>
**scale**: Determine the scale/size of the icon. An integer value can be passes as a value to this prop. <br>

**Example** <br>
`<Icon type="search" fill="black" stroke="black" scale={1} />` <br>

<hr>

**2. HamburgerIcon** <br>
This is a hamburgur icon with a nice animation on click to close and open the icon. Available props for this component are: <br>
**type**: The type of the hamburger icon. One of the following options: <br>
`[1, 2, 3, 4, 5, 6]` <br>
**onOpenedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the opened hamburger icon <br>
**onClosedIconClick**: This is a function type prop, that determines what action must happen as soon as a user clicks on the closed hamburger icon <br>

**Example** <br>
`<HamburgerIcon type={1} onOpenedIconClick={() => console.log("Open")} onClosedIconClick={() => console.log("Close")} />`

## License

This project is licensed under the terms of the MIT license.

## How to Contribute

To collaborate on this repository you need to make a request from the owner of this repository (https://github.com/mmmohajer) and then you need to push your changes into a new branch and create pull request.
