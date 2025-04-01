import { PropsWithChildren, ReactElement } from 'react';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';

const AppLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <Header />
      {/* added border border-primary because if not, a margin appear on top...*/}
      <main className='relative border border-primary'>
        <SideBar />
        {children}
      </main>
    </>
  );
};

export default AppLayout;
