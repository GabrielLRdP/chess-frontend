import {
  Color,
  GameStatus,
  Position,
  Result,
} from '../../../shared/types/global_types';
import { Piece } from '../piece/Piece';
import { getEnPassantCaseFromFen } from '../../utils/getEnpassantCaseFromFen';
import { getKing } from '../../../shared/utils/getKing';
import { toggleColor } from '../../../shared/utils/toggleColor';

export class Game {
  constructor(
    public initialFen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  ) {}
  public turn: number = Number(this.initialFen.split(' ')[5]);
  public enPassantCase: Position | null = getEnPassantCaseFromFen(
    this.initialFen
  );
  public playerTurn: Color =
    this.initialFen.split(' ')[1] === 'w' ? 'white' : 'black';
  public lastMove: Position[] | null = null;
  public status: GameStatus = 'notStarted';
  public result: Result = null;
  public halfMoves = parseInt(this.initialFen.split(' ')[4]);
  public repetitionHistory: Map<string, number> = new Map();

  public update(updates: Updates) {
    this.playerTurn = updates.playerTurn || this.playerTurn;
    this.turn = updates.turn || this.turn;
    this.halfMoves = updates.halfMoves || this.halfMoves;
    this.status = updates.status || this.status;
    this.enPassantCase = updates.enPassantCase || this.enPassantCase;

    return this;
  }

  public setStatus(currentPosition: (Piece | null)[], resetMoveCount: boolean) {
    console.log('ici');
    const simplifiedFen = this.positionToSimplifiedFen(currentPosition);
    if (resetMoveCount) {
      this.repetitionHistory.clear();
    } else {
      this.repetitionHistory.set(
        simplifiedFen,
        (this.repetitionHistory.get(simplifiedFen) || 0) + 1
      );
    }
    const repetitionCount = this.repetitionHistory.get(simplifiedFen) || 0;
    if (repetitionCount >= 3) {
      this.status = 'over';
      this.result = 'draw';
      return;
    }
    if (this.halfMoves >= 50) {
      this.status = 'over';
      this.result = 'draw';
      return;
    }
    const oppositeKing = getKing(currentPosition, toggleColor(this.playerTurn));
    console.log(oppositeKing);
    if (oppositeKing.isCheckMate(currentPosition, this.enPassantCase)) {
      this.status = 'over';
      this.result = this.playerTurn === 'white' ? 'whiteWins' : 'blackWins';
    }
    if (!oppositeKing.canAnyTeamMateMove(currentPosition, this.enPassantCase)) {
      this.status = 'over';
      this.result = 'draw';
      return;
    }
    return this;
  }

  private positionToSimplifiedFen(position: Array<Piece | null>): string {
    return position
      .map((element) => {
        if (element === null) {
          return '0';
        } else {
          return element.notation;
        }
      })
      .join('');
  }
}

type Updates = {
  playerTurn?: Color;
  turn?: number;
  halfMoves?: number;
  status?: GameStatus;
  enPassantCase?: Position | null;
};
