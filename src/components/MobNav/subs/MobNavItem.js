import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

const MobNavItem = ({ children, className, activeClassName, isActive, ...props }) => {
  const navItemElement = useRef();

  useEffect(() => {
    if (isActive) {
      navItemElement.current.classList.add('iswad_mobNavItem_active');
      navItemElement.current.classList.add(activeClassName);
    } else {
      navItemElement.current.classList.remove('iswad_mobNavItem_active');
      navItemElement.current.classList.remove(activeClassName);
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (navItemElement.current = el)}
        {...props}
        className={cx('flex flex--dir--col iswad_mobNavItem', className)}>
        {children}
      </div>
    </>
  );
};

export default MobNavItem;
