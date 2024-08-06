import { Color, Position } from "../../../shared/types/global_types";

export abstract class Piece {
  constructor(public color: Color, public position: Position) {}
  abstract getLegalMoves(): Array<Position>;
}
