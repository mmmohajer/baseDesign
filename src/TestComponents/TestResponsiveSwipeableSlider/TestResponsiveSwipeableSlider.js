import React, { useState, useEffect, useRef } from 'react';

import LimitedSwipableSlider from 'Components/LimitedSwipableSlider';
import NewLimitedSwipeableSlider from 'Components/NewLimitedSwipeableSlider';
import LimitedSwipableSliderItem from 'Components/LimitedSwipableSlider/subs/LimitedSwipableSliderItem';

const TestLimitedSwipableSlider = () => {
  const arrayOfChildrenRefs = useRef(new Array());

  const [arrayOfChildren, setArrayOfChildren] = useState([]);

  useEffect(() => {
    if (arrayOfChildrenRefs?.current?.length) {
      let localArrayOfElements = [];
      arrayOfChildrenRefs.current.forEach((item) => {
        localArrayOfElements.push(item);
      });
      setArrayOfChildren(localArrayOfElements);
    }
  }, [arrayOfChildrenRefs?.current]);

  return (
    <>
      <NewLimitedSwipeableSlider arrayOfChildren={arrayOfChildren}>
        <div className="w-per-100 bgBlue" ref={(el) => arrayOfChildrenRefs.current.push(el)}>
          Hello
        </div>
        <div className="w-per-100 bgGreen" ref={(el) => arrayOfChildrenRefs.current.push(el)}>
          Bye
        </div>
        <div className="w-per-100 bgYellow" ref={(el) => arrayOfChildrenRefs.current.push(el)}>
          Test
        </div>
        <div
          className="w-per-100 bgBlack textWhite"
          ref={(el) => arrayOfChildrenRefs.current.push(el)}>
          Test
        </div>
        <div className="w-per-100 bgWhite" ref={(el) => arrayOfChildrenRefs.current.push(el)}>
          Test
        </div>
      </NewLimitedSwipeableSlider>
    </>
  );
};

export default TestLimitedSwipableSlider;
