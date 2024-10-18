import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';

export class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'P' : 'p');
  }
  getLegalMoves(): Array<Position> {
    if (this.color === 'white') {
      const result = [[this.position[0], this.position[1] + 1]];
      if (this.position[1] === 1) {
        result.push([this.position[0], this.position[1] + 2]);
      }
      return result;
    } else {
      const result = [[this.position[0], this.position[1] - 1]];
      if (this.position[1] === 6) {
        result.push([this.position[0], this.position[1] - 2]);
      }
      return result;
    }
  }
}
