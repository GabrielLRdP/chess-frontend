import { SocketService } from '../../services/SocketService';
import { handleReceiveInvitation } from '../../handlers/socketHandlers/handleReceiveInvitation';

export const registerInvitationListeners = (socketService: SocketService) => {
  socketService.on('receive-invitation', handleReceiveInvitation);
};

export const unregisterInvitationListeners = (socketService: SocketService) => {
  socketService.off('receive-invitation', handleReceiveInvitation);
};
