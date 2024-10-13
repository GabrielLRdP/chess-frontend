import { Position, Color } from "../../../../shared/types/global_types.ts";
import { Piece } from "../Piece.ts";

export class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === "white" ? "K" : "k");
  }
  getLegalMoves(): Array<Position> {
    return [[0, 1]];
  }
}
