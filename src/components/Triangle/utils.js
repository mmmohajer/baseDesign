import PropTypes from 'prop-types';

export const cssConfigShape = {
  size: PropTypes.number,
  borderType: PropTypes.string,
  color: PropTypes.string
};

export const cssDefaultConfig = {
  size: 50,
  borderType: 'solid',
  color: 'black',
  direction: 'down'
};
