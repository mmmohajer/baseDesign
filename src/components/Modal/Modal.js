import React from 'react';
import cx from 'classnames';

const Modal = ({ children, fullHeightclassName, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          'pos-fix pos-fix--lt width-per-100 height-vh-full',
          fullHeightclassName
        )}></div>
      <div className={cx('pos-fix pos-fix--center', className)}>{children}</div>
    </>
  );
};

export default Modal;
