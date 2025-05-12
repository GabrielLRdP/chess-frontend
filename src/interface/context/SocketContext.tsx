import { SocketService } from '../../application/services/SocketService';
import { createContext, ReactNode, useEffect } from 'react';
import useAuthContext from '../hooks/context/useAuthContext';
import {
  registerSocketListeners,
  unregisterSocketListeners,
} from '../../application/listeners/socketListeners/index';
import { useOnGameStartedCallback } from '../hooks/socket/useOnGameStartedCallBack';
import { useOnOpponentMoveCallback } from '../hooks/socket/useOnOpponentMoveCallback';

export interface SocketContextType {
  socketService: SocketService;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext();
  const socketService = SocketService.getInstance();
  const onGameStartedCallback = useOnGameStartedCallback();
  const onOpponentMoveCallback = useOnOpponentMoveCallback();

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
    socketService.setOnOpponentMoveCallback(onOpponentMoveCallback);
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
