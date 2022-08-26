import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { randomStr } from 'Utils/utils';

import { cssClassMaps, cssConfigShape, cssDefaultConfig } from './utils';

import { css } from './styles';

function HamburgerIcon({
  containerUID,
  onClick,
  onOpenedIconClick,
  onClosedIconClick,
  cssConfig,
  iconToggler,
  setIconToggler,
  openIcon,
  closeIcon
}) {
  const appliedCssConfig = { ...cssDefaultConfig, ...cssConfig };
  const [isIconOpened, setIsIconOpened] = useState(true);

  useEffect(() => {
    if (iconToggler) {
      const menuIcon =
        document.querySelector(`.${containerUID}-hamburgerMenuIcon`) ||
        document.querySelector(`.${containerUID}-hamburgerMenuClosedIcon`);
      menuIcon.classList.toggle(`${containerUID}-hamburgerMenuIcon`);
      menuIcon.classList.toggle(`${containerUID}-hamburgerMenuClosedIcon`);
    }
    setTimeout(() => {
      setIconToggler(false);
    }, 500);
  }, [iconToggler]);

  useEffect(() => {
    if (openIcon) {
      const menuIcon =
        document.querySelector(`.${containerUID}-hamburgerMenuIcon`) ||
        document.querySelector(`.${containerUID}-hamburgerMenuClosedIcon`);
      menuIcon.classList.add(`${containerUID}-hamburgerMenuIcon`);
      menuIcon.classList.remove(`${containerUID}-hamburgerMenuClosedIcon`);
    }
  }, [openIcon]);

  useEffect(() => {
    if (closeIcon) {
      const menuIcon =
        document.querySelector(`.${containerUID}-hamburgerMenuIcon`) ||
        document.querySelector(`.${containerUID}-hamburgerMenuClosedIcon`);
      menuIcon.classList.remove(`${containerUID}-hamburgerMenuIcon`);
      menuIcon.classList.add(`${containerUID}-hamburgerMenuClosedIcon`);
    }
  }, [closeIcon]);

  const menuIconToggleHandler = () => {
    const menuIcon =
      document.querySelector(`.${containerUID}-hamburgerMenuIcon`) ||
      document.querySelector(`.${containerUID}-hamburgerMenuClosedIcon`);
    menuIcon.classList.toggle(`${containerUID}-hamburgerMenuIcon`);
    menuIcon.classList.toggle(`${containerUID}-hamburgerMenuClosedIcon`);
    if (isIconOpened && onOpenedIconClick) {
      onOpenedIconClick();
    }
    if (!isIconOpened && onClosedIconClick) {
      onClosedIconClick();
    }
    if (!onOpenedIconClick && !onClosedIconClick && onClick) {
      onClick();
    }
    setIsIconOpened(!isIconOpened);
  };
  return (
    <>
      <div className={cx(`${containerUID}-hamburgerMenuContainer`)} onClick={menuIconToggleHandler}>
        <div className={cx(`${containerUID}-hamburgerMenuIcon`)}></div>
      </div>

      <style>{css(appliedCssConfig, containerUID)}</style>
    </>
  );
}

HamburgerIcon.propTypes = {
  ...defaultPropTypes,
  onClick: PropTypes.func,
  onOpenedIconClick: PropTypes.func,
  onClosedIconClick: PropTypes.func,
  cssConfig: PropTypes.shape(cssConfigShape),
  iconToggler: PropTypes.bool,
  setIconToggler: PropTypes.func,
  containerUID: PropTypes.string,
  openIcon: PropTypes.bool,
  closeIcon: PropTypes.bool
};

HamburgerIcon.defaultProps = {
  ...defaultProps,
  cssConfig: cssDefaultConfig,
  containerUID: randomStr(),
  openIcon: false,
  closeIcon: false
};

export default HamburgerIcon;
