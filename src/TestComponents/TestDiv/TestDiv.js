import React from "react";

import Div from "Components/Div";

const TestDiv = () => {
  return (
    <>
      <Div
        type="flex"
        direction="horizontal"
        hAlign="center"
        vAlign="center"
        distributedAround
        className="bgRed height-px-400"
      >
        <Div textAlign="right" className="blue height-px-100 bgBlue w-per-20">
          Hello
        </Div>
        <Div
          className="blue height-px-100 bgPurple w-per-20"
          onClick={() => console.log("Hello")}
        ></Div>
      </Div>
    </>
  );
};

export default TestDiv;
