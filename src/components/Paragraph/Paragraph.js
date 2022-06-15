import React from 'react';

const Paragragh = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <>
      <p className={className} {...props} ref={ref}>
        {children}
      </p>
    </>
  );
});

export default Paragragh;
