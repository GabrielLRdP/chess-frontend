import { ReactElement, PropsWithChildren } from 'react';
import CloseButton from './CloseButton';

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  backgroundOpacity = 0,
  closeButton = false,
}: ModalProps): ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-200`}
      style={{
        backgroundColor: `rgba(0,0,0,${backgroundOpacity / 100 || 0.5})`,
      }}
    >
      <div className='bg-secondary rounded-xl min-w-[340px] min-h-[30%] p-8 shadow-2xl relative flex flex-col items-center'>
        {closeButton && <CloseButton onClick={() => setIsOpen(false)} />}
        {children}
      </div>
    </div>
  );
};

export default Modal;

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  backgroundOpacity?: number;
  closeButton?: boolean;
}>;
