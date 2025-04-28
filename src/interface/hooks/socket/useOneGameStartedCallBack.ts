import { useNavigate } from 'react-router-dom';
import useAuthContext from '../context/useAuthContext';
import { StartGameData } from '../../../application/handlers/socketHandlers/handleStartGame';
import { Player } from '../../../domain/entities/player/Player';
import { useInitializeGame } from '../useInitializeGame';

export const useOnGameStartedCallBack = () => {
  const { userData } = useAuthContext();
  const navigate = useNavigate();
  const initializeGame = useInitializeGame();
  return (data: StartGameData) => {
    const userName = userData?.userName;
    const [playerData, opponentData] =
      data.players[0].userName === userName
        ? [data.players[0], data.players[1]]
        : [data.players[1], data.players[0]];
    const player = new Player(
      playerData.userName,
      playerData.color,
      playerData.userId
    );
    const opponent = new Player(
      opponentData.userName,
      opponentData.color,
      opponentData.userId
    );
    navigate('/game');
    initializeGame(player, opponent);
  };
};
