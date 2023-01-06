import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { showInCssClass } from 'Utils/utils';

const arrayOfColSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Column = React.forwardRef(
  ({ xs, sm, md, lg, showIn, className, children, ...props }, ref) => {
    const getCssClass = (num, size) => {
      if (size === 'xs') {
        return `row--${num}`;
      } else if (size === 'sm') {
        return `row--sm--${num}`;
      } else if (size === 'md') {
        return `row--md--${num}`;
      } else if (size === 'lg') {
        return `row--lg--${num}`;
      }
    };

    return (
      <>
        <div
          className={cx(
            'row',
            getCssClass(xs, 'xs'),
            getCssClass(sm, 'sm'),
            getCssClass(md, 'md'),
            getCssClass(lg, 'lg'),
            showIn && showInCssClass('flex', showIn),
            className
          )}
          {...props}
          ref={ref}>
          {children}
        </div>
      </>
    );
  }
);

Column.propTypes = {
  ...defaultPropTypes,
  xs: PropTypes.oneOf(arrayOfColSize),
  sm: PropTypes.oneOf(arrayOfColSize),
  md: PropTypes.oneOf(arrayOfColSize),
  lg: PropTypes.oneOf(arrayOfColSize),
  showIn: PropTypes.array
};

Column.defaultProps = {
  ...defaultProps,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  showIn: ['xs', 'sm', 'md', 'lg']
};

export default Column;
