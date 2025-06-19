import { ReactElement } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const HomeButton = ({ label, onClick }: HomeButtonProps): ReactElement => {
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <button
      className={`bg-accent hover:bg-accent-darker rounded-xl py-4 px-8 font-bold cursor-pointer transition-all duration-300 flex-1 min-w-[140px] max-w-xs mx-auto text-center shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-white ${
        isMobile ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default HomeButton;

type HomeButtonProps = {
  label: string;
  onClick?: () => void;
};
