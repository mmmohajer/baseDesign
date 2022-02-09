import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

import Header from "Components/Header";
import Icon from "Components/Icon";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="bgThird w-per-100 height-px-200 bgInfo"></div>
        <div>
          <Icon type="search" fill="red" stroke="blue" scale={1.5} />
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default Home;
