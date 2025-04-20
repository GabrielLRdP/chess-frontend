import GenericToast from './GenericToast';
import { toast as sonnerToast } from 'sonner';
import { ToastProps, ToastType } from '../../functions/triggerToast';
import { respondInvitation } from './actions/respondInvitation';

export const toastMap = <T extends Record<string, unknown>>(
  type: ToastType,
  additionalData?: T
): ToastEntry => {
  const map: Record<ToastType, ToastEntry> = {
    login: {
      component: GenericToast,
      props: {
        title: 'Vous êtes connecté !',
        description: `Bonjour ${additionalData?.userName}, vous pouvez maintenant jouer en ligne`,
      },
    },
    signup: {
      component: GenericToast,
      props: {
        title: `Inscription réussie, bienvenue ${additionalData?.userName} !`,
        description: 'Vous pouvez maintenant jouer en ligne',
      },
    },
    sentInvitation: {
      component: GenericToast,
      props: {
        title: 'Invitation envoyée',
        description: 'En attente de la réponse',
      },
    },

    receivedInvitation: {
      component: GenericToast,
      props: {
        title: 'Invitation reçue',
        description: `${additionalData?.fromUserName} vous défie`,
        buttons: [
          {
            action: (socketService) =>
              respondInvitation(
                additionalData?.fromSocketId as string,
                socketService,
                true
              ),
            type: 'accept',
          },
          {
            action: (socketService) =>
              respondInvitation(
                additionalData?.fromSocketId as string,
                socketService,
                false
              ),
            type: 'refuse',
          },
        ],
        duration: Infinity,
      },
    },
    invitationResponse: {
      component: GenericToast,
      props: {
        title: 'Réponse à votre invitation',
        description: 'PlaceHolder',
      },
    },
    generic: {
      component: GenericToast,
      props: {
        title: 'This is a headless toast',
        description:
          'You have full control of styles and jsx, while still having the animations.',
        buttons: [
          {
            label: 'Reply',
            action: () => sonnerToast.dismiss(),
            type: 'generic',
          },
        ],
      },
    },
  };
  return map[type];
};

interface ToastEntry {
  component: React.FC<ToastProps>;
  props: Omit<ToastProps, 'id'>;
}
