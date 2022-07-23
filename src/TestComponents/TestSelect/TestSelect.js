import React, { useState } from 'react';

import Select from 'Components/Select';

import { PROVINCE_CHOICES } from './constants';

function TestSelect() {
  const [val, setVal] = useState('');
  return (
    <>
      <Select selectValue={val} setSelectValue={setVal} options={PROVINCE_CHOICES} />
    </>
  );
}

export default TestSelect;
