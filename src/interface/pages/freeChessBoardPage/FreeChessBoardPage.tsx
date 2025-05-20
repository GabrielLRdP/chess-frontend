import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/ChessBoardContext';
import ChessBoard from '../../components/ChessBoard/ChessBoard';
import NewGameButton from './components/NewGameButton';
import SwitchSideButton from './components/SwitchSideButton';

const FreeChessBoardPage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <ChessBoard>
        <div className='flex space-x-4 w-full h-[80%] pb-28'>
          <NewGameButton />
          <SwitchSideButton />
        </div>
      </ChessBoard>
    </ChessBoardProvider>
  );
};

export default FreeChessBoardPage;
