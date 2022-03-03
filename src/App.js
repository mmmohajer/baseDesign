import React, { useState } from "react";
import cx from "classnames";

import TestNavBar from "TestComponents/TestNavBar";
import TestCaraousel from "TestComponents/TestCaraousel";
import TestIcon from "TestComponents/TestIcon";
import TestAlert from "TestComponents/TestAlert";

const Home = () => {
  return (
    <div className="container">
      <TestNavBar />
      <div className="flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow">
        <TestIcon />
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <TestCaraousel />
      </div>
      <TestAlert />
    </div>
  );
};

export default Home;
