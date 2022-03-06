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
import TestPagination from "TestComponents/TestPagination";

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
      <TestCard />
      <img
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"
        width={30}
      />
      <TestTable />
      <div className="height-px-200 w-per-100 bgPrimary m2"></div>
      <TestPagination />
    </div>
  );
};

export default Home;
