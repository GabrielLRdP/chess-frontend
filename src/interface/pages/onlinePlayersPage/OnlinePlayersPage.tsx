import { ReactElement, useEffect, useState } from 'react';
import useAuthContext from '../../hooks/context/useAuthContext';
import PlayerCard from './components/PlayerCard';
import useSocketContext from '../../hooks/context/useSocketContext';

const OnlinePlayersPage = (): ReactElement => {
  const { userData } = useAuthContext();
  const { socketService } = useSocketContext();
  const [connectedUsers, setConnectedUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    if (!userData) return;

    socketService.emit('join-users-room', 'placeholder');
    return () => {
      socketService.emit('leave-users-room', 'placeholder');
    };
  }, [userData]);

  useEffect(() => {
    if (!userData) return;

    const handler = (users: UserInfo[]) => {
      const filtered = users.filter((u) => u.userName !== userData.userName);
      setConnectedUsers(filtered);
    };

    socketService.on<UserInfo[]>('update-users-list', handler);
    return () => socketService.off('update-users-list', handler);
  }, [socketService, userData]);

  return (
    <section className='w-[50%] m-auto mt-9 mb-9 text-secondary'>
      <h2 className='text-white font-bold text-2xl mb-12'>Joueurs connectés</h2>

      {!userData ? (
        <div className='text-center text-secondary-lighter italic mt-36'>
          Veuillez vous connecter pour voir les joueurs en ligne.
        </div>
      ) : connectedUsers.length > 0 ? (
        <div className='flex flex-col gap-3'>
          {connectedUsers.map((u) => (
            <PlayerCard
              key={u.userId}
              userName={u.userName}
              userId={u.userId}
            />
          ))}
        </div>
      ) : (
        <div className='text-center text-white italic mt-36'>
          Aucun joueur en ligne pour le moment…
        </div>
      )}
    </section>
  );
};

export default OnlinePlayersPage;

type UserInfo = { userId: string; iat: number; userName: string };
