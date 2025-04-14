import { SocketService } from '../../services/SocketService';
import {
  registerInvitationListeners,
  unregisterInvitationListeners,
} from './invitationsListeners';

export const registerSocketListeners = (socketService: SocketService) => {
  registerInvitationListeners(socketService);
};

export const unregisterSocketListeners = (socketService: SocketService) => {
  unregisterInvitationListeners(socketService);
};
