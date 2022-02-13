import PropTypes from "prop-types";

import { randomStr } from "Utils/utils";

export const cssClassMaps = {
  hamburgerMenuContainer: `hamburgerMenuContainer-${randomStr(5)}`,
  hamburgerMenuIcon: `hamburgerMenuIcon-${randomStr(5)}`,
  hamburgerMenuClosedIcon: `hamburgerMenuClosedIcon-${randomStr(5)}`,
};

export const cssConfigShape = {
  hamburgerMenuContainerWidth: PropTypes.number,
  hamburgerMenuContainerHeight: PropTypes.number,
  hamburgerMenuContainerBgColor: PropTypes.string,
  hamburgerMenuContainerBorder: PropTypes.string,
  hamburgerMenuContainerBorderRadius: PropTypes.number,
  hamburgerMenuContainerPadding: PropTypes.number,
  hamburgerMenuTopWidth: PropTypes.number,
  hamburgerMenuMiddleWidth: PropTypes.number,
  hamburgerMenuBottomWidth: PropTypes.number,
  hamburgerMenuHeight: PropTypes.number,
  hamburgerMenuBgColor: PropTypes.string,
  hamburgerMenuSpace: PropTypes.number,
  hamburgerMenuBorderRadius: PropTypes.number,
  hamburgerMenuClosedIconWidth: PropTypes.number,
  hamburgerMenuTransform: PropTypes.oneOf([
    "scale(-1, 1)",
    "scale(1, 1)",
    "scale(1, -1)",
    "scale(-1, -1)",
  ]),
};

export const cssDefaultConfig = {
  hamburgerMenuContainerBgColor: "transparent",
  hamburgerMenuContainerBorder: "none",
  hamburgerMenuContainerBorderRadius: 10,
  hamburgerMenuTopWidth: 15,
  hamburgerMenuMiddleWidth: 25,
  hamburgerMenuBottomWidth: 35,
  hamburgerMenuHeight: 4,
  hamburgerMenuBgColor: "black",
  hamburgerMenuSpace: 10,
  hamburgerMenuBorderRadius: 5,
  hamburgerMenuClosedIconWidth: 25,
  hamburgerMenuTransform: "scale(-1, 1)",
};
