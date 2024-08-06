import { Position } from "../../../../shared/types/global_types.ts";
import { Piece } from "../Piece.ts";

export class Knight extends Piece {
  getLegalMoves(): Array<Position> {
    return [[0, 1]];
  }
}
