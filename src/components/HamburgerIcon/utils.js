import PropTypes from 'prop-types';

import { randomStr } from 'Utils/utils';
import { CSS_CLASS_RANDOM_LENGTH } from 'Constants/vars';

export const cssClassMaps = {
  hamburgerMenuContainer: `hamburgerMenuContainer-${randomStr(CSS_CLASS_RANDOM_LENGTH)}`,
  hamburgerMenuIcon: `hamburgerMenuIcon-${randomStr(CSS_CLASS_RANDOM_LENGTH)}`,
  hamburgerMenuClosedIcon: `hamburgerMenuClosedIcon-${randomStr(CSS_CLASS_RANDOM_LENGTH)}`
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
  hamburgerMenuTransitionDuration: PropTypes.number,
  hamburgerMenuContainerXPadding: PropTypes.number,
  hamburgerMenuTransform: PropTypes.oneOf([
    'scale(-1, 1)',
    'scale(1, 1)',
    'scale(1, -1)',
    'scale(-1, -1)'
  ])
};

export const cssDefaultConfig = {
  hamburgerMenuContainerBgColor: 'transparent',
  hamburgerMenuContainerBorder: 'none',
  hamburgerMenuContainerBorderRadius: 10,
  hamburgerMenuTopWidth: 15,
  hamburgerMenuMiddleWidth: 25,
  hamburgerMenuBottomWidth: 35,
  hamburgerMenuHeight: 4,
  hamburgerMenuBgColor: 'black',
  hamburgerMenuSpace: 10,
  hamburgerMenuBorderRadius: 5,
  hamburgerMenuClosedIconWidth: 25,
  hamburgerMenuTransitionDuration: 0.3,
  hamburgerMenuContainerXPadding: 10,
  hamburgerMenuTransform: 'scale(-1, 1)'
};
