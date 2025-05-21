import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/ChessBoardContext';
import ChessBoard from '../../components/ChessBoard/ChessBoard';

const OnlineGamePage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <div className='px-7 flex justify-center items-center'>
        <ChessBoard>
          <div className='flex space-x-4 w-full'></div>
        </ChessBoard>
      </div>
    </ChessBoardProvider>
  );
};

export default OnlineGamePage;
