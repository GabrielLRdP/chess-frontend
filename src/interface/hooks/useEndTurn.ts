import { usePromotionStore } from '../store/usePromotionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useGameStore } from '../store/useGameStore';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Game } from '../../domain/entities/game/Game';
import { usePositionStore } from '../store/usePositionStore';
import { getKing } from '../../shared/utils/getKing';
import { positionToSimplifiedFen } from '../functions/positionToFen';

export const useEndTurn = () => {
  const { setPromotionChoice } = usePromotionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { setGame } = useGameStore();
  const { currentPosition } = usePositionStore();

  return (game: Game, resetMoveCount: boolean) => {
    setPromotionChoice(null);
    setSelectedPiece(null);

    const updatedGame = {
      ...game,
      playerTurn: toggleColor(game.playerTurn),
      turn: selectedPiece?.color === 'black' ? game.turn + 1 : game.turn,
      halfMoves: resetMoveCount ? 0 : game.halfMoves + 1,
      status:
        game.turn === 1 && game.playerTurn === 'white'
          ? 'onGoing'
          : game.status,
    };
    const simplifiedFen = positionToSimplifiedFen(currentPosition);
    if (resetMoveCount) {
      updatedGame.repetitionHistory.clear();
    } else {
      updatedGame.repetitionHistory.set(
        simplifiedFen,
        (updatedGame.repetitionHistory.get(simplifiedFen) || 0) + 1
      );
    }

    const repetitionCount =
      updatedGame.repetitionHistory.get(simplifiedFen) || 0;

    if (repetitionCount >= 3) {
      updatedGame.status = 'over';
      updatedGame.result = 'draw';
      setGame(updatedGame);
      return;
    }
    if (updatedGame.halfMoves >= 50) {
      updatedGame.status = 'over';
      updatedGame.result = 'draw';
      setGame(updatedGame);
      return;
    }
    const oppositeKing = getKing(currentPosition, toggleColor(game.playerTurn));
    if (oppositeKing.isCheckMate(currentPosition, game.enPassantCase)) {
      updatedGame.status = 'over';
      updatedGame.result =
        game.playerTurn === 'white' ? 'whiteWins' : 'blackWins';
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
