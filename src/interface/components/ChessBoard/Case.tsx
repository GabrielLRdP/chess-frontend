import { ReactElement } from 'react';
import { Color } from '../../../shared/types/global_types';
import { Piece } from '../../../domain/entities/piece/Piece';
import AllowedMoveOverlay from './AllowedMoveOverlay';
import { useGameStore } from '../../stores/useGameStore';
import { EndGameBagdeFactory } from '../../functions/endGameBadgeFactory';

const Case = ({
  color,
  piece,
  pieceObject,
  index,
  legalMoveDisplay,
  handleClick,
}: CaseProps): ReactElement => {
  const isThereAPiece = piece !== null;
  const { game } = useGameStore();
  let badge = null;
  console.log('4', piece, pieceObject, '4');
  console.log(game);
  if (pieceObject?.notation.toLowerCase() === 'k' && game?.status === 'over') {
    const badgeFactory = new EndGameBagdeFactory();
    badge = badgeFactory.createBadge(game?.result, pieceObject?.notation);
  }

  return (
    <div
      className={`${
        color === 'black' ? 'bg-orange-900' : 'bg-orange-400'
      } relative w-[60px] h-[60px] text-[30px] flex items-center justify-center border border-transparent hover:border-amber-400 overflow-hidden`}
      onClick={() => handleClick(pieceObject, index)}
    >
      {piece}
      {legalMoveDisplay && <AllowedMoveOverlay isThereAPiece={isThereAPiece} />}
      {badge}
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
  handleClick: (targetPiece: Piece | null, targetIndex: number) => void;
};
