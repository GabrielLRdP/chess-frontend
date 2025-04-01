import { useEffect } from 'react';
import { fenToObjectTrad } from '../../application/services/ChesBoardService/fentoObjectTraductor';
import { usePromotionStore } from '../stores/usePromotionStore';
import { useSelectedPieceStore } from '../stores/useSelectedPieceStore';
import { usePositionStore } from '../stores/usePositionStore';
import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { useEndTurn } from './useEndTurn';
import { useGameStore } from '../stores/useGameStore';

const usePawnPromotion = () => {
  const { promotionChoice, setIsModalOpen } = usePromotionStore();
  const { selectedPiece } = useSelectedPieceStore();
  const { currentPosition, setPosition } = usePositionStore();
  const { game } = useGameStore();
  const endTurn = useEndTurn();

  useEffect(() => {
    if (promotionChoice && selectedPiece && game) {
      setIsModalOpen(false);

      const pieceConstructor = fenToObjectTrad[promotionChoice];
      if (selectedPiece && pieceConstructor) {
        const piece = fenToObjectTrad[promotionChoice];
        if (selectedPiece && piece !== null && piece !== '0') {
          const pieceObject = new piece.object(
            selectedPiece.color,
            selectedPiece.position
          );
          const updatedPosition = ChessBoardService.replacePiece(
            currentPosition,
            selectedPiece,
            pieceObject
          );
          setPosition(updatedPosition);
          endTurn(game, true);
        }
      }
    }
  }, [promotionChoice]);

  return () => {
    setIsModalOpen(true);
  };
};

export default usePawnPromotion;
