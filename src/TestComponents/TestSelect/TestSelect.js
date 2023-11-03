import React, { useState } from 'react';

import Select from 'Components/Select';

import { PROVINCE_CHOICES } from './constants';

function TestSelect() {
  const [val, setVal] = useState('AB');
  const [isOptions1Active, setIsOptions1Active] = useState(false);
  const [isOptions2Active, setIsOptions2Active] = useState(false);
  return (
    <>
      <div className="bgBlue height-px-250">
        <Select
          selectValue={val}
          setSelectValue={setVal}
          options={PROVINCE_CHOICES}
          isOptionsActive={isOptions1Active}
          setIsOptionsActive={setIsOptions1Active}
          selectIntialShownText="Alberta"
        />
      </div>
      <div className="bgRed">
        <Select
          selectValue={val}
          setSelectValue={setVal}
          options={PROVINCE_CHOICES}
          isOptionsActive={isOptions2Active}
          setIsOptionsActive={setIsOptions2Active}
          selectIntialShownText="Alberta"
        />
      </div>
    </>
  );
}

export default TestSelect;
