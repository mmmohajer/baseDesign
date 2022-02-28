import React from "react";

import Icon from "Components/Icon";

const arrayOfIcons = [
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
];

const TestIcon = () => {
  return (
    <>
      {arrayOfIcons.map((icon, idx) => (
        <div className="ml2 mr2" key={idx}>
          <Icon type={icon} scale={1.2} fill="dodgerblue" stroke="dodgerblue" />
        </div>
      ))}
    </>
  );
};

export default TestIcon;
