import React from 'react';
import cx from 'classnames';

const LimitedSwipableSliderItem = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <div className={cx(className)} {...props} ref={ref}>
        {children}
      </div>
    </>
  );
});

export default LimitedSwipableSliderItem;
