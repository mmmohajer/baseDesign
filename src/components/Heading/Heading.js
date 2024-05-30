import React from 'react';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Heading = React.forwardRef(({ children, type = 1, className, ...props }, ref) => {
  switch (type) {
    case 1:
      return (
        <h1 className={className} {...props} ref={ref}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={className} {...props} ref={ref}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={className} {...props} ref={ref}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={className} {...props} ref={ref}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={className} {...props} ref={ref}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={className} {...props} ref={ref}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={className} {...props} ref={ref}>
          {children}
        </h1>
      );
  }
});

Heading.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.number
};

export default Heading;
