import { ReactElement, useEffect, useState } from 'react';
import positionToIcons from '../functions/positionToIcons';
import positionToCaseList from '../functions/positionToCaseList';
import { ChessBoardService } from '../../application/services/ChesBoardService/ChessBoardService';
import { usePositionStore } from '../store/usePositionStore';
import { useSelectedPieceStore } from '../store/useSelectedPieceStore';
import { Position } from '../../shared/types/global_types';

const ChessBoard = (): ReactElement => {
  const [caseList, setCaseList] = useState<Array<ReactElement>>([]);
  const { initialPosition, setInitialPosition } = usePositionStore();
  const defaultInitialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  const { selectedPiece, setSelectedPiece } = useSelectedPieceStore();

  useEffect(() => {
    let legalMoves: Position[] = [];
    if (selectedPiece) {
      legalMoves = selectedPiece?.getLegalMoves(initialPosition);
    }
    const icons = positionToIcons(initialPosition);
    setCaseList(() => positionToCaseList(icons, initialPosition, legalMoves));
  }, [initialPosition, selectedPiece]);

  const handleClick = () => {
    const pieceList = ChessBoardService.initializeBoard(defaultInitialFen);
    setInitialPosition(pieceList);
    setSelectedPiece(null);
  };

  return (
    <div className='flex flex-col items-center scale-150'>
      <section className='flex w-[324px] flex-wrap m-auto mt-[100px] border-solid border-2 border-sky-500'>
        {caseList}
      </section>
      <button
        type='button'
        onClick={handleClick}
        className='w-[200px] mt-11 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
      >
        Initialiser l'échiquier
      </button>
    </div>
  );
};

export default ChessBoard;
