import SecondaryButton from '../../generics/SecondaryButton';
import useHeaderContext from '../../../hooks/context/useHeaderContext';
import { ReactElement } from 'react';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderLoginButton = (): ReactElement => {
  const { setIsLoginModalOpen } = useHeaderContext();
  const isMobile = useMediaQuery('(max-width: 639px)');
  const loginIcon = <FontAwesomeIcon icon={faRightToBracket} />;

  const handleClick = (): void => {
    setIsLoginModalOpen(true);
  };

  return (
    <SecondaryButton label={`Se connecter`} onClick={handleClick}>
      {isMobile && loginIcon}
    </SecondaryButton>
  );
};

export default HeaderLoginButton;
