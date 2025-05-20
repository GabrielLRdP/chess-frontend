import { ReactElement } from 'react';

const HomeButton = ({ label, onClick }: HomeButtonProps): ReactElement => {
  return (
    <button
      className='bg-white bg-opacity-70 hover:bg-opacity-100 rounded-xl p-10 max-w-fit px-28 font-bold cursor-pointer transition-all duration-300'
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
