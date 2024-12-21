import { ReactElement } from 'react';
import { HeaderContextProvider } from '../../context/headerContext';
import HeaderSignUpButton from './HeaderSignupButton';
import HeaderLoginButton from './HeaderLoginButton';
import SignUpModal from '../SignUpModal/SignupModal';
import LoginModal from '../SignUpModal/LoginModal';

const Header = (): ReactElement => {
  return (
    <>
      <HeaderContextProvider>
        <SignUpModal />
        <LoginModal />
        <header className='p-5 flex justify-between items-center header-shadow px-[75px] relative'>
          <h1 className='text-secondary font-bold text-4xl flex-5'>Chess</h1>
          <div className=' w-[25%] flex space-x-2'>
            <HeaderSignUpButton />
            <HeaderLoginButton />
          </div>
        </header>
      </HeaderContextProvider>
    </>
  );
};

export default Header;
