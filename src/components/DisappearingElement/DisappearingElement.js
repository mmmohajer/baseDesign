import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const DisappearingElement = ({
  children,
  isActive = true,
  className,
  activeClassName,
  ...props
}) => {
  return (
    <>
      <div className={cx(className, isActive && activeClassName)} {...props}>
        {children}
      </div>
    </>
  );
};

DisappearingElement.propTypes = {
  ...defaultPropTypes,
  isActive: PropTypes.bool
};

export default DisappearingElement;
