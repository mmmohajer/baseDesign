import React from 'react';

import Select from 'Components/Select';

import { PROVINCE_CHOICES } from './constants';

function TestSelect() {
  return (
    <>
      <Select options={PROVINCE_CHOICES} />
    </>
  );
}

export default TestSelect;
