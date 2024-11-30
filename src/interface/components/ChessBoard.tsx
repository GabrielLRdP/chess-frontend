import { ReactElement, useEffect, useState } from 'react';
import positionToIcons from '../functions/positionToIcons';
import positionToCaseList from '../functions/positionToCaseList';
import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { usePositionStore } from '../store/usePositionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { Position } from '../../shared/types/global_types';
import InfoSection from './InfoSection';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';
import { useGameStore } from '../store/useGameStore';
import { Game } from '../../domain/entities/game/Game';
import PromotionModal from './PromotionModal';
import { usePromotionStore } from '../store/usePromotionStore';
import useChessBoardContext from '../hooks/useChessBoardContext';
import { toggleColor } from '../../shared/utils/toggleColor';
import useHandleCaseClick from '../hooks/useHandleCaseClick';

const ChessBoard = (): ReactElement => {
  const [caseList, setCaseList] = useState<Array<ReactElement>>([]);
  const { currentPosition, setPosition, setInitialPosition } =
    usePositionStore();
  const defaultInitialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();
  const { setTakenPieces } = useTakenPiecesStore();
  const { game, setGame } = useGameStore();
  const { isModalOpen } = usePromotionStore();
  const { side, setSide } = useChessBoardContext();
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

  const handleClick = () => {
    const pieceList = ChessBoardService.initializeBoard(defaultInitialFen);
    setGame(new Game());
    setInitialPosition(pieceList);
    setPosition(pieceList);
    setSelectedPiece(null);
    setTakenPieces([]);
  };

  const handleSwitchSide = () => {
    setSide(toggleColor(side));
  };

  game && console.log('halfMoves : ', game.halfMoves);

  return (
    <div className='flex flex-col relative items-center justify-center w-[480px] m-auto mt-[100px]'>
      {isModalOpen && <PromotionModal />}
      <InfoSection color={side} key={Math.random()} />
      <section className='flex w-[480px] flex-wrap m-auto rounded-lg overflow-hidden'>
        {caseList}
      </section>
      <InfoSection color={toggleColor(side)} key={Math.random()} />
      <div className='flex gap-1'>
        <button
          type='button'
          onClick={handleClick}
          className='w-[200px] mt-11 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Initialiser l'échiquier
        </button>
        <button
          type='button'
          onClick={handleSwitchSide}
          className='w-[200px] mt-11 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Tourner l'échiquier
        </button>
      </div>
    </div>
  );
};

export default ChessBoard;
