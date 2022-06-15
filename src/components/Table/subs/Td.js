import React from 'react';
import cx from 'classnames';

const Td = ({ children, className, ...props }) => {
  return (
    <>
      <div className={cx('iswad_td', className)} {...props}>
        {children}
      </div>
    </>
  );
};

export default Td;
