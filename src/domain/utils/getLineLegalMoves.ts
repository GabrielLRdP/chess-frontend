import { Color, Position } from '../../shared/types/global_types';
import { coordToIndex } from '../../shared/utils/coordToIndex';
import { isThereAPiece } from '../../shared/utils/isThereAPiece';
import { Piece } from '../entities/piece/Piece';

export const getLineLegalMoves = (
  piecePosition: number[],
  position: Array<Piece | null>,
  pieceColor: Color
) => {
  const result: Position[] = [];

  let frontIndex = 1;
  while (piecePosition[1] + frontIndex < 8) {
    const caseTocheck = [piecePosition[0], piecePosition[1] + frontIndex];
    if (!isThereAPiece(caseTocheck, position)) {
      result.push(caseTocheck);
    } else {
      if (position[coordToIndex(caseTocheck)]?.color === pieceColor) {
        break;
      } else {
        result.push(caseTocheck);
        break;
      }
    }
    frontIndex++;
  }
  let backIndex = 1;
  while (piecePosition[1] - backIndex >= 0) {
    const caseTocheck = [piecePosition[0], piecePosition[1] - backIndex];
    if (!isThereAPiece(caseTocheck, position)) {
      result.push(caseTocheck);
    } else {
      if (position[coordToIndex(caseTocheck)]?.color === pieceColor) {
        break;
      } else {
        result.push(caseTocheck);
        break;
      }
    }
    backIndex++;
  }
  let leftIndex = 1;
  while (piecePosition[0] - leftIndex >= 0) {
    const caseTocheck = [piecePosition[0] - leftIndex, piecePosition[1]];
    if (!isThereAPiece(caseTocheck, position)) {
      result.push(caseTocheck);
    } else {
      if (position[coordToIndex(caseTocheck)]?.color === pieceColor) {
        break;
      } else {
        result.push(caseTocheck);
        break;
      }
    }
    leftIndex++;
  }
  let rightIndex = 1;
  while (piecePosition[0] + rightIndex < 8) {
    const caseTocheck = [piecePosition[0] + rightIndex, piecePosition[1]];
    if (!isThereAPiece(caseTocheck, position)) {
      result.push(caseTocheck);
    } else {
      if (position[coordToIndex(caseTocheck)]?.color === pieceColor) {
        break;
      } else {
        result.push(caseTocheck);
        break;
      }
    }
    rightIndex++;
  }

  return result;
};
