import { King } from '../../../domain/entities/piece/pieces/King';
import { Queen } from '../../../domain/entities/piece/pieces/Queen';
import { Pawn } from '../../../domain/entities/piece/pieces/Pawn';
import { Rook } from '../../../domain/entities/piece/pieces/Rook';
import { Knight } from '../../../domain/entities/piece/pieces/Knight';
import { Bishop } from '../../../domain/entities/piece/pieces/Bishop';

export const fenToObjectTrad: PieceTranslation = {
  p: {
    object: Pawn,
    color: 'black',
  },
  P: {
    object: Pawn,
    color: 'white',
  },
  n: {
    object: Knight,
    color: 'black',
  },
  N: {
    object: Knight,
    color: 'white',
  },
  b: {
    object: Bishop,
    color: 'black',
  },
  B: {
    object: Bishop,
    color: 'white',
  },
  r: {
    object: Rook,
    color: 'black',
  },
  R: {
    object: Rook,
    color: 'white',
  },
  q: {
    object: Queen,
    color: 'black',
  },
  Q: {
    object: Queen,
    color: 'white',
  },
  k: {
    object: King,
    color: 'black',
  },
  K: {
    object: King,
    color: 'white',
  },
  0: '0',
};

type PieceTranslation = Record<string, PieceDescription | '0' | null>;

export type PieceDescription = {
  object:
    | typeof Pawn
    | typeof Knight
    | typeof Bishop
    | typeof Rook
    | typeof Queen
    | typeof King;
  color: 'black' | 'white';
};
