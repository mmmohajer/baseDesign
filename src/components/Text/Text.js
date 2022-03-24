import React from "react";

const Text = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <span
        className={className}
        {...props}
      >
        {children}
      </span>
    </>
  );
};

export default Text;
