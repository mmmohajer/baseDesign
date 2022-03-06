import React, { useState, useEffect } from "react";
import cx from "classnames";

import Table from "Components/Table";
import Search from "./Search";

import { headLines, data } from "./utils";

import "./TestTable.scss";

const TestTable = (props) => {
  const genderConverter = (gender) => {
    if (gender === "Male") {
      return (
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-man-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"
          width={30}
        />
      );
    } else if (gender === "Female") {
      return (
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"
          width={30}
        />
      );
    } else {
      return (
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png"
          width={30}
        />
      );
    }
  };
  const search = (props) => {
    return <Search {...props} />;
  };

  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    data.map((d) => {
      d["gender"] = {
        value: d["gender"],
        display: genderConverter(d["gender"]),
      };
    });
  }, [data]);

  return (
    <>
      <Table
        headLines={headLines}
        data={data}
        colWidth={400}
        tableWidth={2025}
        isSelectable={true}
        // search={search}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </>
  );
};

export default TestTable;
