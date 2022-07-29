import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

const MobSubNavContainer = ({ children, className, activeClassName, isActive, ...props }) => {
  const SubNavContainerElement = useRef();

  useEffect(() => {
    if (isActive) {
      SubNavContainerElement.current.classList.add('iswad_mobSubNavContainer_active');
      SubNavContainerElement.current.classList.add(activeClassName);
    } else {
      SubNavContainerElement.current.classList.remove('iswad_mobSubNavContainer_active');
      SubNavContainerElement.current.classList.remove(activeClassName);
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (SubNavContainerElement.current = el)}
        {...props}
        className={cx('flex flex--dir--col iswad_mobSubNavContainer', className)}>
        {children}
      </div>
    </>
  );
};

export default MobSubNavContainer;
