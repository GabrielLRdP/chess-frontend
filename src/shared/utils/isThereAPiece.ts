import { Position } from '../types/global_types';
import { Piece } from '../../domain/entities/piece/Piece';

export const isThereAPiece = (
  position: Position,
  game: Array<Piece | null>
) => {
  return game.some(
    (element) =>
      element?.position[0] === position[0] &&
      element.position[1] === position[1]
  );
};
