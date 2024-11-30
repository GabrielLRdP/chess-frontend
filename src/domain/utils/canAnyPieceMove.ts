import { Piece } from '../entities/piece/Piece';
import { Position, Color } from '../../shared/types/global_types';
export const canAnyPieceMove = (
  position: Array<Piece | null>,
  color: Color,
  enPassantCase: Position | null
): boolean => {
  return position.some((element) => {
    return (
      element?.color === color &&
      element?.getLegalMoves(position, enPassantCase).length > 0
    );
  });
};
