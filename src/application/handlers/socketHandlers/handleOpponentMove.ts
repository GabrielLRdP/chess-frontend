import { Position } from '../../../shared/types/global_types';
import { SocketService } from '../../services/SocketService';

export const handleOpponentMove = (data: OpponentMoveData) => {
  const socketService = SocketService.getInstance();
  if (socketService.onOpponentMoveCallback) {
    socketService.onOpponentMoveCallback(data);
  }
};

export type OpponentMoveData = {
  previousPiecePosition: Position;
  newPiecePosition: Position;
  promotion: string;
};
