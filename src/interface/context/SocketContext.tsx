import { SocketService } from '../../application/services/SocketService';
import { createContext, ReactNode, useEffect } from 'react';
import useAuthContext from '../hooks/context/useAuthContext';
import {
  registerSocketListeners,
  unregisterSocketListeners,
} from '../../application/listeners/socketListeners/index';
import { useOnGameStartedCallBack } from '../hooks/socket/useOneGameStartedCallBack';

export interface SocketContextType {
  socketService: SocketService;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  const socketService = SocketService.getInstance();
  const onGameStartedCallback = useOnGameStartedCallBack();

  useEffect(() => {
    if (isAuthenticated) {
      socketService.connect();
    } else {
      socketService.disconnect();
    }

    return () => {
      socketService.disconnect();
    };
  }, [isAuthenticated]);

  useEffect(() => {
    socketService.setOnGameStartedCallback(onGameStartedCallback);
    registerSocketListeners(socketService);

    return () => {
      unregisterSocketListeners(socketService);
    };
  }, [onGameStartedCallback]);

  return (
    <SocketContext.Provider value={{ socketService }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
