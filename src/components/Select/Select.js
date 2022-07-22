import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Select = React.forwardRef(({ className, fullWidth, children, ...props }, ref) => {
  return (
    <>
      <select className={cx(fullWidth && 'w-per-100', className)} {...props} ref={ref}>
        {children}
      </select>
    </>
  );
});

Select.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool
};

Select.defaultProps = {
  ...defaultProps,
  fullWidth: false
};

export default Select;
