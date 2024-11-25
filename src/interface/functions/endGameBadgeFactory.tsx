import { ReactElement } from 'react';
import { faHashtag, faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Result } from '../../shared/types/global_types';
export class EndGameBagdeFactory {
  createBadge(
    gameResult: Result | undefined,
    pieceNotation: string | undefined
  ): ReactElement | null {
    if (
      gameResult === null ||
      gameResult === 'draw' ||
      !pieceNotation ||
      pieceNotation.toLowerCase() !== 'k'
    ) {
      return null;
    }
    const winner = gameResult === 'whiteWins' ? 'white' : 'black';
    const pieceColor =
      pieceNotation.toLowerCase() !== pieceNotation ? 'white' : 'black';
    const result = winner === pieceColor ? 'win' : 'lose';

    const props = {
      badgeIcon: result === 'win' ? faCrown : faHashtag,
      background: result === 'win' ? 'bg-yellow-300' : 'bg-gray-200',
      rotate: result === 'win' ? '12' : 'O',
    };

    return (
      <div
        className={`${props.background} rotate-${props.rotate} rounded-full absolute w-[40%] h-[40%] right-1 top-1 text-[80%] flex items-center justify-center `}
      >
        <FontAwesomeIcon icon={props.badgeIcon} size='2xs' />
      </div>
    );
  }
}
