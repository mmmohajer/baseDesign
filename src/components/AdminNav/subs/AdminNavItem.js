import React from 'react';
import cx from 'classnames';

const AdminNavItem = React.forwardRef(({ children, isActive, className, ...props }, ref) => {
  return (
    <>
      <div
        className={cx(className, 'iswad_adminNavItem', isActive && 'iswad_adminNavItem_active')}
        {...props}
        ref={ref}>
        {children}
      </div>
    </>
  );
});

export default AdminNavItem;
