import { ReactElement } from 'react';
import PrimaryButton from '../../../components/generics/PrimaryButton';
import { ChessBoardService } from '../../../../application/services/ChesBoardService/ChessBoardService';
import { Game } from '../../../../domain/entities/game/Game';
import { useGameStore } from '../../../stores/useGameStore';
import { usePositionStore } from '../../../stores/usePositionStore';
import { useSelectedPieceStore } from '../../../stores/useSelectedPieceStore';
import { useTakenPiecesStore } from '../../../stores/useTakenPiecesStore';

const NewGameButton = (): ReactElement => {
  const { game, setGame } = useGameStore();
  const { setPosition, setInitialPosition } = usePositionStore();
  const { setSelectedPiece } = useSelectedPieceStore();
  const { setTakenPieces } = useTakenPiecesStore();

  const handleClick = () => {
    const newGame = new Game();
    setGame(newGame);
    const pieceList = ChessBoardService.initializeBoard(
      newGame?.initialPosition as string
    );
    console.log(game);
    setInitialPosition(pieceList);
    setPosition(pieceList);
    setSelectedPiece(null);
    setTakenPieces([]);
  };

  return (
    <PrimaryButton
      type='button'
      onClick={handleClick}
      label={`Nouvelle partie`}
    />
  );
};

export default NewGameButton;
