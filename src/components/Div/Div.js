import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import { showInCssClass } from 'Utils/utils';

const Div = React.forwardRef(
  (
    {
      children,
      type,
      direction,
      hAlign,
      vAlign,
      textAlign,
      distributedBetween,
      distributedAround,
      showIn,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div
          className={cx(
            type === 'flex' && 'flex',
            direction === 'vertical' && 'flex--dir--col',
            direction === 'vertical' && hAlign === 'center' && 'flex--ai--center',
            direction !== 'vertical' && hAlign === 'center' && 'flex--jc--center',
            direction === 'vertical' && hAlign === 'end' && 'flex--ai--end',
            direction !== 'vertical' && hAlign === 'end' && 'flex--jc--end',
            direction === 'vertical' && vAlign === 'center' && 'flex--jc--center',
            direction !== 'vertical' && vAlign === 'center' && 'flex--ai--center',
            direction === 'vertical' && vAlign === 'end' && 'flex--jc--end',
            direction !== 'vertical' && vAlign === 'end' && 'flex--ai--end',
            distributedBetween && 'flex--jc--between',
            distributedAround && 'flex--jc--around',
            textAlign === 'center' && 'text-center',
            textAlign === 'right' && 'text-rtl',
            showIn && showInCssClass(type, showIn),
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

Div.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.oneOf(['flex', 'block']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  hAlign: PropTypes.oneOf(['start', 'center', 'end']),
  vAlign: PropTypes.oneOf(['start', 'center', 'end']),
  distributedBetween: PropTypes.bool,
  distributedAround: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  showIn: PropTypes.array
};

Div.defaultProps = {
  ...defaultProps,
  type: 'block',
  direction: 'horizontal',
  hAlign: 'start',
  vAlign: 'start',
  distributedBetween: false,
  distributedAround: false,
  textAlign: 'left',
  showIn: ['xs', 'sm', 'md', 'lg']
};

export default Div;
