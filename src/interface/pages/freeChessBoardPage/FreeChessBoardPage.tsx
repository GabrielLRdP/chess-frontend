import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/ChessBoardContext';
import ChessBoard from '../../components/ChessBoard/ChessBoard';
import NewGameButton from './components/NewGameButton';
import SwitchSideButton from './components/SwitchSideButton';

const FreeChessBoardPage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <div className='px-7 flex justify-center items-center'>
        <ChessBoard>
          <div className='flex w-full space-x-4 h-[80%] pb-28'>
            <NewGameButton />
            <SwitchSideButton />
          </div>
        </ChessBoard>
      </div>
    </ChessBoardProvider>
  );
};

export default FreeChessBoardPage;
