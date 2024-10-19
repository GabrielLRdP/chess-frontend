import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';
import { isThereAPiece } from '../../../../shared/utils/isThereAPiece.ts';
import { coordToIndex } from '../../../../shared/utils/coordToIndex.ts';

export class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'K' : 'k');
  }
  getLegalMoves(position: Array<Piece | null>): Array<Position> {
    const result: Position[] = [];
    const casesToCheck = [];

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i !== 0 || j !== 0) {
          casesToCheck.push([this.position[0] + i, this.position[1] + j]);
        }
      }
    }

    casesToCheck.forEach((element) => {
      if (!isThereAPiece(element, position)) {
        result.push(element);
      } else {
        if (position[coordToIndex(element)]?.color !== this.color) {
          result.push(element);
        }
      }
    });

    return result;
  }
}
