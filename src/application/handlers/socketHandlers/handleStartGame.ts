import { SocketService } from '../../services/SocketService';

export const handleStartGame = (data: StartGameData) => {
  const socketService = SocketService.getInstance();
  if (socketService.onGameStartedCallback) {
    socketService.onGameStartedCallback(data);
  }
};

export type Player = {
  userId: string;
  userName: string;
  color: 'white' | 'black';
};

export type StartGameData = {
  roomId: string;
  players: [Player, Player];
};
