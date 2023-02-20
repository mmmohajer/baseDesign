import React from 'react';
import cx from 'classnames';

const SubNavItem = ({ isActive, children, className, activeClassName, ...props }) => {
  return (
    <>
      <div {...props} className={cx('iswad_subNavItem', className, isActive && activeClassName)}>
        {children}
      </div>
    </>
  );
};

export default SubNavItem;
