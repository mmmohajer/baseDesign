import React from 'react';
import Heading from 'Components/Heading';

const TestHeading = () => {
  return (
    <>
      <Heading className="textBlue" type={1} onClick={() => console.log('Hello')}>
        Heading 1
      </Heading>
      <Heading className="textBlue" type={2}>
        Heading 2
      </Heading>
      <Heading className="textBlue" type={3}>
        Heading 3
      </Heading>
      <Heading className="textBlue" type={4}>
        Heading 4
      </Heading>
      <Heading className="textBlue" type={5}>
        Heading 5
      </Heading>
      <Heading className="textBlue" type={6}>
        Heading 6
      </Heading>
    </>
  );
};

export default TestHeading;
