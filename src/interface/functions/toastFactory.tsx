import { toast as sonnerToast } from 'sonner';
import { ToastMap } from '../components/toasts/toastMap';

export const triggerToast = (type: ToastType) => {
  const { component: Toast, props } = ToastMap[type];

  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={props.title}
      description={props.description}
      button={
        props.button && {
          label: props.button.label,
          onClick: () => console.log('Button clicked'),
        }
      }
    />
  ));
};

export type ToastType =
  | 'login'
  | 'generic'
  | 'signup'
  | 'sentInvitation'
  | 'receivedInvitation';
export interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button?: {
    label: string;
    onClick: () => void;
  };
}
