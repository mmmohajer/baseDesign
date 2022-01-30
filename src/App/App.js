import React from "react";

import cx from "classnames";

import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <h1 className={cx(styles.test)}>
        Please test all the components in the App component!
      </h1>
    </div>
  );
}

export default App;
