import { triggerToast } from '../../../interface/functions/toastFactory';

export const handleReceiveInvitation = (data: string) => {
  console.log('📨 Invitation reçue :', data);
  triggerToast('receivedInvitation');
  // handleReceiveInvitation(data) si tu veux
};
