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
        <header
          className='p-5 px-7 flex justify-between items-center shadow-[0_3px_8px_rgba(0,0,0,0.25)]

          lg:px-8 md:px[50px] sm:px[25px] relative bg-[rgb(27, 27, 27)] z-30'
        >
          <h1
            className='text-white font-bold text-2xl lg:text-4xl   flex-5'
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
