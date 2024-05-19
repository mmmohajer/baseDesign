import React from 'react';
import cx from 'classnames';

const NavBar = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <div {...props} className={cx('width-per-100 flex', className)} ref={ref}>
        {children}
      </div>
    </>
  );
});

export default NavBar;
