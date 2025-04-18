import { Color } from '../types/global_types';

const toggleColor = (color: Color): Color => {
  let result: Color;
  color === 'black' ? (result = 'white') : (result = 'black');

  return result;
};

export { toggleColor };
