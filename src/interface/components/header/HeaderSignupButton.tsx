import useHeaderContext from '../../hooks/useHeaderContext';
import PrimaryButton from '../generics/PrimaryButton';
import { ReactElement } from 'react';

const HeaderSignUpButton = (): ReactElement => {
  const { setIsSignupModalOpen } = useHeaderContext();

  const handleClick = (): void => {
    setIsSignupModalOpen(true);
  };

  return <PrimaryButton label={`S'inscrire`} onClick={handleClick} />;
};

export default HeaderSignUpButton;
