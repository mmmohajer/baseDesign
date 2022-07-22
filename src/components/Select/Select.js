import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Select = React.forwardRef(
  ({ options, className, optionClassName, fullWidth, children, ...props }, ref) => {
    return (
      <>
        <select className={cx(fullWidth && 'w-per-100', className)} {...props} ref={ref}>
          {options?.map((item, idx) => (
            <option className={optionClassName} key={idx} value={item?.value}>
              {item?.shownText}
            </option>
          ))}
        </select>
      </>
    );
  }
);

Select.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool,
  options: PropTypes.array
};

Select.defaultProps = {
  ...defaultProps,
  fullWidth: false
};

export default Select;
