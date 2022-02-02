import React from "react";
import Nav from "../components/Nav";

import cx from "classnames";

import styles from "./App.module.scss";

function App() {
    const list = ["Home", "About", "Services"];
  return (
    <React.Fragment>
      <Nav NavList ={list} />
    </React.Fragment>
  );
}

export default App;
