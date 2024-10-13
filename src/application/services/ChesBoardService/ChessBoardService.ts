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
    piece.position = targetPosition;
    board[pieceIndex] = null;
    board[targetIndex] = piece;

    return [...board];
  }
}
