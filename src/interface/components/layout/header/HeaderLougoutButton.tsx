import { ReactElement } from 'react';
import useAuthContext from '../../../hooks/context/useAuthContext';
import SecondaryButton from '../../generics/SecondaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const HeaderLogOutButton = (): ReactElement => {
  const { logout } = useAuthContext();
  const isMobile = useMediaQuery('(max-width: 639px)');
  const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;
  return (
    <SecondaryButton
      label={`Quitter`}
      onClick={() => logout()}
      tailwindOptions={{ width: 'w-auto' }}
    >
      {isMobile && logoutIcon}
    </SecondaryButton>
  );
};

export default HeaderLogOutButton;
