import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Piece } from '../../domain/entities/piece/Piece';
import { Board } from '../../shared/types/global_types';
import { indexToCoord } from '../../shared/utils/indexToCoord';

const handleCaseClick = (
  board: Board,
  selectedPiece: Piece | null,
  setSelectedPiece: (param: Piece | null) => void,
  targetPiece: Piece | null,
  targetIndex: number,
  takenPieces: Piece[],
  setTakenPieces: (takenPiece: Piece[]) => void
): Board => {
  const targetPosition = indexToCoord(targetIndex);
  if (selectedPiece && selectedPiece.color !== targetPiece?.color) {
    const newPosition: Board = ChessBoardService.makeMove(
      board,
      selectedPiece,
      targetPosition
    );
    setSelectedPiece(null);
    if (targetPiece !== null) {
      const newTakenPiece = [...takenPieces];
      newTakenPiece.push(targetPiece);
      setTakenPieces(newTakenPiece);
    }
    return newPosition;
  }
  if (
    selectedPiece?.position[0] === targetPiece?.position[0] &&
    selectedPiece?.position[1] === targetPiece?.position[1]
  ) {
    setSelectedPiece(null);
  } else {
    setSelectedPiece(targetPiece);
  }
  return board;
};

export default handleCaseClick;
