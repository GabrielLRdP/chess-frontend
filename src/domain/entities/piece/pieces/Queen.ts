import { Position } from "../../../../shared/types/global_types.ts";
import { Piece } from "../Piece.ts";

export class Queen extends Piece {
  getLegalMoves(): Array<Position> {
    return [[0, 1]];
  }
}
