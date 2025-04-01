import { Piece } from '../../domain/entities/piece/Piece';

export type Position = number[];
export type Color = 'black' | 'white';
export type PieceType = 'r' | 'n' | 'b' | 'q' | 'k' | 'p' | null;
export type Board = (Piece | null)[];
export type GameStatus = 'onGoing' | 'notStarted' | 'over';
export type Result = 'draw' | 'whiteWins' | 'blackWins' | null;
export type httpMethod = 'get' | 'post' | 'delete' | 'put';
