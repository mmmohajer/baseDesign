import React from 'react';
import Div from 'Components/Div';
import Triangle from 'Components/Triangle';

const cssConfig = {
  direction: 'right',
  size: 20,
  color: 'green'
};

const TestTriangle = () => {
  return (
    <>
      <Triangle containerUID="TestTriangle" cssConfig={cssConfig} />
    </>
  );
};

export default TestTriangle;
