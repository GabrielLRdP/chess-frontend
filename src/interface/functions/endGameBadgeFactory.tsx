import { ReactElement } from 'react';
import {
  faHashtag,
  faCrown,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Result } from '../../shared/types/global_types';
export class EndGameBagdeFactory {
  createBadge(
    gameResult: Result | undefined,
    pieceNotation: string | undefined
  ): ReactElement | null {
    if (!gameResult || !pieceNotation || pieceNotation.toLowerCase() !== 'k') {
      return null;
    }
    const winner = gameResult === 'whiteWins' ? 'white' : 'black';
    const pieceColor =
      pieceNotation.toLowerCase() !== pieceNotation ? 'white' : 'black';

    const icons = {
      win: faCrown,
      lose: faHashtag,
      draw: faEquals,
    };

    let badgeIcon;
    let background;
    let rotate;

    if (gameResult === 'draw') {
      badgeIcon = icons.draw;
      background = 'bg-gray-200';
    } else {
      const didIWin = winner === pieceColor;
      badgeIcon = didIWin ? icons.win : icons.lose;
      background = didIWin ? 'bg-yellow-300' : 'bg-gray-600';
      rotate = didIWin && '12';
    }

    const props = {
      badgeIcon: badgeIcon,
      background: background,
      rotate: rotate,
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
