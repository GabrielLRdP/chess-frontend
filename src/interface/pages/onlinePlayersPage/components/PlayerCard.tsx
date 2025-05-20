import { ReactElement } from 'react';
import PrimaryButton from '../../../components/generics/PrimaryButton';
import useSocketContext from '../../../hooks/context/useSocketContext';
import { triggerToast } from '../../../functions/triggerToast';

const PlayerCard = ({ userName, userId }: PlayerCardProps): ReactElement => {
  const { socketService } = useSocketContext();
  return (
    <div className='w-[100%] border-2 border-gray-700 bg-neutral-700 text-white bg-opacity-70 rounded p-5 font-bold flex justify-between items-center transition-transform hover:-translate-y-2 hover:-translate-x-[3px]'>
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
