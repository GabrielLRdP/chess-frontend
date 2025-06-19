import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({
  label,
  isExpanded,
  icon,
  path,
}: MenuItemProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <li
      className={`flex items-center justify-center gap-3 w-full max-h-12 p-3 cursor-pointer relative transition-all duration-200 rounded-xl group hover:bg-tertiary hover:shadow-lg active:scale-95 ${
        isExpanded ? 'mx-2' : ''
      }`}
      onClick={() => navigate(path)}
    >
      <FontAwesomeIcon
        icon={icon}
        className='text-secondary-lighter group-hover:text-primary-darker transition-colors duration-200 drop-shadow-md'
        size='xl'
      />
      <div
        className={`text-secondary-lighter font-bold text-xl h-full transition-all max-h-[24px] transform group-hover:text-primary-darker ${
          isExpanded
            ? 'duration-500 opacity-100 translate-x-0'
            : 'duration-100 opacity-0 -translate-x-4 absolute'
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
  path: string;
};
