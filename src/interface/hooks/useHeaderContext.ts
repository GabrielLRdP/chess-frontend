import { useContext } from 'react';
import { HeaderContext, HeaderContextType } from '../context/headerContext';

const useHeaderContext = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error(
      'useChessBoardContext must be used within a ChessBoardProvider'
    );
  }
  return context;
};

export default useHeaderContext;
