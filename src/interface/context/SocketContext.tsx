import { SocketService } from '../../application/services/SocketService';
import { createContext, ReactNode, useEffect, useRef } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import {
  registerSocketListeners,
  unregisterSocketListeners,
} from '../../application/listeners/socketListeners/index';

export interface SocketContextType {
  socketService: SocketService;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  const socketServiceRef = useRef(new SocketService());
  const socketService = socketServiceRef.current;

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

  useEffect(() => {
    registerSocketListeners(socketService);

    return () => unregisterSocketListeners(socketService);
  }, []);

  return (
    <SocketContext.Provider value={{ socketService }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
