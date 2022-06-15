import React from 'react';
import cx from 'classnames';

const Alert = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <div ref={ref} className={cx('iswad_alert_container', className)} {...props}>
        {children}
      </div>
    </>
  );
});

export default Alert;
