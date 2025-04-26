import {
  Color,
  GameStatus,
  Position,
  Result,
} from '../../../shared/types/global_types';
import { Piece } from '../piece/Piece';
import { getEnPassantCaseFromFen } from '../../utils/getEnpassantCaseFromFen';
import { getKing } from '../../../shared/utils/getKing';
import { Player } from '../player/Player';

export class Game {
  public initialPosition: string;
  public isOnlineGame: boolean;

  constructor(
    public initialFen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    public player?: Player,
    public opponent?: Player
  ) {
    const firstSpaceInFenIndex = this.initialFen.indexOf(' ');
    const inititalPosition = this.initialFen.slice(0, firstSpaceInFenIndex);
    this.initialPosition = inititalPosition;
    this.isOnlineGame = !!this.player;
  }
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

  public updateStatus(position: (Piece | null)[], resetMoveCount: boolean) {
    const simplifiedFen = this.positionToSimplifiedFen(position);
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
    const oppositeKing = getKing(position, this.playerTurn);
    if (oppositeKing.isCheckMate(position, this.enPassantCase)) {
      this.status = 'over';
      this.result = this.playerTurn === 'white' ? 'whiteWins' : 'blackWins';
      return;
    }
    if (!oppositeKing.canAnyTeamMateMove(position, this.enPassantCase)) {
      this.status = 'over';
      this.result = 'draw';
      return;
    }
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
