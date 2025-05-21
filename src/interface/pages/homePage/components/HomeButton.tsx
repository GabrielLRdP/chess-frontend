import { ReactElement } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const HomeButton = ({ label, onClick }: HomeButtonProps): ReactElement => {
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <button
      className={`bg-white bg-opacity-70 hover:bg-opacity-100 rounded-xl p-10  px-28 font-bold cursor-pointer transition-all duration-300 ${
        isMobile ? 'w-[100%]' : 'max-w-fit'
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
