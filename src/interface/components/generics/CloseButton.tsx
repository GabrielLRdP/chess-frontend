import { ReactElement } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CloseButton = ({ onClick }: CloseButtonProps): ReactElement => {
  return (
    <button
      className={`absolute top-4 right-4 w-[20px] h-[20px]`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faX} className='text-gray-400' />
    </button>
  );
};

type CloseButtonProps = {
  onClick: () => void;
};
export default CloseButton;
