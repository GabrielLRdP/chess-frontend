import { ReactElement } from 'react';
import Modal from '../generics/Modal';
import useHeaderContext from '../../hooks/useHeaderContext';

const LoginModal = (): ReactElement => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useHeaderContext();

  return (
    <Modal
      isOpen={isLoginModalOpen}
      setIsOpen={setIsLoginModalOpen}
      fullSize
      backgroundOpacity={50}
      closeButton
    >
      <div>Login</div>
    </Modal>
  );
};

export default LoginModal;
