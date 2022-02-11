import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles1 from "./style1.module.scss";
import styles2 from "./style2.module.scss";
import styles3 from "./style3.module.scss";
import styles4 from "./style4.module.scss";
import styles5 from "./style5.module.scss";
import styles6 from "./style6.module.scss";

import allowedProps from "Utils/allowedProps";
import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

function HamburgerIcon({
  onOpenedIconClick,
  onClosedIconClick,
  type,
  ...props
}) {
  const otherProps = allowedProps(props);
  let styles = styles1;
  switch (type) {
    case 1:
      styles = styles1;
      break;
    case 2:
      styles = styles2;
      break;
    case 3:
      styles = styles3;
      break;
    case 4:
      styles = styles4;
      break;
    case 5:
      styles = styles5;
      break;
    case 6:
      styles = styles6;
      break;
    default:
      styles = styles1;
  }
  const [isIconOpened, setIsIconOpened] = useState(true);
  const menuIconToggleHandler = () => {
    const menuIcon =
      document.querySelector(`.${styles.hamburgerMenuIcon}`) ||
      document.querySelector(`.${styles.hamburgerMenuClosedIcon}`);
    menuIcon.classList.toggle(styles.hamburgerMenuIcon);
    menuIcon.classList.toggle(styles.hamburgerMenuClosedIcon);
    if (isIconOpened && onOpenedIconClick) {
      onOpenedIconClick();
    }
    if (!isIconOpened && onClosedIconClick) {
      onClosedIconClick();
    }
    setIsIconOpened(!isIconOpened);
  };

  return (
    <div
      className={cx(styles.hamburgerMenuContainer)}
      onClick={menuIconToggleHandler}
    >
      <div className={cx(styles.hamburgerMenuIcon)}></div>
    </div>
  );
}

HamburgerIcon.propTypes = {
  ...defaultPropTypes,
  onOpenedIconClick: PropTypes.func,
  onClosedIconClick: PropTypes.func,
  type: PropTypes.number,
};

HamburgerIcon.defaultProps = {
  ...defaultProps,
  type: 1,
};

export default HamburgerIcon;
