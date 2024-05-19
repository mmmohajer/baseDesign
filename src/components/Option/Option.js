import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Option = React.forwardRef(({ className, fullWidth, children, ...props }, ref) => {
  return (
    <>
      <option className={cx(fullWidth && 'width-per-100', className)} {...props} ref={ref}>
        {children}
      </option>
    </>
  );
});

Option.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool
};

Option.defaultProps = {
  ...defaultProps,
  fullWidth: false
};

export default Option;
