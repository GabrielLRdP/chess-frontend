import LoginToast from './LoginToast';
import { toast as sonnerToast } from 'sonner';

export const ToastMap = {
  login: {
    component: LoginToast,
    props: {
      title: 'This is a headless toast',
      description:
        'You have full control of styles and jsx, while still having the animations.',
      button: {
        label: 'Reply',
        onClick: () => sonnerToast.dismiss(),
      },
    },
  },
};
