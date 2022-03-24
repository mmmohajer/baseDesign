import React from "react";

const Paragragh = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <p
        className={className}
        {...props}
      >
        {children}
      </p>
    </>
  );
};

export default Paragragh;