import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/ChessBoardContext';
import ChessBoard from '../../components/ChessBoard/ChessBoard';

const OnlineGamePage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <ChessBoard>
        <div className='flex space-x-4 w-full'></div>
      </ChessBoard>
    </ChessBoardProvider>
  );
};

export default OnlineGamePage;
