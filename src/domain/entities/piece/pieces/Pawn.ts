import { Position, Color } from "../../../../shared/types/global_types.ts";
import { Piece } from "../Piece.ts";

export class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position, color === "white" ? "P" : "p");
  }
  getLegalMoves(): Array<Position> {
    if (this.color === "white") {
      return [[this.position[0], this.position[1] + 1]];
    } else {
      return [[this.position[0], this.position[1] - 1]];
    }
  }
}
