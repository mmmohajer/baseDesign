import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from './ActivableElement.module.scss';

const ActivableElement = ({ children, isActive, className, activeClassName, ...props }) => {
  return (
    <>
      <div className={cx(className, isActive && activeClassName)} {...props}>
        {children}
      </div>
    </>
  );
};

ActivableElement.propTypes = {
  ...defaultPropTypes,
  isActive: PropTypes.bool
};

ActivableElement.defaultProps = {
  ...defaultProps,
  isActive: true
};

export default ActivableElement;
