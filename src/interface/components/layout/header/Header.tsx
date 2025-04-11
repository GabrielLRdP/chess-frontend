import { ReactElement } from 'react';
import HeaderButtonsSection from './HeaderButtonsSection';
import { useNavigate } from 'react-router-dom';
import { HeaderContextProvider } from '../../../context/HeaderContext.tsx';
import SignUpModal from '../../ConnexionModals/SignupModal';
import LoginModal from '../../ConnexionModals/LoginModal';

const Header = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContextProvider>
        <SignUpModal />
        <LoginModal />
        <header className='p-5 flex justify-between items-center header-shadow px-[75px] relative'>
          <h1
            className='text-secondary font-bold text-4xl flex-5'
            onClick={() => {
              navigate('/');
            }}
          >
            Chess
          </h1>
          <HeaderButtonsSection />
        </header>
      </HeaderContextProvider>
    </>
  );
};

export default Header;
