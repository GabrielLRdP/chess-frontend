import { ReactElement } from 'react';
import Case from '../Pages/chessBoardPage/components/Case';
import { Color } from '../../shared/types/global_types';
import { toggleColor } from '../../shared/utils/toggleColor';
import { Piece } from '../../domain/entities/piece/Piece';
import { Position } from '../../shared/types/global_types';
import { indexToCoord } from '../../shared/utils/indexToCoord';

const positionToCaselist = (
  translatedPosition: Array<ReactElement | null>,
  position: Array<Piece | null>,
  legalMoves: Position[],
  side: Color,
  handleCaseClick: (targetPiece: Piece | null, targetIndex: number) => void
) => {
  const caseList = [];
  let color: Color = 'white';
  for (let i = 0; i < 64; i++) {
    const casePosition = indexToCoord(i);
    caseList.push(
      <Case
        color={color}
        piece={translatedPosition[i]}
        pieceObject={position[i]}
        index={i}
        key={color + position + i}
        handleClick={handleCaseClick}
        legalMoveDisplay={legalMoves.some((element) => {
          return (
            element[0] === casePosition[0] && element[1] === casePosition[1]
          );
        })}
      />
    );
    color = (i + 1) % 8 === 0 ? color : toggleColor(color);
    if ((i + 1) % 8 !== 0) {
      casePosition[0]++;
    } else {
      casePosition[0] = 0;
      casePosition[1]--;
    }
  }
  const result = [...caseList];
  return side === 'white' ? result : result.reverse();
};

export default positionToCaselist;
