import React from 'react';

const Text = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <span className={className} {...props} ref={ref}>
        {children}
      </span>
    </>
  );
});

export default Text;
