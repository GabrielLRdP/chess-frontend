import { useContext } from 'react';
import {
  ChessBoardContext,
  ChessBoardContextType,
} from '../context/chessBoardContext';

const useChessBoardContext = (): ChessBoardContextType => {
  const context = useContext(ChessBoardContext);
  if (!context) {
    throw new Error(
      'useChessBoardContext must be used within a ChessBoardProvider'
    );
  }
  return context;
};

export default useChessBoardContext;
