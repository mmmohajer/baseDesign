import allowedKeys from './allowedKeys';
import defaultProps from 'Constants/defaultProps';

const { allowedProps: allowedPropsArray } = defaultProps;

const allowedProps = (props) => {
  return allowedKeys(props, allowedPropsArray);
};

export default allowedProps;
