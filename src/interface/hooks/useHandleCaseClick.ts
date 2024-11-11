import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Piece } from '../../domain/entities/piece/Piece';
import { Board } from '../../shared/types/global_types';
import { indexToCoord } from '../../shared/utils/indexToCoord';
import { toggleColor } from '../../shared/utils/toggleColor';
import { useGameStore } from '../store/useGameStore';
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
  const { game, setGame } = useGameStore();

  return () => {
    const targetPosition = indexToCoord(targetIndex);
    if (
      selectedPiece &&
      selectedPiece.color !== targetPiece?.color &&
      game?.playerTurn === selectedPiece.color &&
      selectedPiece.getLegalMoves(currentPosition).some((element) => {
        return (
          element[0] === targetPosition[0] && element[1] === targetPosition[1]
        );
      })
    ) {
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
      setGame({ ...game, playerTurn: toggleColor(game.playerTurn) });
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
