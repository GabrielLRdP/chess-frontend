import SecondaryButton from '../../generics/SecondaryButton';
import useHeaderContext from '../../../hooks/useHeaderContext';
import { ReactElement } from 'react';

const HeaderLoginButton = (): ReactElement => {
  const { setIsLoginModalOpen } = useHeaderContext();

  const handleClick = (): void => {
    setIsLoginModalOpen(true);
  };

  return <SecondaryButton label={`Se connecter`} onClick={handleClick} />;
};

export default HeaderLoginButton;
