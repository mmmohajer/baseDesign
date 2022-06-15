import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';

export const headLines = [
  {
    value: 'first_name',
    display: 'First Name',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  {
    value: 'last_name',
    display: 'Last Name',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  'email',
  {
    value: 'gender',
    display: 'Gender',
    width: 300,
    hasSearch: true,
    isSortable: true
  },
  { value: 'ip_address', display: 'IP Address', width: 400, hasSearch: true }
];

export const data = MOCK_DATA;
