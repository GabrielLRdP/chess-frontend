export const coordToIndex = (coord: number[]) => {
  return coord[0] + 8 * (7 - coord[1]);
};
