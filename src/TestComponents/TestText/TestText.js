import React from "react";
import Div from "Components/Div";
import Text from "Components/Text";
const TestText = () => {
  return (
    <>
      <Div>This is a   
        <Text
            className="bgBlue"
        > Text component   
        </Text> inside a Div.
      </Div>
    </>
  );
};

export default TestText;
