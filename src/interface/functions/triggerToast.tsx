import { toast as sonnerToast } from 'sonner';
import { ToastMap } from '../components/toasts/toastMap';

export const triggerToast = (type: ToastType) => {
  const { component: Toast, props } = ToastMap[type];
  const buttons = props.buttons?.map((b) => {
    return { label: b.label, onClick: () => b.onClick, type: b.type };
  });

  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        title={props.title}
        description={props.description}
        buttons={props.buttons && buttons}
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
  | 'receivedInvitation';

export interface ToastProps {
  id?: string | number;
  title: string;
  description: string;
  buttons?: {
    label?: string;
    onClick: () => void;
    type: ToastButtonType;
  }[];
  duration?: number;
}

export type ToastButtonType = 'generic' | 'accept' | 'refuse';
