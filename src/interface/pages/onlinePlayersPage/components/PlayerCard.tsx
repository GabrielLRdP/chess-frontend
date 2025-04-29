import { ReactElement } from 'react';
import PrimaryButton from '../../../components/generics/PrimaryButton';
import useSocketContext from '../../../hooks/context/useSocketContext';
import { triggerToast } from '../../../functions/triggerToast';

const PlayerCard = ({ userName, userId }: PlayerCardProps): ReactElement => {
  const { socketService } = useSocketContext();
  return (
    <div className='w-[100%] border-2 border-gray-700 bg-primary-lighter rounded p-5 flex justify-between items-center text-secondary transition-transform hover:-translate-y-2 hover:-translate-x-[3px]'>
      {userName}
      <PrimaryButton
        label='inviter'
        tailwindOptions={{ width: 'w-auto' }}
        onClick={() => {
          socketService.emit('send-invitation', userId);
          triggerToast('sentInvitation');
        }}
      />
    </div>
  );
};

export default PlayerCard;

type PlayerCardProps = {
  userName: string;
  userId: string;
};
