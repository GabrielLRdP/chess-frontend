import { Position, Color } from '../../../../shared/types/global_types.ts';
import { isThereAPiece } from '../../../../shared/utils/isThereAPiece.ts';
import { Piece } from '../Piece.ts';
import { coordToIndex } from '../../../../shared/utils/coordToIndex.ts';

export class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'N' : 'n', 2);
  }
  getRange(position: Array<Piece | null>): Array<Position> {
    const result: Position[] = [];
    const casesToCheck = [];

    for (let i = -2; i < 3; i++) {
      for (let j = -2; j < 3; j++) {
        if (i !== 0 && j !== 0 && Math.abs(i) !== Math.abs(j)) {
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
