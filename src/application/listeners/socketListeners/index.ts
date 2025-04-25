import { SocketService } from '../../services/SocketService';
import {
  registerGameListeners,
  unregisterGameListeners,
} from './gameListeners';
import {
  registerInvitationListeners,
  unregisterInvitationListeners,
} from './invitationsListeners';

export const registerSocketListeners = (socketService: SocketService) => {
  registerInvitationListeners(socketService);
  registerGameListeners(socketService);
};

export const unregisterSocketListeners = (socketService: SocketService) => {
  unregisterInvitationListeners(socketService);
  unregisterGameListeners(socketService);
};
