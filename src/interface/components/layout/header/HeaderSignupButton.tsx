import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useHeaderContext from '../../../hooks/context/useHeaderContext';
import PrimaryButton from '../../generics/PrimaryButton';
import { ReactElement } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

const HeaderSignUpButton = (): ReactElement => {
  const { setIsSignupModalOpen } = useHeaderContext();
  const isMobile = useMediaQuery('(max-width: 639px)');
  const signupIcon = <FontAwesomeIcon icon={faUserPlus} />;

  const handleClick = (): void => {
    setIsSignupModalOpen(true);
  };

  return (
    <PrimaryButton label={`S'inscrire`} onClick={handleClick}>
      {isMobile && signupIcon}
    </PrimaryButton>
  );
};

export default HeaderSignUpButton;
