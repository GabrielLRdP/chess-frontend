import { useContext } from 'react';
import { SocketContext, SocketContextType } from '../context/SocketContext';

const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      'useSocketContext must be used within a AuthContextProvider'
    );
  }
  return context;
};

export default useSocketContext;
