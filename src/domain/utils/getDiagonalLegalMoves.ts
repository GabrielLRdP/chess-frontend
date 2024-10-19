import { Color, Position } from '../../shared/types/global_types';
import { coordToIndex } from '../../shared/utils/coordToIndex';
import { isThereAPiece } from '../../shared/utils/isThereAPiece';
import { Piece } from '../entities/piece/Piece';

export const getDiagonalLegalMoves = (
  piecePosition: number[],
  position: Array<Piece | null>,
  pieceColor: Color
) => {
  const result: Position[] = [];

  let frontLeftIndex = 1;
  while (
    piecePosition[1] + frontLeftIndex < 8 &&
    piecePosition[0] - frontLeftIndex >= 0
  ) {
    const caseTocheck = [
      piecePosition[0] - frontLeftIndex,
      piecePosition[1] + frontLeftIndex,
    ];
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
    frontLeftIndex++;
  }
  let frontRightIndex = 1;
  while (
    piecePosition[1] + frontRightIndex < 8 &&
    piecePosition[0] + frontRightIndex < 8
  ) {
    const caseTocheck = [
      piecePosition[0] + frontRightIndex,
      piecePosition[1] + frontRightIndex,
    ];
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
    frontRightIndex++;
  }
  let backRightIndex = 1;
  while (
    piecePosition[1] - backRightIndex >= 0 &&
    piecePosition[0] + backRightIndex < 8
  ) {
    const caseTocheck = [
      piecePosition[0] + backRightIndex,
      piecePosition[1] - backRightIndex,
    ];
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
    backRightIndex++;
  }
  let backLeftIndex = 1;
  while (
    piecePosition[1] - backLeftIndex >= 0 &&
    piecePosition[0] - backLeftIndex >= 0
  ) {
    const caseTocheck = [
      piecePosition[0] - backLeftIndex,
      piecePosition[1] - backLeftIndex,
    ];
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
    backLeftIndex++;
  }

  return result;
};
