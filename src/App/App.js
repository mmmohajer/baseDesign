import React from "react";
import cx from "classnames";

import styles from "./App.module.scss";

import Header from "Components/Header";
import Icon from "Components/Icon";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="bgThird w-per-100 height-px-200 bgThird"></div>
        <div>
          <Icon />
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
