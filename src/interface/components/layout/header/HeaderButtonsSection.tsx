import { ReactElement } from 'react';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSignUpButton from './HeaderSignupButton';
import HeaderLogOutButton from './HeaderLougoutButton';
import useAuthContext from '../../../hooks/context/useAuthContext';

const HeaderButtonsSection = (): ReactElement => {
  const { isAuthenticated, userData } = useAuthContext();

  return (
    <div className='flex  space-x-2 items-center'>
      {isAuthenticated ? (
        <>
          <p className='text-white font-bold text-xs sm:text-sm md:text-md lg:text-lg'>
            Bonjour {userData?.userName}
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
