import { ReactElement } from 'react';
import Modal from '../generics/Modal';
import useHeaderContext from '../../hooks/useHeaderContext';

const SignUpModal = (): ReactElement => {
  const { isSignupModalOpen, setIsSignupModalOpen } = useHeaderContext();

  return (
    <Modal
      isOpen={isSignupModalOpen}
      setIsOpen={setIsSignupModalOpen}
      fullSize
      backgroundOpacity={50}
      closeButton
    >
      <div>Signup</div>
    </Modal>
  );
};

export default SignUpModal;
