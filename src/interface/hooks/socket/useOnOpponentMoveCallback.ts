import { usePositionStore } from '../../stores/usePositionStore';
import { ChessBoardService } from '../../../application/services/ChesBoardService/ChessBoardService';
import { useTakenPiecesStore } from '../../stores/useTakenPiecesStore';
import { useEndTurn } from '../useEndTurn';
import { useGameStore } from '../../stores/useGameStore';
import { Piece } from '../../../domain/entities/piece/Piece';
import { OpponentMoveData } from '../../../application/handlers/socketHandlers/handleOpponentMove';

export const useOnOpponentMoveCallback = () => {
  const { game } = useGameStore();
  const { currentPosition, setPosition } = usePositionStore();
  const { takenPieces, setTakenPieces } = useTakenPiecesStore();
  const endTurn = useEndTurn();
  if (!game) {
    return () => {};
  }
  return (data: OpponentMoveData) => {
    const { previousPiecePosition, newPiecePosition } = data;
    const piece: Piece = currentPosition.find((p) => {
      return (
        !!p &&
        p.position[0] === previousPiecePosition[0] &&
        p.position[1] === previousPiecePosition[1]
      );
    }) as Piece;
    const { takenPiece, newPosition } = ChessBoardService.makeMove(
      currentPosition,
      piece,
      newPiecePosition
    );
    setPosition(newPosition);
    if (takenPiece) {
      const newTakenPiece = [...takenPieces];
      newTakenPiece.push(takenPiece as Piece);
      setTakenPieces(newTakenPiece);
    }
    const resetMoveCount =
      takenPiece !== null || piece.notation.toLowerCase() === 'p';
    endTurn(game, resetMoveCount);
  };
};
