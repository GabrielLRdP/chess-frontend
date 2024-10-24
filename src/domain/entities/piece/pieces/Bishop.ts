import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';
import { getDiagonalLegalMoves } from '../../../utils/getDiagonalLegalMoves.ts';

export class Bishop extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'B' : 'b');
  }
  getRange(position: Array<Piece | null>): Array<Position> {
    const result: Position[] = getDiagonalLegalMoves(
      this.position,
      position,
      this.color
    );
    return result;
  }
}
