import { toast as sonnerToast } from 'sonner';
import { ToastMap } from '../components/toasts/toastMap';

export const triggerToast = (type: ToastType) => {
  const { component: Toast, props } = ToastMap[type];

  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={props.title}
      description={props.description}
      button={{
        label: props.button.label,
        onClick: () => console.log('Button clicked'),
      }}
    />
  ));
};

type ToastType = 'login';
