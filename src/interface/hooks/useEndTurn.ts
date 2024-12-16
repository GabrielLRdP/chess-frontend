import { usePromotionStore } from '../store/usePromotionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useGameStore } from '../store/useGameStore';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Game } from '../../domain/entities/game/Game';
import { usePositionStore } from '../store/usePositionStore';

export const useEndTurn = () => {
  const { setPromotionChoice } = usePromotionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { setGame } = useGameStore();
  const { currentPosition } = usePositionStore();

  return (game: Game, resetMoveCount: boolean) => {
    setPromotionChoice(null);
    setSelectedPiece(null);

    const updates = {
      playerTurn: toggleColor(game.playerTurn),
      turn: selectedPiece?.color === 'black' ? game.turn + 1 : game.turn,
      halfMoves: resetMoveCount ? 0 : game.halfMoves + 1,
      status:
        game.turn === 1 && game.playerTurn === 'white'
          ? 'onGoing'
          : game.status,
    };
    game.update(updates);

    setGame(game.setStatus(currentPosition, resetMoveCount) as Game);
    console.log(game);
  };
};
