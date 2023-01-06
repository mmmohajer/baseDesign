import PropTypes from 'prop-types';

export const cssConfigShape = {
  seg_0_90_bgColor: PropTypes.string,
  seg_90_180_bgColor: PropTypes.string,
  seg_180_270_bgColor: PropTypes.string,
  seg_270_360_bgColor: PropTypes.string,
  outer_circle_size: PropTypes.number,
  outer_circle_background_color: PropTypes.string,
  inner_circle_size: PropTypes.number,
  inner_circle_background_color: PropTypes.string
};

export const cssDefaultConfig = {
  seg_0_90_bgColor: 'blue',
  seg_90_180_bgColor: 'blue',
  seg_180_270_bgColor: 'blue',
  seg_270_360_bgColor: 'blue',
  outer_circle_size: 200,
  outer_circle_background_color: 'red',
  inner_circle_size: 180,
  inner_circle_background_color: 'white'
};
