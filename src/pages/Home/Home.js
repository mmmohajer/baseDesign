import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

import HamburgerIcon from "Components/HamburgerIcon";

function Home() {
  const onOpenedIconClick = () => {
    console.log("Icon is open");
  };
  const onClosedIconClick = () => {
    console.log("Icon is closed");
  };
  return (
    <>
      <div className="flex">
        <HamburgerIcon
          onOpenedIconClick={onOpenedIconClick}
          onClosedIconClick={onClosedIconClick}
          type={1}
        />
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default Home;
