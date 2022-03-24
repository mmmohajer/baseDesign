import React from "react";
import cx from "classnames";

const Image = ({
  children,
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <>
      <img 
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    </>
  );
};

export default Image;
