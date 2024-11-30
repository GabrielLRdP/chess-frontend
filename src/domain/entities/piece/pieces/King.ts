import { Position, Color } from '../../../../shared/types/global_types.ts';
import { Piece } from '../Piece.ts';
import { isThereAPiece } from '../../../../shared/utils/isThereAPiece.ts';
import { coordToIndex } from '../../../../shared/utils/coordToIndex.ts';

export class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === 'white' ? 'K' : 'k', 6);
  }

  public hasMoved = false;

  public getRange(position: Array<Piece | null>): Array<Position> {
    let result: Position[] = [];
    const casesToCheck = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (
          (i !== 0 || j !== 0) &&
          i + this.position[0] >= 0 &&
          i + this.position[0] < 8 &&
          this.position[1] + j >= 0 &&
          this.position[1] + j < 8
        ) {
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

    const castleMoves = (): Position[] => {
      if (this.hasMoved) {
        return [];
      }
      const result: Position[] = [];
      const checkDirection = (direction: 'left' | 'right'): void => {
        let i = 1;
        let dir;
        direction === 'right' ? (dir = 1) : (dir = -1);
        while (
          this.position[0] + i * dir >= 0 &&
          this.position[0] + i * dir < 8
        ) {
          const pieceToCheck =
            position[
              coordToIndex([this.position[0] + i * dir, this.position[1]])
            ];
          if (
            pieceToCheck?.notation.toLowerCase() === 'r' &&
            pieceToCheck.color === this.color &&
            !pieceToCheck.hasMoved
          ) {
            result.push([this.position[0] + 2 * dir, this.position[1]]);
          } else if (pieceToCheck !== null) {
            break;
          }
          i++;
        }
      };
      checkDirection('right');
      checkDirection('left');
      return result;
    };

    result = result.concat(castleMoves());

    return result;
  }

  public isInCheck(
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ) {
    const adversaryColor = this.color === 'white' ? 'black' : 'white';
    return position.some((element) => {
      if (element?.color) {
        return (
          element.color === adversaryColor &&
          element.getRange(position, enPassantCase).some((e) => {
            return e[0] === this.position[0] && e[1] === this.position[1];
          })
        );
      } else {
        return false;
      }
    });
  }

  public isCheckMate(
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ) {
    const isInCheck = this.isInCheck(position, enPassantCase);
    if (!isInCheck) {
      return false;
    }
    const canAnOtherPieceMove = this.canAnyTeamMateMove(
      position,
      enPassantCase
    );

    if (!canAnOtherPieceMove) {
      return true;
    }
    return false;
  }

  public canAnyTeamMateMove = (
    position: Array<Piece | null>,
    enPassantCase: Position | null
  ): boolean => {
    return position.some((element) => {
      return (
        element?.color === this.color &&
        element?.getLegalMoves(position, enPassantCase).length > 0
      );
    });
  };
}
