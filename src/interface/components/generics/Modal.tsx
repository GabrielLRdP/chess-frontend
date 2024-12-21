import { ReactElement, PropsWithChildren } from 'react';
import CloseButton from './CloseButton';

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  fullSize,
  backgroundOpacity = 0,
  closeButton = false,
}: ModalProps): ReactElement | null => {
  const size = fullSize ? 'w-full h-screen' : '';
  const opacity = `rgba(0, 0, 0, ${backgroundOpacity / 100})`;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${size} absolute z-50 flex justify-center items-center`}
      style={{ backgroundColor: `${opacity}` }}
    >
      <div className='bg-secondary rounded-md min-w-[40%] min-h-[30%] p-10 relative'>
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
  fullSize?: boolean;
  backgroundOpacity?: number;
  closeButton?: boolean;
}>;
