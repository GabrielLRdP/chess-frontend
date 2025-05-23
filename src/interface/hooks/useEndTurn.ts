import { usePromotionStore } from '../stores/usePromotionStore';
import { useSelectedPieceStore } from '../stores/useSelectedPieceStore';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Game } from '../../domain/entities/game/Game';
import { usePositionStore } from '../stores/usePositionStore';
import { useGameStore } from '../stores/useGameStore';

export const useEndTurn = () => {
  const { setPromotionChoice } = usePromotionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { currentPosition } = usePositionStore();
  const { setGame } = useGameStore();

  return (game: Game, resetMoveCount: boolean) => {
    setPromotionChoice(null);
    setSelectedPiece(null);
    game.status =
      game.turn === 1 && game.playerTurn === 'white' ? 'onGoing' : game.status;
    game.playerTurn = toggleColor(game.playerTurn);
    game.turn = selectedPiece?.color === 'black' ? game.turn + 1 : game.turn;
    game.halfMoves = resetMoveCount ? 0 : game.halfMoves + 1;
    game.updateStatus(currentPosition, resetMoveCount);
    setGame(game);
  };
};
