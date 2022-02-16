import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};


import HamburgerIcon from "Components/HamburgerIcon";
import Icon from "Components/Icon";
import Card from "Components/Card";
import CarouselCard from "Components/SliderCards";
import Employee from "Images/js-Images/Employes/Employee.jpg";

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

const info  = {
    name :"marouane",
    Occupation : "Developer",
    image : <img
        className={cx("pos-abs", "pos-abs--lt", "w-per-100")}
        src={Employee}
    />
};

function Home() {
  return (
    <div className="hi">
      <HamburgerIcon
        cssConfig={cssConfig}
        onOpenedIconClick={() => console.log("Opened")}
        onClosedIconClick={() => console.log("Closed")}
      />
      <div className="flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow">
        {arrayOfIcons.map((icon, idx) => (
          <div className="ml2 mr2" key={idx}>
            <Icon
              type={icon}
              scale={1.2}
              fill="dodgerblue"
              stroke="dodgerblue"
            />
          </div>
        ))}
      </div>
        <Card info={info} type="identity"/>
        <CarouselCard />

    </div>
  );
}

export default Home;
