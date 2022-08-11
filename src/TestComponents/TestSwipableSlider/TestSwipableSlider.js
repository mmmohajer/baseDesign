import React, { useState } from 'react';

import SwipableSlider from 'Components/SwipableSlider';
import SwipableSliderItem from 'Components/SwipableSlider/subs/SwipableSliderItem';

const TestSwipableSlider = () => {
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);

  return (
    <>
      <SwipableSlider
        moveRight={moveRight}
        setMoveRight={setMoveRight}
        moveLeft={moveLeft}
        setMoveLeft={setMoveLeft}
        moveToItemWithNum={moveToItemWithNum}
        setMoveToItemWithNum={setMoveToItemWithNum}
        transitionDuration={0.3}
        transition_timing_function="ease-in"
        mainContainerWidthMultiplier={1.5}>
        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 1
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 2
          </p>
        </SwipableSliderItem>

        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 3
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 4
          </p>
        </SwipableSliderItem>

        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 5
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 6
          </p>
        </SwipableSliderItem>

        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 7
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 8
          </p>
        </SwipableSliderItem>

        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 9
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 10
          </p>
        </SwipableSliderItem>

        <SwipableSliderItem className="w-per-100 flex flex--jc--between flex--ai--center">
          <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 11
          </p>
          <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
            Item 12
          </p>
        </SwipableSliderItem>
      </SwipableSlider>
      <button onClick={() => setMoveRight(true)}>Right</button>
      <button onClick={() => setMoveLeft(true)}>Left</button>
      <button onClick={() => setMoveToItemWithNum(4)}>Jump To number 4</button>
      <button onClick={() => setMoveToItemWithNum(1)}>Jump To Number 1</button>
    </>
  );
};

export default TestSwipableSlider;
