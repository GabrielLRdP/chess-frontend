import { SocketService } from '../../services/SocketService';
import { handleStartGame } from '../../handlers/socketHandlers/handleStartGame';
import { handleOpponentMove } from '../../handlers/socketHandlers/handleOpponentMove';

export const registerGameListeners = (socketService: SocketService) => {
  socketService.on('game-started', handleStartGame);
  socketService.on('opponent-move', handleOpponentMove);
};

export const unregisterGameListeners = (socketService: SocketService) => {
  socketService.off('game-started', handleStartGame);
  socketService.off('opponent-move', handleOpponentMove);
};
