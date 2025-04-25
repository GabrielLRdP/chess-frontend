import { SocketService } from '../../services/SocketService';
import { handleStartGame } from '../../handlers/socketHandlers/handleStartGame';

export const registerGameListeners = (socketService: SocketService) => {
  socketService.on('game-started', handleStartGame);
};

export const unregisterGameListeners = (socketService: SocketService) => {
  socketService.off('game-started', handleStartGame);
};
