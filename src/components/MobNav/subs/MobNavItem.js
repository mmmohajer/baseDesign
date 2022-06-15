import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

import '../MobNav.scss';

const MobNavItem = ({ children, className, isActive, ...props }) => {
  const navItemElement = useRef();

  useEffect(() => {
    if (isActive) {
      navItemElement.current.classList.add('iswad_mobNavItem_active');
    } else {
      navItemElement.current.classList.remove('iswad_mobNavItem_active');
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (navItemElement.current = el)}
        {...props}
        className={cx('flex flex--dir--col flex--ai--center iswad_mobNavItem', className)}>
        {children}
      </div>
    </>
  );
};

export default MobNavItem;
