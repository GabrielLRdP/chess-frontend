import { Position } from '../../shared/types/global_types';
import { letterToNumber } from '../../shared/utils/alphabetIndex';

export const getEnPassantCaseFromFen = (fen: string): Position | null => {
  console.log(fen);
  const fenEnPassant: string = fen.split(' ')[3];

  if (fenEnPassant === '-') {
    return null;
  } else {
    return [
      letterToNumber(fenEnPassant.charAt(0)),
      Number(fenEnPassant.charAt(1)),
    ];
  }
};
