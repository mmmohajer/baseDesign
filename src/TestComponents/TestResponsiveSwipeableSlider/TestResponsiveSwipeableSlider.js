import React, { useState, useEffect, useRef } from 'react';

import ResponsiveSwipeableSlider from 'Components/ResponsiveSwipeableSlider';
import ResponsiveSwipeableSliderItem from 'Components/ResponsiveSwipeableSlider/subs/ResponsiveSwipeableSliderItem';

const TestLimitedSwipableSlider = () => {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);

  const [rightSideActiveIndices, setRightSideActiveIndices] = useState([0, 1, 2, 3, 4]);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);

  return (
    <>
      <ResponsiveSwipeableSlider
        rightSideActiveIndices={rightSideActiveIndices}
        setRightSideActiveIndices={setRightSideActiveIndices}
        moveLeft={moveLeft}
        setMoveLeft={setMoveLeft}
        moveRight={moveRight}
        setMoveRight={setMoveRight}>
        {items?.map((item, idx) => (
          <ResponsiveSwipeableSliderItem key={idx}>
            <div className="flex">
              <div className="w-px-300 bgBlue height-px-100">{item}</div>
              <div className="w-px-50 height-px-100"></div>
            </div>
          </ResponsiveSwipeableSliderItem>
        ))}
      </ResponsiveSwipeableSlider>

      <button onClick={() => setMoveRight(true)}>Show Next</button>
      <button onClick={() => setMoveLeft(true)}>Show Previous</button>
    </>
  );
};

export default TestLimitedSwipableSlider;
