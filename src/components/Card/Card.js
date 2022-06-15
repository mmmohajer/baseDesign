import React from 'react';
import cx from 'classnames';

const Card = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <div className={cx('flex', 'flex--dir--col', className)} {...props} ref={ref}>
        {children}
      </div>
    </>
  );
});

export default Card;
