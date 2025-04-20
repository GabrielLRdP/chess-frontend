import { SocketService } from '../../services/SocketService';
import { handleReceiveInvitation } from '../../handlers/socketHandlers/handleReceiveInvitation';
import { handleInvitationResponse } from '../../handlers/socketHandlers/handleInvitationResponse';

export const registerInvitationListeners = (socketService: SocketService) => {
  socketService.on('receive-invitation', handleReceiveInvitation);
  socketService.on('invitation-response', handleInvitationResponse);
};

export const unregisterInvitationListeners = (socketService: SocketService) => {
  socketService.off('receive-invitation', handleReceiveInvitation);
  socketService.off('invitation-response', handleInvitationResponse);
};
