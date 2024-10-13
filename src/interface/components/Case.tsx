import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { Piece } from '../../domain/entities/piece/Piece';
import { usePositionStore } from '../store/usePositionStore';
import handleCaseClick from '../functions/handleCaseClick';

const Case = ({
  color,
  piece,
  pieceObject,
  index,
}: {
  color: Color;
  piece: ReactElement | null;
  pieceObject: Piece | null;
  index: number;
}): ReactElement => {
  const { initialPosition, setInitialPosition } = usePositionStore();
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const handleClick = (piece: Piece | null) => {
    const newPosition = handleCaseClick(
      initialPosition,
      selectedPiece,
      setSelectedPiece,
      piece,
      index
    );
    setInitialPosition(newPosition);
  };
  return (
    <div
      className={`${
        color === 'black' ? 'bg-gray-800' : 'bg-red-500'
      } w-10 h-10 ${
        piece === selectedPiece ? 'text-white' : 'text-red-700'
      }  flex items-center justify-center border border-transparent hover:border-amber-400`}
      onClick={() => handleClick(pieceObject)}
    >
      {piece}
    </div>
  );
};

export default Case;
