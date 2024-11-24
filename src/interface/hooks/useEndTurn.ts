import { usePromotionStore } from '../store/usePromotionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useGameStore } from '../store/useGameStore';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Game } from '../../domain/entities/game/Game';
import { usePositionStore } from '../store/usePositionStore';
import { getKing } from '../../shared/utils/getKing';

export const useEndTurn = () => {
  const { setPromotionChoice } = usePromotionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { setGame } = useGameStore();
  const { currentPosition } = usePositionStore();

  return (game: Game) => {
    setPromotionChoice(null);
    setSelectedPiece(null);
    const updatedGame = {
      ...game,
      playerTurn: toggleColor(game.playerTurn),
      turn: selectedPiece?.color === 'black' ? game.turn + 1 : game.turn,
      status:
        game.turn === 1 && game.playerTurn === 'white'
          ? 'onGoing'
          : game.status,
    };
    const blackKing = getKing(currentPosition, 'black');
    const whiteKing = getKing(currentPosition, 'white');
    if (
      blackKing.isCheckMate(currentPosition, game.enPassantCase) ||
      whiteKing.isCheckMate(currentPosition, game.enPassantCase)
    ) {
      updatedGame.status = 'over';
    }
    setGame(updatedGame);
  };
};
