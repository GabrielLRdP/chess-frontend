import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-neutral-900 text-neutral-300 text-sm flex flex-col items-center justify-center py-6 text-center flex-1'>
      <p>
        Développé par{' '}
        <a
          href='https://github.com/GabrielLRdP'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:underline'
        >
          @GabrielLRdP
        </a>{' '}
        – © {year} Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
