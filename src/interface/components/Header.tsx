import { ReactElement } from 'react';
import PrimaryButton from './generics/PrimaryButton';
import SecondaryButton from './generics/SecondaryButton';

const Header = (): ReactElement => {
  return (
    <header className='p-5 flex justify-between items-center header-shadow px-[75px]'>
      <h1 className='text-primary font-bold text-4xl flex-5'>Chess</h1>
      <div className=' w-[25%] flex space-x-2'>
        <PrimaryButton label={`S'inscrire`} />
        <SecondaryButton label={`Se connecter`} />
      </div>
    </header>
  );
};

export default Header;
