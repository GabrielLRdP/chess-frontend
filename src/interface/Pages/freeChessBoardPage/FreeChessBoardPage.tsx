import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/ChessBoardContext';
import ChessBoard from '../../components/ChessBoard/ChessBoard';
import NewGameButton from './components/NewGameButton';
import SwitchSideButton from './components/SwitchSideButton';

const FreeChessboardPage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <ChessBoard>
        <div className='flex space-x-4 w-full'>
          <NewGameButton />
          <SwitchSideButton />
        </div>
      </ChessBoard>
    </ChessBoardProvider>
  );
};

export default FreeChessboardPage;
