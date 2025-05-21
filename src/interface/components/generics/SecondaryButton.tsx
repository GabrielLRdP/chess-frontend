import { ReactElement, ReactNode } from 'react';

type PrimaryButtonProps = {
  tailwindOptions?: object;
  haveShadow?: boolean;
  isActive?: boolean;
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  onTouchEnd?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const SecondaryButton = ({
  haveShadow = true,
  isActive = true,
  label,
  children,
  onClick,
  onTouchEnd,
  tailwindOptions,
  type = 'button',
}: PrimaryButtonProps): ReactElement => {
  const defaultOptions = {
    default: 'font-sans rounded-md px-[20px] whitespace-nowrap',
    textSize: 'text-14-14',
    height: 'h-[40px]',
    fontWeight: 'font-bold',
    width: 'w-full',
    additional: '',
  };

  const classes = Object.values({ ...defaultOptions, ...tailwindOptions }).join(
    ' '
  );

  const content = children || label;

  return isActive ? (
    <button
      type={type}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      className={`${classes} ${
        haveShadow ? 'shadow-gray-600 hover:shadow-gray-900' : ''
      } hover:border-quinary-darker hover:text-quinary-darker hover:shadow-quinary-darker text-quinary border-2 border-quinary`}
    >
      {content}
    </button>
  ) : (
    <button
      type={type}
      disabled
      className={`${classes} cursor-not-allowed bg-disable-grey-100 text-default-grey-300 focus:outline-none`}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;
