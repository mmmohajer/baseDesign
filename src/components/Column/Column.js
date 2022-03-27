import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from "./Column.module.scss";

const arrayOfColSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Column = ({ xs, sm, md, lg, className, children, ...props }) => {
  const getCssClass = (num, size) => {
    if (size === "xs") {
      return `row--${num}`;
    } else if (size === "sm") {
      return `row--sm--${num}`;
    } else if (size === "md") {
      return `row--md--${num}`;
    } else if (size === "lg") {
      return `row--lg--${num}`;
    }
  };

  return (
    <>
      <div
        className={cx(
          "row",
          getCssClass(xs, "xs"),
          getCssClass(sm, "sm"),
          getCssClass(md, "md"),
          getCssClass(lg, "lg"),
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

Column.propTypes = {
  ...defaultPropTypes,
  xs: PropTypes.oneOf(arrayOfColSize),
  sm: PropTypes.oneOf(arrayOfColSize),
  md: PropTypes.oneOf(arrayOfColSize),
  lg: PropTypes.oneOf(arrayOfColSize),
};

Column.defaultProps = {
  ...defaultProps,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
};

export default Column;
