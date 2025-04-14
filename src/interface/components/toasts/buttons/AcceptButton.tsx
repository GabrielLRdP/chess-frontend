import { ReactElement } from 'react';
import { toast as sonnerToast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AcceptButton = (props: {
  label: string;
  action: () => void;
  id: string | number | undefined;
}): ReactElement => {
  return (
    <button
      className='rounded bg-green-400 px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-green-500'
      onClick={() => {
        props.action();
        sonnerToast.dismiss(props.id);
      }}
    >
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
};

export default AcceptButton;
