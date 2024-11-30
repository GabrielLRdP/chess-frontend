import { useEffect, useState } from 'react';
import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { Piece } from '../../domain/entities/piece/Piece';
import { indexToCoord } from '../../shared/utils/indexToCoord';
import { useGameStore } from '../store/useGameStore';
import { usePositionStore } from '../store/usePositionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';
import { Position } from '../../shared/types/global_types';
import usePawnPromotion from './usePawnPromotion';
import { useEndTurn } from './useEndTurn';

const useHandleCaseClick = (): ((
  targetPiece: Piece | null,
  targetIndex: number
) => void) => {
  const { currentPosition, setPosition } = usePositionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { takenPieces, setTakenPieces } = useTakenPiecesStore();
  const { game, setGame } = useGameStore();
  const promotePawn = usePawnPromotion();
  const endTurn = useEndTurn();
  const [enPassantCase, setEnPassantCase] = useState<Position | null>(
    game ? game.enPassantCase : null
  );
  useEffect(() => {
    game?.initialFen && setGame({ ...game, enPassantCase: enPassantCase });
  }, [enPassantCase]);
  return (targetPiece: Piece | null, targetIndex: number) => {
    const targetPosition = indexToCoord(targetIndex);

    const handleEnPassantCase = () => {
      if (
        selectedPiece?.notation.toLowerCase() === 'p' &&
        Math.abs(targetPosition[1] - selectedPiece.position[1]) === 2
      ) {
        const dir = selectedPiece.color === 'white' ? 1 : -1;
        setEnPassantCase([
          selectedPiece.position[0],
          selectedPiece.position[1] + dir,
        ]);
      } else {
        setEnPassantCase(null);
      }
    };

    const handleNewSelectedCase = () => {
      if (
        selectedPiece?.position[0] === targetPiece?.position[0] &&
        selectedPiece?.position[1] === targetPiece?.position[1]
      ) {
        setSelectedPiece(null);
      } else {
        setSelectedPiece(targetPiece);
      }
    };

    const isMovePossible =
      selectedPiece &&
      selectedPiece.color !== targetPiece?.color &&
      game?.playerTurn === selectedPiece.color &&
      selectedPiece
        .getLegalMoves(currentPosition, game.enPassantCase)
        .some((element) => {
          return (
            element[0] === targetPosition[0] && element[1] === targetPosition[1]
          );
        });

    if (isMovePossible) {
      handleEnPassantCase();
      const { pawnPromotion, takenPiece, newPosition } =
        ChessBoardService.makeMove(
          currentPosition,
          selectedPiece,
          targetPosition
        );
      setPosition(newPosition);
      if (takenPiece) {
        const newTakenPiece = [...takenPieces];
        newTakenPiece.push(takenPiece as Piece);
        setTakenPieces(newTakenPiece);
      }
      if (pawnPromotion) {
        promotePawn();
        return;
      }
      const resetMoveCount =
        takenPiece !== null || selectedPiece.notation.toLowerCase() === 'p';
      endTurn(game, resetMoveCount);
    }
    handleNewSelectedCase();
  };
};

export default useHandleCaseClick;
