import React from 'react';
import cx from 'classnames';

const Modal = ({ children, fullHeightclassName, className, ...props }) => {
  return (
    <>
      <div
        className={cx(
          'pos-fix pos-fix--lt w-per-100 height-vh-full op-50 bgFaded z-10',
          fullHeightclassName
        )}></div>
      <div className={cx('pos-fix pos-fix--center z-100', className)}>{children}</div>
    </>
  );
};

export default Modal;
