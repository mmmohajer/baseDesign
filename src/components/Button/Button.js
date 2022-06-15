import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Button = React.forwardRef(({ className, fullWidth, children, ...props }, ref) => {
  return (
    <>
      <button
        className={cx('mouse-hand', fullWidth && 'w-per-100', className)}
        {...props}
        ref={ref}>
        {children}
      </button>
    </>
  );
});

Button.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool
};

Button.defaultProps = {
  ...defaultProps,
  fullWidth: false
};

export default Button;
