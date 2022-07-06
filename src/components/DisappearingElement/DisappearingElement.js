import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from './DisappearingElement.module.scss';

const DisappearingElement = ({ children, isActive, className, isActiveClassName, ...props }) => {
  return (
    <>
      <div className={cx(className, isActive && isActiveClassName)} {...props}>
        {children}
      </div>
    </>
  );
};

DisappearingElement.propTypes = {
  ...defaultPropTypes,
  isActive: PropTypes.bool
};

DisappearingElement.defaultProps = {
  ...defaultProps,
  isActive: true
};

export default DisappearingElement;
