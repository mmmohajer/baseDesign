import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./Icon.module.scss";

import allowedProps from "Utils/allowedProps";
import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import Search from "Images/js-images/icons/svg/search.svg";
import Up from "Images/js-images/icons/svg/up.svg";
import Down from "Images/js-images/icons/svg/down.svg";
import Left from "Images/js-images/icons/svg/left.svg";
import Right from "Images/js-images/icons/svg/right.svg";
import Dash from "Images/js-images/icons/svg/dash.svg";
import FImage from "Images/js-images/icons/svg/fimage.svg";
import Image from "Images/js-images/icons/svg/image.svg";
import FMic from "Images/js-images/icons/svg/fmic.svg";
import Mic from "Images/js-images/icons/svg/mic.svg";
import Notification from "Images/js-images/icons/svg/notification.svg";
import FNotification from "Images/js-images/icons/svg/fnotification.svg";
import Setting from "Images/js-images/icons/svg/setting.svg";
import FSetting from "Images/js-images/icons/svg/fsetting.svg";
import X from "Images/js-images/icons/svg/x.svg";
import Share from "Images/js-images/icons/svg/share.svg";
import FShare from "Images/js-images/icons/svg/fshare.svg";
import Video from "Images/js-images/icons/svg/video.svg";
import FVideo from "Images/js-images/icons/svg/fvideo.svg";
import Plus from "Images/js-images/icons/svg/plus.svg";

function Icon({ type, fill, stroke, scale, ...props }) {
  const otherProps = allowedProps(props);
  const iconTypes = {
    search: (
      <Search
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    up: (
      <Up
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    down: (
      <Down
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    left: (
      <Left
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    right: (
      <Right
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    dash: (
      <Dash
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    image: (
      <Image
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fimage: (
      <FImage
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    mic: (
      <Mic
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fmic: (
      <FMic
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    x: (
      <X
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    setting: (
      <Setting
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fsetting: (
      <FSetting
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    notification: (
      <Notification
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fnotification: (
      <FNotification
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    plus: (
      <Plus
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    video: (
      <Video
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fvideo: (
      <FVideo
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    share: (
      <Share
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
    fshare: (
      <FShare
        fill={fill}
        stroke={stroke}
        style={{ transform: `scale(${scale})` }}
        {...otherProps}
      />
    ),
  };
  return <>{iconTypes[type]}</>;
}

Icon.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.oneOf([
    "search",
    "up",
    "down",
    "left",
    "right",
    "dash",
    "image",
    "fimage",
    "mic",
    "fmic",
    "notification",
    "fnotification",
    "setting",
    "fsetting",
    "x",
    "video",
    "fvideo",
    "share",
    "fshare",
    "plus",
  ]),
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
