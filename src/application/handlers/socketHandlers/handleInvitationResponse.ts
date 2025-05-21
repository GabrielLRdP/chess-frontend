import { triggerToast } from '../../../interface/functions/triggerToast';

export const handleInvitationResponse = (data: InvitationData) => {
  triggerToast('invitationResponse', {
    fromUserName: data.fromUserName,
    fromSocketId: data.fromSocketId,
  });
};

type InvitationData = {
  fromUserName: string;
  fromUserId: string;
  fromSocketId: string;
};
