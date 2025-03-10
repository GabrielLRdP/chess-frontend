import { ReactElement } from 'react';
import Modal from '../generics/Modal';
import useHeaderContext from '../../hooks/useHeaderContext';
import SignUpForm from './SignupForm';

const SignUpModal = (): ReactElement => {
  const { isSignupModalOpen, setIsSignupModalOpen } = useHeaderContext();
  //TODO: Setup a sucess modal or a toaster when user creation succeeded
  return (
    <Modal
      isOpen={isSignupModalOpen}
      setIsOpen={setIsSignupModalOpen}
      fullSize
      backgroundOpacity={50}
      closeButton
    >
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
