import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SocketActionButton } from '../../../functions/triggerToast';
import useSocketContext from '../../../hooks/useSocketContext';

const AcceptButton = (props: {
  label: string;
  action: SocketActionButton['action'];
  id: string | number | undefined;
}): ReactElement => {
  const { socketService } = useSocketContext();
  return (
    <button
      className='rounded bg-green-400 px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-green-500'
      onClick={() => props.action(socketService)}
    >
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
};

export default AcceptButton;
