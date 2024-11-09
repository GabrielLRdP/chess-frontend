import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Piece } from '../../domain/entities/piece/Piece';
import { Board } from '../../shared/types/global_types';
import { indexToCoord } from '../../shared/utils/indexToCoord';
import { usePositionStore } from '../store/usePositionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';

const useHandleCaseClick = (
  targetPiece: Piece | null,
  targetIndex: number
): (() => void) => {
  const { currentPosition, setPosition } = usePositionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { takenPieces, setTakenPieces } = useTakenPiecesStore();

  return () => {
    const targetPosition = indexToCoord(targetIndex);
    if (selectedPiece && selectedPiece.color !== targetPiece?.color) {
      const newPosition: Board = ChessBoardService.makeMove(
        currentPosition,
        selectedPiece,
        targetPosition
      );
      setSelectedPiece(null);
      if (targetPiece !== null) {
        const newTakenPiece = [...takenPieces];
        newTakenPiece.push(targetPiece);
        setTakenPieces(newTakenPiece);
      }
      setPosition(newPosition);
    }
    if (
      selectedPiece?.position[0] === targetPiece?.position[0] &&
      selectedPiece?.position[1] === targetPiece?.position[1]
    ) {
      setSelectedPiece(null);
    } else {
      setSelectedPiece(targetPiece);
    }
    setPosition(currentPosition);
  };
};

export default useHandleCaseClick;
