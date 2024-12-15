import { ReactElement } from 'react';
import { ChessBoardProvider } from '../../context/chessBoardContext';
import ChessBoard from './components/ChessBoard';

const ChessboardPage = (): ReactElement => {
  return (
    <ChessBoardProvider>
      <ChessBoard />
    </ChessBoardProvider>
  );
};

export default ChessboardPage;
