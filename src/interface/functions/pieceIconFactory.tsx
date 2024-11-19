import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChessPawn,
  faChessKing,
  faChessQueen,
  faChessBishop,
  faChessKnight,
  faChessRook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Piece } from '../../domain/entities/piece/Piece';
import { ReactElement } from 'react';

export class PieceIconFactory {
  createIcon(
    notation: Piece['notation'] | null,
    additionnalStyle?: string
  ): ReactElement | null {
    if (notation === null) {
      return null;
    }
    const color = notation.toLowerCase() === notation ? 'black' : 'white';
    const icons: tradType = {
      p: faChessPawn,
      k: faChessKing,
      q: faChessQueen,
      b: faChessBishop,
      n: faChessKnight,
      r: faChessRook,
    };
    return (
      <FontAwesomeIcon
        icon={icons[notation.toLowerCase()]}
        className={`text-${color} ${additionnalStyle}`}
      />
    );
  }
}

type tradType = Record<string, IconDefinition>;
