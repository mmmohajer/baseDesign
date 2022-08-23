import React from 'react';
import cx from 'classnames';

const CheckBox = ({ checked = false, onBoxClick }) => {
  return (
    <>
      <div className={cx('w-px-20 height-px-20 bgRed', checked && 'bgBlue')} onClick={onBoxClick}>
        {checked && <div>He</div>}
      </div>
    </>
  );
};

export default CheckBox;
