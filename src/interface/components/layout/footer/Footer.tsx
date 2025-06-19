import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-primary-darker text-secondary-lighter text-sm flex flex-col items-center justify-center py-6 text-center flex-1'>
      <p>
        Développé par{' '}
        <a
          href='https://github.com/GabrielLRdP'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-accent transition-colors duration-200 underline-offset-2 hover:underline'
        >
          @GabrielLRdP
        </a>{' '}
        – © {year} Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
