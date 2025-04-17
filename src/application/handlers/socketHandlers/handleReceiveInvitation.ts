import { triggerToast } from '../../../interface/functions/triggerToast';

export const handleReceiveInvitation = (data: Record<string, string>) => {
  console.log('📨 Invitation reçue :', data);
  triggerToast('receivedInvitation', { userName: data.fromUserName });
};
