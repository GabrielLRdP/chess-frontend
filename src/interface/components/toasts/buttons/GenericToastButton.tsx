import { ReactElement } from 'react';
import { toast as sonnerToast } from 'sonner';
import { SimpleActionButton } from '../../../functions/triggerToast';

const GenericToastButton = (props: {
  label: string;
  action: SimpleActionButton['action'];
  id: string | number | undefined;
}): ReactElement => {
  return (
    <button
      className='rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100'
      onClick={() => {
        props.action();
        sonnerToast.dismiss(props.id);
      }}
    >
      {props.label}
    </button>
  );
};

export default GenericToastButton;
