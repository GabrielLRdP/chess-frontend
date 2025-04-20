import { toast as sonnerToast } from 'sonner';
import { SocketService } from '../../../../application/services/SocketService';

export const respondInvitation = (
  fromSocketId: string,
  socketService: SocketService,
  accepted: boolean
): void => {
  socketService.emit('respond-invitation', {
    opponentSocketId: fromSocketId,
    accepted: accepted,
  });
  sonnerToast.dismiss();
};
