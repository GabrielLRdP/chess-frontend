import { SocketService } from '../../application/services/SocketService';
import { createContext, ReactNode, useEffect } from 'react';
import useAuthContext from '../hooks/useAuthContext';

export interface SocketContextType {
  socketService: SocketService;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);
const socketService = new SocketService();

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    if (isAuthenticated) {
      socketService.connect();

      return () => {
        socketService.disconnect();
      };
    } else {
      socketService.disconnect();
    }
  }, [isAuthenticated]);
  return (
    <SocketContext.Provider value={{ socketService }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
