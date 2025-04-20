import { toast as sonnerToast } from 'sonner';
import { toastMap } from '../components/toasts/toastMap';
import { SocketService } from '../../application/services/SocketService';

export const triggerToast = <T extends Record<string, unknown>>(
  type: ToastType,
  additionalData?: T
) => {
  const { component: Toast, props } = toastMap(type, additionalData);

  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        title={props.title}
        description={props.description}
        buttons={props.buttons}
      />
    ),
    { duration: props.duration || 4000 }
  );
};

export type ToastType =
  | 'login'
  | 'generic'
  | 'signup'
  | 'sentInvitation'
  | 'receivedInvitation'
  | 'invitationResponse';

export interface ToastProps {
  id?: string | number;
  title: string;
  description: string;
  buttons?: ToastButton[];
  duration?: number;
}

export type ToastButton = SimpleActionButton | SocketActionButton;
export interface SimpleActionButton {
  type: 'refuse' | 'generic' | 'accept';
  label?: string;
  action: () => void;
}
export interface SocketActionButton {
  type: 'accept' | 'refuse';
  label?: string;
  action: (socketService: SocketService) => void;
}

export type ToastButtonType = 'generic' | 'accept' | 'refuse';
