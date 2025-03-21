import { ReactElement } from 'react';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSignUpButton from './HeaderSignupButton';
import HeaderLogOutButton from './HeaderLougoutButton';
import useAuthContext from '../../hooks/useAuthContext';

const HeaderButtonsSection = (): ReactElement => {
  const { isAuthenticated, userName } = useAuthContext();

  return (
    <div className=' w-[25%] flex space-x-2 items-center'>
      {isAuthenticated ? (
        <>
          <p className='text-secondary font-bold text-l flex-5'>
            Bonjour {userName}
          </p>
          <HeaderLogOutButton />
        </>
      ) : (
        <>
          <HeaderSignUpButton />
          <HeaderLoginButton />
        </>
      )}
    </div>
  );
};

export default HeaderButtonsSection;
