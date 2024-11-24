import {
  Color,
  GameStatus,
  Position,
} from '../../../shared/types/global_types';
import { getEnPassantCaseFromFen } from '../../utils/getEnpassantCaseFromFen';

export class Game {
  constructor(
    public initialFen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  ) {}
  public turn: number = Number(this.initialFen.split(' ')[5]);
  public enPassantCase = getEnPassantCaseFromFen(this.initialFen);
  public playerTurn: Color =
    this.initialFen.split(' ')[1] === 'w' ? 'white' : 'black';
  public lastMove: Position | null = null;
  public status: GameStatus = 'notStarted';
}
