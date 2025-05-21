import { triggerToast } from '../../../interface/functions/triggerToast';

export const handleReceiveInvitation = (data: InvitationData) => {
  triggerToast('receivedInvitation', {
    fromUserName: data.fromUserName,
    fromSocketId: data.fromSocketId,
  });
};

type InvitationData = {
  fromUserName: string;
  fromUserId: string;
  fromSocketId: string;
};
