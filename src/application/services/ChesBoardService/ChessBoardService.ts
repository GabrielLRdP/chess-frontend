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
    const pieceIndex = coordToIndex(piece.position);
    const targetIndex = coordToIndex(targetPosition);
    const pawnPromotionRow = piece.color === 'white' ? 7 : 0;
    const pawnPromotion =
      piece.notation.toLowerCase() === 'p' &&
      targetPosition[1] === pawnPromotionRow;
    let takenPiece = board[targetIndex] ? { ...board[targetIndex] } : null;
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

    const handleEnPassantMove = () => {
      if (
        piece.notation.toLowerCase() === 'p' &&
        targetPosition[0] !== piece.position[0] &&
        !board[targetIndex]?.color
      ) {
        const pieceToTakeIndex = coordToIndex([
          targetPosition[0],
          piece.position[1],
        ]);
        takenPiece = board[pieceToTakeIndex];
        board[pieceToTakeIndex] = null;
      }
    };

    rookMoveIfCastle('left');
    rookMoveIfCastle('right');
    handleEnPassantMove();

    piece.previousPostion = piece.position;
    piece.position = targetPosition;
    board[pieceIndex] = null;
    board[targetIndex] = piece;
    piece.hasMoved = true;
    return {
      pawnPromotion: pawnPromotion,
      takenPiece: takenPiece,
      newPosition: [...board],
    };
  }

  static replacePiece(
    board: Array<Piece | null>,
    originPiece: Piece,
    targetPiece: Piece
  ) {
    const pieceIndex = coordToIndex(originPiece.position);
    const newBoard = [...board];
    newBoard[pieceIndex] = targetPiece;
    return newBoard;
  }
}
