import React from 'react';
import cx from 'classnames';

const MobSubNavItem = ({ children, className, ...props }) => {
  return (
    <>
      <div {...props} className={cx('iswad_mobSubNavItem', className, isActive && activeClassName)}>
        {children}
      </div>
    </>
  );
};

export default MobSubNavItem;
