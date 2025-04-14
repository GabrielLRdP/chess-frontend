import { ReactElement } from 'react';
import { toast as sonnerToast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const RefuseButton = (props: {
  action: () => void;
  id: string | number | undefined;
}): ReactElement => {
  return (
    <button
      className='rounded bg-red-400 px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-red-500'
      onClick={() => {
        props.action();
        sonnerToast.dismiss(props.id);
      }}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default RefuseButton;
