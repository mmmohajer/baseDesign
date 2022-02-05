import React from "react";
import cx from "classnames";

import Header from "Components/Header";
import styles from "./App.module.scss";

function App() {
  const list = ["Home", "About", "Services"];
  return (
    <>
      <div>
        <Header NavList={list} />
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
