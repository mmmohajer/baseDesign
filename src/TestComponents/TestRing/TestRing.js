import React from 'react';
import Ring from 'Components/Ring';

const cssConfig = {
  seg_0_90_bgColor: 'blue',
  seg_90_180_bgColor: 'blue',
  seg_180_270_bgColor: 'blue',
  seg_270_360_bgColor: 'blue',
  outer_circle_size: 200,
  outer_circle_background_color: 'red',
  inner_circle_size: 160,
  inner_circle_background_color: 'white'
};

const TestRing = () => {
  return (
    <>
      <Ring cssConfig={cssConfig} />
    </>
  );
};

export default TestRing;
