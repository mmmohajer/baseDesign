import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};

import HamburgerIcon from "Components/HamburgerIcon";
import CarouselCard from "Components/SliderCards";
import Icon from "Components/Icon/Icon"

function Home() {
  return (
    <div className="">
      {/*<HamburgerIcon*/}
      {/*  cssConfig={cssConfig}*/}
      {/*  onOpenedIconClick={() => console.log("Opened")}*/}
      {/*  onClosedIconClick={() => console.log("Closed")}*/}
      {/*/>*/}
        <CarouselCard />
    </div>
  );
}

export default Home;
