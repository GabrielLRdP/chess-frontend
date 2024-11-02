import { fenToObjectTrad } from './fentoObjectTraductor';
import { fenExpander } from '../../../shared/utils/fenExpander';
import { Position } from '../../../shared/types/global_types';
import { Piece } from '../../../domain/entities/piece/Piece';
import { coordToIndex } from '../../../shared/utils/coordToIndex';
import { indexToCoord } from '../../../shared/utils/indexToCoord';

export class ChessBoardService {
  static initializeBoard(fen: string) {
    const expandedFen = fenExpander(fen)
      .split('')
      .filter((e) => e !== '/');
    const pieceList = expandedFen.map((e, i) => {
      const elementPosition = indexToCoord(i);
      const piece = fenToObjectTrad[e];
      if (typeof piece === 'string' || !piece) {
        return null;
      } else {
        return new piece.object(piece.color, elementPosition);
      }
    });
    return [...pieceList];
  }

  static makeMove(
    board: Array<Piece | null>,
    piece: Piece,
    targetPosition: Position
  ) {
    const rookMoveIfCastle = (direction: 'left' | 'right') => {
      let dir;
      direction === 'left' ? (dir = -1) : (dir = 1);
      if (
        piece.notation.toLowerCase() === 'k' &&
        targetPosition[0] === piece.position[0] + 2 * dir &&
        !piece.hasMoved
      ) {
        const rookInitialPosition = [
          Math.floor(piece.position[0] + 3.5 * dir),
          piece.position[1],
        ];
        const rookTargetPosition = [piece.position[0] + dir, piece.position[1]];
        const rookToMove = board[coordToIndex(rookInitialPosition)];
        rookToMove && (rookToMove.position = rookTargetPosition);
        board[coordToIndex(rookInitialPosition)] = null;
        board[coordToIndex(rookTargetPosition)] = rookToMove;
      }
    };

    rookMoveIfCastle('left');
    rookMoveIfCastle('right');

    const pieceIndex = coordToIndex(piece.position);
    const targetIndex = coordToIndex(targetPosition);
    piece.previousPostion = piece.position;
    piece.position = targetPosition;
    board[pieceIndex] = null;
    board[targetIndex] = piece;
    piece.hasMoved = true;

    return [...board];
  }
}
