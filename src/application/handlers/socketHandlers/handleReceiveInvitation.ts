import { triggerToast } from '../../../interface/functions/triggerToast';

export const handleReceiveInvitation = (data: string) => {
  console.log('📨 Invitation reçue :', data);
  triggerToast('receivedInvitation');
};
