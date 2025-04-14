import { ReactElement, useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import PlayerCard from './components/PlayerCard';
import useSocketContext from '../../hooks/useSocketContext';

const OnlinePlayersPage = () => {
  const { userData } = useAuthContext();
  const { socketService } = useSocketContext();
  const [userList, setUserList] = useState<ReactElement[] | null>();

  useEffect(() => {
    socketService.emit('join-users-room', 'placeholder');
    return () => {
      socketService.emit('leave-users-room', 'placeHolder');
    };
  }, []);

  socketService.on<UserInfo[]>('update-users-list', (users) => {
    const filteredUsers = users.filter(
      (u) => u.userName !== userData?.userName
    );
    const usersDisplay = filteredUsers.map((u) => (
      <PlayerCard userName={u.userName} userId={u.userId} />
    ));
    setUserList(usersDisplay);
  });

  return (
    <section className='w-[50%] m-auto mt-9 mb-9'>
      <h2 className='text-secondary font-bold text-2xl flex-5'>
        Joueurs connectés
      </h2>
      <div className='flex flex-col mt-5 gap-3'>{userList}</div>
    </section>
  );
};

export default OnlinePlayersPage;

type UserInfo = { userId: string; iat: number; userName: string };
