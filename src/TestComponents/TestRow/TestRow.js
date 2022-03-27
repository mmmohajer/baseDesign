import React from "react";
import cx from "classnames";

import styles from "./TestRow.module.scss";

import Row from "Components/Row";
import Column from "Components/Column";

const TestRow = () => {
  return (
    <>
      <Row>
        <Column xs={12} sm={8} md={6} lg={4} className="bgRed">
          Hello
        </Column>
        <Column xs={12} sm={4} md={6} lg={8} className="bgBlue">
          Bye
        </Column>
      </Row>
    </>
  );
};

export default TestRow;
