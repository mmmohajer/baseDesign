import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from "./Row.module.scss";

import { showInCssClass } from "Utils/utils";

const Row = ({ showIn, className, children, ...props }) => {
  return (
    <>
      <div
        className={cx(
          "row",
          showIn && showInCssClass("flex", showIn),
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

Row.propTypes = {
  ...defaultPropTypes,
  showIn: PropTypes.array,
};

Row.defaultProps = {
  ...defaultProps,
  showIn: ["xs", "sm", "md", "lg"],
};

export default Row;
