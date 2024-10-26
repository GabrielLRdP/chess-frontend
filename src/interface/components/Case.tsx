import { ReactElement, useEffect, useState } from 'react';
import { Color } from '../../shared/types/global_types';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { Piece } from '../../domain/entities/piece/Piece';
import { usePositionStore } from '../store/usePositionStore';
import handleCaseClick from '../functions/handleCaseClick';
import AllowedMoveOverlay from './AllowedMoveOverlay';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';

const Case = ({
  color,
  piece,
  pieceObject,
  index,
  legalMoveDisplay,
}: CaseProps): ReactElement => {
  const { currentPosition, setPosition } = usePositionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const [isThereAPiece, setIsThereAPiece] = useState(false);
  const { takenPieces, setTakenPieces } = useTakenPiecesStore();
  useEffect(() => {
    setIsThereAPiece(piece !== null);
  }, [legalMoveDisplay, piece]);
  const handleClick = (piece: Piece | null) => {
    const newPosition = handleCaseClick(
      currentPosition,
      selectedPiece,
      setSelectedPiece,
      piece,
      index,
      takenPieces,
      setTakenPieces
    );
    console.log(takenPieces);
    setPosition(newPosition);
  };
  return (
    <div
      className={`${
        color === 'black' ? 'bg-orange-900' : 'bg-orange-400'
      } w-10 h-10 flex items-center justify-center border border-transparent hover:border-amber-400`}
      onClick={() => handleClick(pieceObject)}
    >
      {piece}
      {legalMoveDisplay ? (
        <AllowedMoveOverlay isThereAPiece={isThereAPiece} />
      ) : null}
    </div>
  );
};

export default Case;

type CaseProps = {
  color: Color;
  piece: ReactElement | null;
  pieceObject: Piece | null;
  index: number;
  legalMoveDisplay: boolean;
};
