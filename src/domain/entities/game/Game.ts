import { getEnPassantCaseFromFen } from '../../utils/getEnpassantCaseFromFen';

export class Game {
  constructor(
    public initialFen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  ) {}

  public enPassantCase = getEnPassantCaseFromFen(this.initialFen);
}
