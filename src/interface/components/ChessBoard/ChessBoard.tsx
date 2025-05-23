import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import positionToIcons from '../../functions/positionToIcons';
import positionToCaseList from '../../functions/positionToCaseList';
import { usePositionStore } from '../../stores/usePositionStore';
import { useSelectedPieceStore } from '../../stores/useSelectedPieceStore';
import { Position } from '../../../shared/types/global_types';
import InfoSection from './InfoSection';
import { useGameStore } from '../../stores/useGameStore';
import PromotionModal from './PromotionModal';
import { usePromotionStore } from '../../stores/usePromotionStore';
import useChessBoardContext from '../../hooks/context/useChessBoardContext';
import { toggleColor } from '../../../shared/utils/toggleColor';
import useHandleCaseClick from '../../hooks/useHandleCaseClick';

const ChessBoard = ({ children }: PropsWithChildren): ReactElement => {
  const [caseList, setCaseList] = useState<Array<ReactElement>>([]);
  const { currentPosition } = usePositionStore();
  const { selectedPiece } = useSelectedPieceStore();
  const { game } = useGameStore();
  const { isModalOpen } = usePromotionStore();
  const { side } = useChessBoardContext();
  const handleCaseClick = useHandleCaseClick();

  useEffect(() => {
    let legalMoves: Position[] = [];
    if (selectedPiece) {
      legalMoves = selectedPiece?.getLegalMoves(
        currentPosition,
        game ? game.enPassantCase : null
      );
    }
    const icons = positionToIcons(currentPosition);
    setCaseList(
      positionToCaseList(
        icons,
        currentPosition,
        legalMoves,
        side,
        handleCaseClick
      )
    );
  }, [currentPosition, selectedPiece, side]);

  return (
    <div className='flex flex-col relative items-center justify-center w-full max-w-[640px] m-auto mt-[20px]'>
      {isModalOpen && <PromotionModal />}
      <InfoSection color={side} key={Math.random()} />

      <section className='w-full aspect-square flex flex-wrap border-[6px] border-[#4b3621] shadow-lg box-content overflow-hidden'>
        {caseList}
      </section>

      <InfoSection color={toggleColor(side)} key={Math.random()} />
      <div className='flex space-x-4 w-full' />
      {children}
    </div>
  );
};

export default ChessBoard;
