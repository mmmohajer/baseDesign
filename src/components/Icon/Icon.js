import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Icon.module.scss";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Search from "Images/js-images/icons/svg/search.svg";

function Icon({ type, fill, stroke, scale }) {
  const iconTypes = {
    search: (
      <Search
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
      />
    ),
  };
  return <>{iconTypes[type]}</>;
}

Icon.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.oneOf(["search"]),
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

Icon.defaultProps = {
  ...defaultProps,
  type: "search",
  fill: "black",
  stroke: "black",
  scale: 1,
};

export default Icon;
