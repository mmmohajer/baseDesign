This repository is designed in order to develop basic components and create useful sass styles to be used in other react projects.

<hr>

To initiate the project on your machine, you need to take the following steps:

1. Run `git clone https://github.com/mmmohajer/baseDesign.git`
2. Run `npm install`
3. Run `npm run dev`

<hr>

To collaborate on this repository you need to make a request from the owner of this repository (https://github.com/mmmohajer) and then you need to push your changes into a new branch and create pull request.

<hr>

Some important instructions:

1. In order to develop, a new componet, you must create it in the components folder, and then test it in App.js file.
2. For styling components, we are using sass and modular css. So, for general styling, css codes which are common between several components, you need to add your classes and css codes into the styles folder inside the assets folder. However, for css codes specifc to one component, you need to add it into the COMPONENT_NAME.module.scss. We also use cx function for combining multiple classes. (Please, have a look at the sample code written in App.js file.)

<hr>

Our predefines css classes:

<hr>

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

**4. Colors** <br>
`text(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define the text color of an element <br>
`bg(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define background color of an element<br>
Sample: `<div class="text-third bg-green"></div>`

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

**6. Fonts** <br>
`fs-px-(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32)` --> Font size in pixels <br>
`fs-r-(1, 2, 3, 4, 5, 6, 7, 8)` --> Font size in half rem <br>
`fw-(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)` --> Font weight <br>
`f-b` --> Bold Text <br>
`f-i` --> Italic text <br>
Sample: `<p class="fs-r-2 fw-600 f-i">Something</p>` <br>

**7. Heights and Boxes**
`min-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Min heights in px <br>
`min-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Min heights in vh <br>
`height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Heights in px <br>
`height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
`max-height-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Max heights in px <br>
`max-height-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` --> Max heights in vh <br>
Sample: <div class="box-vh-half"> <br>

**8. Hover** <br>
`hover-text-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Color text when hovering on an element <br>
`hover-bg-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Background color when hovering on an element <br>
Sample: `<a class="hover-text-third hover-bg-primary"></a>` <br>

**9. Opacity** <br>
`op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Opacity in percentage <br>
Sample: <img class="op-60"> <br>

**10. Position** <br>
`pos-abs` --> Make the position absolute <br>
`pos-abs--(lt, rt, center, lb, rb)` --> Define the position of an absolute element <br>
`pos-fix` --> Make the position fixed <br>
`pos-fix--(lt, rt, center, lb, rb)` --> Define the position of a fixed element <br>
`pos-rel` --> Make the position relative <br>
Sample: `<div class="pos-abs pos-abs--lt">` <br>

**11. Rows and Columns** <br>
`row--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> XS Devices<br>
`row--sm--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Small Devices <br>
`row--md--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Medium Size Devices<br>
`row--lg--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Large Devices<br>
`grid` <br>
`grid--cols--(auto, oneFourth, oneThird, oneHalf)` <br>
Sample: `<div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>` OR <div class="grid grid--cols--auto"></div> <br>

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

**13. Widths** <br>
`min-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Min width in percentage <br>
`min-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Min width in pixels <br>
`w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Width in percentage <br>
`w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Width in pixels <br>
`max-w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Max width in percentage <br>
`max-w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Max width in pixels <br>
`w-inherit` --> Width: inherit <br>

**14. Mobile Menu Bar** <br>
`menu-mob-icon` --> Mobile Menu Icon <br>
`menu-mob-closed-icon` --> Closing icon <br>
`menu-mob-hr` <br>
`menu-mob-hr-active` <br>
Notice: In order to make any changes in the way of appearing of the mobile menu, you need to change these two classes `hamburger-menu-hr` `hamburger-menu-hr-active`, in the `_mobmenu.scss` file <br>

**15. General Classes** <br>
`mouse-hand` --> Pointer Cursor <br>
`z-(0, 10, 100, 1000)` --> Z-index classes <br>
`f-(left, right)` --> Float left or right <br>
`of-(y, x)-(hidden, scroll, auto)` --> Overflow <br>
