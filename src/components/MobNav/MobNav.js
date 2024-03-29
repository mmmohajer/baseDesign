import React from 'react';
import cx from 'classnames';

const MobNav = React.forwardRef(
  ({ children, isActive, className, activeClassName, ...props }, ref) => {
    return (
      <>
        <div
          {...props}
          className={cx(
            'flex flex--dir--col iswad_mobNav',
            isActive && 'iswad_mobNav_active',
            className,
            isActive && activeClassName
          )}
          ref={ref}>
          {children}
        </div>
      </>
    );
  }
);

export default MobNav;
