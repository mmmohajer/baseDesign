import React, { useState, useEffect } from "react";
import cx from "classnames";

import Table from "Components/Table";
import Search from "./Search";

import "./TestTable.scss";

const headLines = [
  { value: "Header1", display: "Bye", width: 200, hasSearch: true },
  { value: "Header2", display: "Header2", width: 250, hasSearch: true },
  "Header3",
  "Header4",
  "Header5",
  "Header6",
];

const data = [
  {
    Header1: { value: "Data11", display: <div>Hello</div> },
    Header2: "Data12",
    Header3: "Data13",
    Header4: "Data14",
    Header5: "Data15",
    Header6: "Data16",
  },
  {
    Header1: "Data21",
    Header2: "Data22",
    Header3: "Data23",
    Header4: "Data24",
    Header5: "Data25",
    Header6: "Data26",
  },
  {
    Header1: "Data31",
    Header2: "Data32",
    Header3: "Data33",
    Header4: "Data34",
    Header5: "Data35",
    Header6: "Data36",
  },
  {
    Header1: "Data41",
    Header2: "Data42",
    Header3: "Data43",
    Header4: "Data44",
    Header5: "Data45",
    Header6: "Data46",
  },
  {
    Header1: "Data51",
    Header2: "Data52",
    Header3: "Data53",
    Header4: "Data54",
    Header5: "Data55",
    Header6: "Data56",
  },
  {
    Header1: "Data61",
    Header2: "Data62",
    Header3: "Data63",
    Header4: "Data64",
    Header5: "Data65",
    Header6: "Data66",
  },
];

const TestTable = (props) => {
  const search = (props) => {
    return <Search {...props} />;
  };

  const [selectedData, setSelectedData] = useState([]);

  return (
    <>
      <Table
        headLines={headLines}
        data={data}
        colWidth={100}
        tableWidth={875}
        isSelectable={true}
        search={search}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </>
  );
};

export default TestTable;
