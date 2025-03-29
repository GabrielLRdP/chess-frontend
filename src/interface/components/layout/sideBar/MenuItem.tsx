import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';

const MenuItem = ({ label, isExpanded, icon }: MenuItemProps): ReactElement => {
  return (
    <li className='flex items-center justify-center gap-3 w-[100%] max-h-10 p-2 cursor-pointer relative transition-transform duration-100 ease-out hover:-translate-y-1 active:translate-y-0'>
      <FontAwesomeIcon
        icon={icon}
        className='text-secondary-lighter'
        size='xl'
      />
      <div
        className={`text-secondary-lighter font-bold text-xl h-full transition-all max-h-[24px] transform ${
          isExpanded
            ? 'duration-500 opacity-100 translate-x-0'
            : ' duration-100 opacity-0 -translate-x-4 absolute'
        } select-none`}
      >
        {label}
      </div>
    </li>
  );
};

export default MenuItem;

type MenuItemProps = {
  label: string;
  isExpanded: boolean;
  icon: IconDefinition;
};
