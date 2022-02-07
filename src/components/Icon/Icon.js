import React from "react";
import cx from "classnames";

import styles from "./Icon.module.scss";

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

export default Icon;
