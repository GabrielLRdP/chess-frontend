import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';
import { getLineLegalMoves } from '../../../utils/getLineLegalMoves.ts';
import { getDiagonalLegalMoves } from '../../../utils/getDiagonalLegalMoves.ts';

export class Queen extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'Q' : 'q');
  }
  getLegalMoves(position: Array<Piece | null>): Array<Position> {
    let result: Position[] = [];

    const lines = getLineLegalMoves(this.position, position, this.color);

    const diagonals = getDiagonalLegalMoves(
      this.position,
      position,
      this.color
    );

    result = lines.concat(diagonals);

    return result;
  }
}
