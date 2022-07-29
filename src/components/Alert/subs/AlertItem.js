import React from 'react';
import cx from 'classnames';

const AlertItem = React.forwardRef(
  ({ children, isActive, className, activeClassName, ...props }, ref) => {
    return (
      <>
        <div
          className={cx(
            'iswad_alert_item',
            isActive && 'iswad_alert_item_active',
            className,
            isActive && activeClassName
          )}
          {...props}
          ref={ref}>
          {children}
        </div>
      </>
    );
  }
);

export default AlertItem;
