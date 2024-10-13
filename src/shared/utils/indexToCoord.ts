export const indexToCoord = (index: number) => {
  return [index % 8, 7 - Math.floor(index / 8)];
};
