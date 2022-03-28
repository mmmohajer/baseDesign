import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from "./Search.module.scss";

import Icon from "../Icon";

const Search = React.forwardRef(
  ({ iconFillColor, iconStrokeColor, className, ...props }, ref) => {
    return (
      <>
        <div className="pos-rel">
          <input
            className={cx("iswad_search_field", className)}
            type="search"
            {...props}
            ref={ref}
          />
          <Icon
            className={cx("pos-abs pos-abs--lt", "iswad_search_icon")}
            type="search"
            fill={iconFillColor}
            stroke={iconStrokeColor}
            scale={0.75}
          />
        </div>
      </>
    );
  }
);

Search.propTypes = {
  ...defaultPropTypes,
  iconFillColor: PropTypes.string,
  iconStrokeColor: PropTypes.string,
};

Search.defaultProps = {
  ...defaultProps,
  iconFillColor: "black",
  iconStrokeColor: "black",
};

export default Search;
