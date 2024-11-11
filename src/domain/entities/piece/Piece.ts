import { fenToObjectTrad } from '../../../application/services/ChesBoardService/fentoObjectTraductor';
import { Color, Position } from '../../../shared/types/global_types';
import { getKing } from '../../../shared/utils/getKing';
import { indexToCoord } from '../../../shared/utils/indexToCoord';

export abstract class Piece {
  constructor(
    readonly color: Color,
    public position: Position,
    readonly notation: string,
    readonly value: number
  ) {}
  public hasMoved?: boolean;
  public previousPostion: Position = this.position;
  getLegalMoves(
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ): Array<Position> {
    const range = this.getRange(position, enPassantCase);
    let legalMoves = range.filter((element) => {
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

    const checkCastle = (direction: 'left' | 'right'): void => {
      if (this.notation.toLowerCase() !== 'k') {
        return;
      }
      let dir: number;
      direction === 'right' ? (dir = 1) : (dir = -1);
      if (
        legalMoves.some(
          (element) =>
            element[0] === this.position[0] + 2 * dir &&
            element[1] === this.position[1]
        ) &&
        !legalMoves.some(
          (element) =>
            element[0] === this.position[0] + dir &&
            element[1] === this.position[1]
        )
      ) {
        legalMoves = legalMoves.filter(
          (element) =>
            element[0] !== this.position[0] + 2 * dir &&
            element[1] !== this.position[1]
        );
      }
    };

    checkCastle('left');
    checkCastle('right');

    return legalMoves;
  }

  abstract getRange(
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ): Array<Position>;
}
