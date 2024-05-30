import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const TextArea = React.forwardRef(({ className, fullWidth = false, children, ...props }, ref) => {
  return (
    <>
      <textarea className={cx(fullWidth && 'width-per-100', className)} {...props} ref={ref}>
        {children}
      </textarea>
    </>
  );
});

TextArea.propTypes = {
  ...defaultPropTypes,
  fullWidth: PropTypes.bool
};

export default TextArea;
