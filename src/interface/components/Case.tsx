import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { Piece } from '../../domain/entities/piece/Piece';
import { usePositionStore } from '../store/usePositionStore';
import handleCaseClick from '../functions/handleCaseClick';
// import { indexToCoord } from '../../shared/utils/indexToCoord';
const Case = ({
  color,
  piece,
  pieceObject,
  index,
  legalMoveDisplay,
}: {
  color: Color;
  piece: ReactElement | null;
  pieceObject: Piece | null;
  index: number;
  legalMoveDisplay: boolean;
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
        color === 'black' ? 'bg-orange-900' : 'bg-orange-400'
      } w-10 h-10 flex items-center justify-center border border-transparent hover:border-amber-400`}
      onClick={() => handleClick(pieceObject)}
    >
      {piece}
      {legalMoveDisplay && (
        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
      )}
    </div>
  );
};

export default Case;
