export const css = (cssClassMaps, cssConfig) => {
  const containerWidth =
    Math.max(
      cssConfig["hamburgerMenuTopWidth"],
      cssConfig["hamburgerMenuMiddleWidth"],
      cssConfig["hamburgerMenuBottomWidth"],
      cssConfig["hamburgerMenuClosedIconWidth"]
    ) + cssConfig["hamburgerMenuContainerXPadding"];
  const containerHeight =
    cssConfig["hamburgerMenuHeight"] * 3 +
    cssConfig["hamburgerMenuSpace"] * 2 +
    10;
  const toBeExtended = `
        height: ${cssConfig["hamburgerMenuHeight"]}px;
        background-color: ${cssConfig["hamburgerMenuBgColor"]};
        display: block;
        border-radius: ${cssConfig["hamburgerMenuBorderRadius"]}px;
        transition: all ease-in ${cssConfig["hamburgerMenuTransitionDuration"]}s;
    `;

  return `
    .${cssClassMaps["hamburgerMenuContainer"]} {
        display: flex;
        width: ${containerWidth}px;
        justify-content: center;
        align-items: center;
        height: ${containerHeight}px;
        cursor: pointer;
        background-color: ${cssConfig["hamburgerMenuContainerBgColor"]};
        border: ${cssConfig["hamburgerMenuContainerBorder"]};
        border-radius: ${cssConfig["hamburgerMenuContainerBorderRadius"]}px;
    }

    .${cssClassMaps["hamburgerMenuIcon"]} {
        ${toBeExtended}
        position: relative;
        width: ${cssConfig["hamburgerMenuMiddleWidth"]}px;
        transform: ${cssConfig["hamburgerMenuTransform"]};
      }
      
      .${cssClassMaps["hamburgerMenuIcon"]}::before {
        content: "";
        ${toBeExtended}
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-${cssConfig["hamburgerMenuSpace"]}px);
        width: ${cssConfig["hamburgerMenuTopWidth"]}px;
      }
      
      .${cssClassMaps["hamburgerMenuIcon"]}::after {
        content: "";
        ${toBeExtended}
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(${cssConfig["hamburgerMenuSpace"]}px);
        width: ${cssConfig["hamburgerMenuBottomWidth"]}px;
      }
      
      .${cssClassMaps["hamburgerMenuClosedIcon"]} {
        ${toBeExtended}
        position: relative;
        transform: scaleX(1);
        opacity: 1;
        background-color: transparent;
        width: ${cssConfig["hamburgerMenuClosedIconWidth"]}px;
      }
      
      .${cssClassMaps["hamburgerMenuClosedIcon"]}::before {
        content: "";
        ${toBeExtended}
        position: absolute;
        transform: rotate(-45deg) scaleX(1.25);
        opacity: 1;
        width: ${cssConfig["hamburgerMenuClosedIconWidth"]}px;
      }
      
      .${cssClassMaps["hamburgerMenuClosedIcon"]}::after {
        content: "";
        ${toBeExtended}
        position: absolute;
        transform: rotate(45deg) scaleX(1.25);
        opacity: 1;
        width: ${cssConfig["hamburgerMenuClosedIconWidth"]}px;
      }     
    `;
};
