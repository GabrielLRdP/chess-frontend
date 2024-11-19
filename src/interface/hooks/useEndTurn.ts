import { usePromotionStore } from '../store/usePromotionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useGameStore } from '../store/useGameStore';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Game } from '../../domain/entities/game/Game';

export const useEndTurn = () => {
  const { setPromotionChoice } = usePromotionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { setGame } = useGameStore();

  return (game: Game) => {
    console.log('coucsdcfou');
    setPromotionChoice(null);
    setSelectedPiece(null);
    setGame({
      ...game,
      playerTurn: toggleColor(game.playerTurn),
      turn: selectedPiece?.color === 'black' ? game.turn + 1 : game.turn,
    });
  };
};
