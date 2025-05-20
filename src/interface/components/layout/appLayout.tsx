import { PropsWithChildren, ReactElement } from 'react';
import Header from './header/Header';
import { Toaster } from 'sonner';
import Footer from './footer/Footer';

const AppLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Toaster />
      <main className='relative min-h-[80vh]'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
