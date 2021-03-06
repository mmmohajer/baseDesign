import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { cssClassMaps, cssConfigShape, cssDefaultConfig } from './utils';

import { css } from './styles';

function HamburgerIcon({ onClick, onOpenedIconClick, onClosedIconClick, cssConfig, iconToggler }) {
  const appliedCssConfig = { ...cssDefaultConfig, ...cssConfig };
  const [isIconOpened, setIsIconOpened] = useState(true);

  useEffect(() => {
    if (iconToggler) {
      const menuIcon =
        document.querySelector(`.${cssClassMaps['hamburgerMenuIcon']}`) ||
        document.querySelector(`.${cssClassMaps['hamburgerMenuClosedIcon']}`);
      menuIcon.classList.toggle(cssClassMaps['hamburgerMenuIcon']);
      menuIcon.classList.toggle(cssClassMaps['hamburgerMenuClosedIcon']);
    }
  }, [iconToggler]);

  const menuIconToggleHandler = () => {
    const menuIcon =
      document.querySelector(`.${cssClassMaps['hamburgerMenuIcon']}`) ||
      document.querySelector(`.${cssClassMaps['hamburgerMenuClosedIcon']}`);
    menuIcon.classList.toggle(cssClassMaps['hamburgerMenuIcon']);
    menuIcon.classList.toggle(cssClassMaps['hamburgerMenuClosedIcon']);
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
      <div className={cx(cssClassMaps['hamburgerMenuContainer'])} onClick={menuIconToggleHandler}>
        <div className={cx(cssClassMaps['hamburgerMenuIcon'])}></div>
      </div>

      <style>{css(cssClassMaps, appliedCssConfig)}</style>
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
  setIconToggler: PropTypes.func
};

HamburgerIcon.defaultProps = {
  ...defaultProps,
  cssConfig: cssDefaultConfig
};

export default HamburgerIcon;
