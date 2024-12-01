import { Piece } from '../../domain/entities/piece/Piece';

export const positionToSimplifiedFen = (
  position: Array<Piece | null>
): string => {
  return position
    .map((element) => {
      if (element === null) {
        return '0';
      } else {
        return element.notation;
      }
    })
    .join('');
};
