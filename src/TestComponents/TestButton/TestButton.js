import React, { useRef, useEffect } from 'react';

import Button from 'Components/Button';

const TestButton = () => {
  const buttonRef = useRef();
  useEffect(() => {
    if (buttonRef?.current) {
      buttonRef.current.classList.add('bgBlue');
    }
    console.log(buttonRef);
  }, [buttonRef]);
  return (
    <>
      <Button
        className="bgRed textWhite py1"
        onClick={() => console.log('Hello')}
        fullWidth
        ref={(el) => (buttonRef.current = el)}>
        Click Me!
      </Button>
    </>
  );
};

export default TestButton;
