import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Game } from '../../domain/entities/game/Game';
import { Player } from '../../domain/entities/player/Player';
import { useGameStore } from '../stores/useGameStore';
import { usePositionStore } from '../stores/usePositionStore';
import { useSelectedPieceStore } from '../stores/useSelectedPieceStore';
import { useTakenPiecesStore } from '../stores/useTakenPiecesStore';

export const useInitializeGame = () => {
  const { setGame } = useGameStore();
  const { setPosition, setInitialPosition } = usePositionStore();
  const { setSelectedPiece } = useSelectedPieceStore();
  const { setTakenPieces } = useTakenPiecesStore();
  return (player?: Player, opponent?: Player) => {
    const newGame = new Game(undefined, player, opponent);
    setGame(newGame);
    const pieceList = ChessBoardService.initializeBoard(
      newGame?.initialPosition as string
    );
    setInitialPosition(pieceList);
    setPosition(pieceList);
    setSelectedPiece(null);
    setTakenPieces([]);
  };
};
