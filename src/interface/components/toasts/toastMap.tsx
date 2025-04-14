import GenericToast from './GenericToast';
import { toast as sonnerToast } from 'sonner';
import { ToastProps, ToastType } from '../../functions/triggerToast';

export const ToastMap: Record<ToastType, ToastEntry> = {
  login: {
    component: GenericToast,
    props: {
      title: 'Vous êtes connecté !',
      description: 'Vous pouvez maintenant jouer en ligne',
    },
  },
  signup: {
    component: GenericToast,
    props: {
      title: 'Inscription réussie, bienvenue parmi nous !',
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
      description: 'Vous avez reçu uune invitation à jouer.',
      buttons: [
        {
          onClick: () => sonnerToast.dismiss(),
          type: 'accept',
        },
        {
          onClick: () => sonnerToast.dismiss(),
          type: 'refuse',
        },
      ],
      duration: Infinity,
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
          onClick: () => sonnerToast.dismiss(),
          type: 'generic',
        },
      ],
    },
  },
};

interface ToastEntry {
  component: React.FC<ToastProps>;
  props: Omit<ToastProps, 'id'>;
}
