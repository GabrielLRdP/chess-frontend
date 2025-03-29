import { ReactElement } from 'react';
import useAuthContext from '../../../hooks/useAuthContext';
import SecondaryButton from '../../generics/SecondaryButton';

const HeaderLogOutButton = (): ReactElement => {
  const { logout } = useAuthContext();

  return (
    <SecondaryButton
      label={`Quitter`}
      onClick={() => logout()}
      tailwindOptions={{ width: 'w-auto' }}
    />
  );
};

export default HeaderLogOutButton;
