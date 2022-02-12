import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

import HamburgerIcon from "Components/HamburgerIcon";
// import { HamburgerIcon, Icon } from "Root/lib/lib.js";
import "Root/lib/style.js";

function Home() {
  const onOpenedIconClick = () => {
    console.log("Icon is open");
  };
  const onClosedIconClick = () => {
    console.log("Icon is closed");
  };
  return (
    <div className="bgRed">
      <HamburgerIcon />
    </div>
  );
}

export default Home;
