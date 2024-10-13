import { Color, Position } from "../../../shared/types/global_types";

export abstract class Piece {
  constructor(
    readonly color: Color,
    public position: Position,
    readonly notation: string
  ) {}
  abstract getLegalMoves(): Array<Position>;
}
