import { fenToObjectTrad } from '../../../application/services/ChesBoardService/fentoObjectTraductor';
import { Color, Position } from '../../../shared/types/global_types';
import { getKing } from '../../../shared/utils/getKing';
import { indexToCoord } from '../../../shared/utils/indexToCoord';

export abstract class Piece {
  constructor(
    readonly color: Color,
    public position: Position,
    readonly notation: string,
    readonly value: number,
    public hasMoved?: boolean
  ) {}
  getLegalMoves(position: Array<Piece | null>): Array<Position> {
    const range = this.getRange(position);
    return range.filter((element) => {
      const potentialPosition = position.map((e, index) => {
        if (
          e?.position[0] === this.position[0] &&
          e.position[1] === this.position[1]
        ) {
          return null;
        } else if (
          element[0] === indexToCoord(index)[0] &&
          element[1] === indexToCoord(index)[1]
        ) {
          const piece = fenToObjectTrad[this.notation];
          if (piece !== null && piece !== '0') {
            return new piece.object(this.color, indexToCoord(index));
          } else {
            return null;
          }
        } else {
          return e;
        }
      });

      const wouldKingBeInCheck = getKing(
        potentialPosition,
        this.color
      ).isInCheck(potentialPosition);
      return !wouldKingBeInCheck;
    });
  }

  abstract getRange(position: Array<Piece | null>): Array<Position>;
}
