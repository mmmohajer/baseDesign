import React from "react";
import cx from "classnames";

import Nav from "Components/Nav";
import styles from "./App.module.scss";

function App() {
  const list = ["Home", "About", "Services"];
  return (
    <>
      <Nav NavList={list} />
    </>
  );
}

export default App;
