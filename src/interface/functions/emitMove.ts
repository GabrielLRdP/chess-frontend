import { Position } from '../../shared/types/global_types';
import { SocketService } from '../../application/services/SocketService';

export const emitMove = (
  isOnline: boolean,
  roomId: string | undefined,
  previousPiecePosition: Position,
  newPiecePosition: Position,
  promotion: string = ''
): void => {
  if (isOnline) {
    const socketService = SocketService.getInstance();
    socketService.emit('make-move', {
      roomId: roomId,
      previousPiecePosition: previousPiecePosition,
      newPiecePosition: newPiecePosition,
      promotion: promotion,
    });
  }
};
