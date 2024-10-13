import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Piece } from '../../domain/entities/piece/Piece';
import { Board } from '../../shared/types/global_types';
import { indexToCoord } from '../../shared/utils/indexToCoord';

const handleCaseClick = (
  board: Board,
  selectedPiece: Piece | null,
  setSelectedPiece: (param: Piece | null) => void,
  targetPiece: Piece | null,
  targetIndex: number
): Board => {
  const targetPosition = indexToCoord(targetIndex);
  if (selectedPiece) {
    const newPosition: Board = ChessBoardService.makeMove(
      board,
      selectedPiece,
      targetPosition
    );
    setSelectedPiece(null);
    return newPosition;
  }
  setSelectedPiece(targetPiece);
  return board;
};

export default handleCaseClick;
