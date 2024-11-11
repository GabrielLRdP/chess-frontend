import { Position, Color } from '../../../../shared/types/global_types.ts';
import { coordToIndex } from '../../../../shared/utils/coordToIndex.ts';
import { Piece } from '../Piece.ts';
import { isThereAPiece } from '../../../../shared/utils/isThereAPiece.ts';

export class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'P' : 'p', 1);
  }

  getRange(
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ): Array<Position> {
    const direction = this.color === 'white' ? 1 : -1;
    const startPosition = this.color === 'white' ? 1 : 6;
    const piecePosition = [this.position[0], this.position[1]];
    const firstCaseInFrontPosition = [
      this.position[0],
      this.position[1] + direction,
    ];
    const secondCaseInFrontPosition = [
      this.position[0],
      this.position[1] + 2 * direction,
    ];
    const result = [];

    if (!isThereAPiece(firstCaseInFrontPosition, position)) {
      result.push(firstCaseInFrontPosition);
    }

    if (
      piecePosition[1] === startPosition &&
      !isThereAPiece(firstCaseInFrontPosition, position) &&
      !isThereAPiece(secondCaseInFrontPosition, position)
    ) {
      result.push(secondCaseInFrontPosition);
    }

    const leftSideTakePostionIndex = coordToIndex([
      this.position[0] + direction,
      this.position[1] + direction,
    ]);
    const rightSideTakePostionIndex = coordToIndex([
      this.position[0] - direction,
      this.position[1] + direction,
    ]);

    if (
      position[leftSideTakePostionIndex] &&
      position[leftSideTakePostionIndex].color !== this.color
    ) {
      result.push([this.position[0] + direction, this.position[1] + direction]);
    }
    if (
      position[rightSideTakePostionIndex] &&
      position[rightSideTakePostionIndex].color !== this.color
    ) {
      result.push([this.position[0] - direction, this.position[1] + direction]);
    }

    if (
      enPassantCase &&
      Math.abs(this.position[0] - enPassantCase[0]) === 1 &&
      this.position[1] === enPassantCase[1] - direction &&
      this.hasMoved
    ) {
      result.push(enPassantCase);
    }
    return result;
  }
}
