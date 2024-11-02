const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const letterToNumber = (letter: string): number => {
  return alphabet.indexOf(letter) + 1;
};

export const numberToLetter = (number: number): string => {
  return alphabet.charAt(number - 1);
};
