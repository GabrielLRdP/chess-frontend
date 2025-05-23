import { ReactElement, useState } from 'react';
import {
  faPeopleGroup,
  faUser,
  faChess,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

const SideBar = (): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav
      className={`absolute -left-1 top-0 h-[100vh] bg-primary-darker 
      transition-all duration-200 origin-left ${
        isExpanded ? 'w-[400px]' : 'w-20'
      } `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className='flex flex-col gap-y-10 items-center py-24  '>
        <MenuItem
          icon={faUser}
          isExpanded={isExpanded}
          label={'Echiquier libre'}
          path={'/'}
        />
        <MenuItem
          icon={faPeopleGroup}
          isExpanded={isExpanded}
          label={'Jouer en ligne'}
          path={'/players'}
        />
        <MenuItem
          icon={faChess}
          isExpanded={isExpanded}
          label={'Partie en Ligne'}
          path={'/game'}
        />
      </ul>
    </nav>
  );
};

export default SideBar;
