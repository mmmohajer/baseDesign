import React, { useState } from "react";
import cx from "classnames";

import TestNavBar from "TestComponents/TestNavBar";
import TestCaraousel from "TestComponents/TestCaraousel";
import TestIcon from "TestComponents/TestIcon";
import TestAlert from "TestComponents/TestAlert";
import TestModal from "TestComponents/TestModal";
import AdminNav from "TestComponents/TestAdminNav";
import TestAdminNav from "TestComponents/TestAdminNav";
import TestDiv from "TestComponents/TestDiv";
import TestCard from "TestComponents/TestCard";
import TestTable from "TestComponents/TestTable";
import TestHeading from "TestComponents/TestHeading";
// import TestPagination from "TestComponents/TestPagination";

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
      {/* <TestAlert />
      <TestModal /> */}
      {/* <TestAdminNav /> */}
      <TestDiv />
      <div className="ml3">
        <TestHeading />
      </div>
      <TestCard />
      <img
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"
        width={30}
      />
      <div className="p1">
        <TestTable />
      </div>
      <div className="height-px-200 w-per-100 bgPrimary"></div>
      {/* <TestPagination /> */}
    </div>
  );
};

export default Home;
