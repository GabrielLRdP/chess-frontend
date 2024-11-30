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
    const oppositeKing = getKing(currentPosition, toggleColor(game.playerTurn));
    if (oppositeKing.isCheckMate(currentPosition, game.enPassantCase)) {
      updatedGame.status = 'over';
      updatedGame.result = 'whiteWins';
      setGame(updatedGame);
      return;
    }
    if (!oppositeKing.canAnyTeamMateMove(currentPosition, game.enPassantCase)) {
      updatedGame.status = 'over';
      updatedGame.result = 'draw';
      setGame(updatedGame);
      return;
    }
    setGame(updatedGame);
  };
};
