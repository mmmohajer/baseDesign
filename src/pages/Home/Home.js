import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};

import HamburgerIcon from "Components/HamburgerIcon";

function Home() {
  return (
    <div className="">
      <HamburgerIcon
        cssConfig={cssConfig}
        onOpenedIconClick={() => console.log("Opened")}
        onClosedIconClick={() => console.log("Closed")}
      />
    </div>
  );
}

export default Home;
