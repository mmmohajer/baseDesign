import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};

import HamburgerIcon from "Components/HamburgerIcon";
import Icon from "Components/Icon/Icon"
import Card from "Components/Card/Card"

function Home() {
  return (
    <div className="">
      {/*<HamburgerIcon*/}
      {/*  cssConfig={cssConfig}*/}
      {/*  onOpenedIconClick={() => console.log("Opened")}*/}
      {/*  onClosedIconClick={() => console.log("Closed")}*/}
      {/*/>*/}
        <Card />
    </div>
  );
}

export default Home;
