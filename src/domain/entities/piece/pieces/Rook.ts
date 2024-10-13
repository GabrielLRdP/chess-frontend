import { Position, Color } from "../../../../shared/types/global_types.ts";
import { Piece } from "../Piece.ts";

export class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === "white" ? "R" : "r");
  }
  getLegalMoves(): Array<Position> {
    return [[0, 1]];
  }
}
