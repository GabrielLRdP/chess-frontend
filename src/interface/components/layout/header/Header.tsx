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
        <header className='p-5 px-7 flex justify-between items-center shadow-[0_4px_16px_rgba(0,0,0,0.30)] bg-gradient-to-r from-primary-darker via-primary to-primary-lighter lg:px-8 md:px[50px] sm:px[25px] relative z-30'>
          <h1
            className='text-white font-extrabold text-2xl lg:text-4xl flex-5 tracking-tight transition-colors duration-200 cursor-pointer hover:text-secondary-lighter'
            onClick={() => {
              navigate('/');
            }}
          >
            ChessSquare
          </h1>
          <HeaderButtonsSection />
        </header>
      </HeaderContextProvider>
    </>
  );
};

export default Header;
