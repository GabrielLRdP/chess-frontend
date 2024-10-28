import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';
import { getLineLegalMoves } from '../../../utils/getLineLegalMoves.ts';

export class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'R' : 'r', 4);
  }
  getRange(position: Array<Piece | null>): Array<Position> {
    const result: Position[] = getLineLegalMoves(
      this.position,
      position,
      this.color
    );

    return result;
  }
}
