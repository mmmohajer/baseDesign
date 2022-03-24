import React from "react";

const Heading = ({
  children,
  type,
  className,
  ...props
}) => {

  switch(type) {
    case 1:   return <h1 className={className} {...props} > {children} </h1>
    case 2:   return <h2 className={className} {...props} > {children} </h2>
    case 3:   return <h3 className={className} {...props} > {children} </h3>
    case 4:   return <h4 className={className} {...props} > {children} </h4>
    case 5:   return <h5 className={className} {...props} > {children} </h5>
    case 6:   return <h6 className={className} {...props} > {children} </h6>
    default:  return <h1 className={className} {...props} > {children} </h1>
  }
};

export default Heading;