import { ReactElement } from 'react';
import PrimaryButton from '../../../components/generics/PrimaryButton';
import { useInitializeGame } from '../../../hooks/useInitializeGame';

const NewGameButton = (): ReactElement => {
  const initializeGame = useInitializeGame();

  const handleClick = () => {
    initializeGame();
  };

  return (
    <PrimaryButton
      type='button'
      onClick={handleClick}
      label={`Nouvelle partie`}
    />
  );
};

export default NewGameButton;
