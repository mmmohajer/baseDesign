import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

const Image = React.forwardRef(({ children, src, alt, className, ...props }, ref) => {
  return (
    <>
      <img src={src} alt={alt} className={className} {...props} ref={ref} />
    </>
  );
});

Image.propTypes = {
  ...defaultPropTypes,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
