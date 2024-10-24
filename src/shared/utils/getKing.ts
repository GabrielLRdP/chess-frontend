import { Color } from '../types/global_types';
import { Piece } from '../../domain/entities/piece/Piece';
import { King } from '../../domain/entities/piece/pieces/King';

export const getKing = (position: Array<Piece | null>, color: Color): King => {
  return position.find((element) => {
    console.log(element, color);
    return element?.notation.toLowerCase() === 'k' && element.color === color;
  }) as King;
};
