import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { Piece } from '../../domain/entities/piece/Piece';
import useHandleCaseClick from '../hooks/useHandleCaseClick';
import AllowedMoveOverlay from './AllowedMoveOverlay';

const Case = ({
  color,
  piece,
  pieceObject,
  index,
  legalMoveDisplay,
}: CaseProps): ReactElement => {
  const isThereAPiece = piece !== null;

  const handleClick = useHandleCaseClick(pieceObject, index);

  return (
    <div
      className={`${
        color === 'black' ? 'bg-orange-900' : 'bg-orange-400'
      } w-[60px] h-[60px] text-[30px] flex items-center justify-center border border-transparent hover:border-amber-400 overflow-hidden`}
      onClick={handleClick}
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
