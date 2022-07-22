import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

const SubNavContainer = ({ children, className, isActive, ...props }) => {
  const SubNavContainerElement = useRef();

  useEffect(() => {
    if (isActive) {
      SubNavContainerElement.current.classList.add('iswad_subNavContainer_active');
    } else {
      SubNavContainerElement.current.classList.remove('iswad_subNavContainer_active');
    }
  }, [isActive]);
  return (
    <>
      <div
        ref={(el) => (SubNavContainerElement.current = el)}
        {...props}
        className={cx('pos-abs pos-abs--lb z-10 iswad_subNavContainer', className)}>
        {children}
      </div>
    </>
  );
};

export default SubNavContainer;
